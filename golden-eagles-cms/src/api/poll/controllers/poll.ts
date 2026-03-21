/**
 * poll controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::poll.poll', ({ strapi }) => ({
  async vote(ctx) {
    const { id } = ctx.params;
    const { optionId, deviceId, name } = ctx.request.body ?? {};

    if (!optionId) {
      return ctx.badRequest('Missing optionId');
    }

    if (!deviceId) {
      return ctx.badRequest('Missing deviceId');
    }

    if (!name) {
      return ctx.badRequest('Missing name');
    }

    const resolvePoll = async (identifier: string | number) =>
      (await strapi.entityService.findOne('api::poll.poll', identifier, {
        populate: {
          options: true,
        },
      })) as
        | {
            id: number;
            active?: boolean | null;
            endsAt?: string | null;
            options?: Array<{
              id: number;
              label: string;
              votes?: number | null;
            }>;
          }
        | null;

    const poll = await resolvePoll(id);

    if (!poll) {
      return ctx.notFound();
    }

    const pollId = poll.id;

    const entityService = strapi.entityService as typeof strapi.entityService & {
      findMany: (
        uid: string,
        params?: Record<string, unknown>
      ) => Promise<unknown>;
      create: (
        uid: string,
        params?: Record<string, unknown>
      ) => Promise<unknown>;
    };

    const existingVotes = (await entityService.findMany(
      'api::poll-vote.poll-vote',
      {
        filters: {
          poll: pollId,
          deviceId,
        },
        limit: 1,
      }
    )) as Array<{ id: number }>;

    if (existingVotes.length > 0) {
      ctx.status = 409;
      ctx.body = { error: 'Already voted' };
      return;
    }

    const endsAt = poll.endsAt ? new Date(poll.endsAt) : null;
    const isOpen = poll.active && (!endsAt || Date.now() < endsAt.getTime());

    if (!isOpen) {
      return ctx.badRequest('Poll is closed');
    }

    const options = Array.isArray(poll.options) ? poll.options : [];
    const optionMatch = options.find(
      (option) => String(option.id) === String(optionId)
    );

    if (!optionMatch) {
      return ctx.badRequest('Invalid optionId');
    }

    const updatedOptions = options.map((option) => {
      const safeLabel = option.label ?? '';
      if (String(option.id) !== String(optionId)) {
        return {
          ...option,
          label: safeLabel,
        };
      }

      return {
        ...option,
        label: safeLabel,
        votes: (option.votes ?? 0) + 1,
      };
    });

    const updated = await strapi.entityService.update('api::poll.poll', pollId, {
      data: {
        options: updatedOptions,
      },
      populate: {
        options: true,
      },
    });

    await entityService.create('api::poll-vote.poll-vote', {
      data: {
        poll: pollId,
        deviceId,
        optionId: Number(optionId),
        name: String(name).trim(),
      },
    });

    ctx.body = { data: updated };
  },
}));

