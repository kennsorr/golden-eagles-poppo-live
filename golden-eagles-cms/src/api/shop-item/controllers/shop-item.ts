/**
 * shop-item controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::shop-item.shop-item',
  ({ strapi }) => ({
    async fetchPreview(ctx) {
      const url = ctx.request.query?.url;
      if (!url || typeof url !== 'string' || !url.trim()) {
        return ctx.badRequest('Missing or invalid url query parameter');
      }

      const baseUrl =
        process.env.FRONTEND_URL ||
        process.env.NEXT_PUBLIC_APP_URL ||
        'http://localhost:3000';
      const fetchOgUrl = new URL('/api/fetch-og', baseUrl);
      fetchOgUrl.searchParams.set('url', url.trim());

      try {
        const res = await fetch(fetchOgUrl.toString());
        const data = (await res.json()) as { error?: string; title?: string; imageUrl?: string; description?: string };

        if (!res.ok) {
          return ctx.badRequest(data?.error || 'Failed to fetch preview');
        }

        return ctx.send(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Fetch failed';
        return ctx.badRequest(message);
      }
    },
  })
);

