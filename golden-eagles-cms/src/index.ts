// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const SHOP_ITEM_UID = 'api::shop-item.shop-item';
    const FRONTEND_URL =
      process.env.FRONTEND_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      'http://localhost:3000';

    strapi.documents.use(async (context, next) => {
      if (context.uid !== SHOP_ITEM_UID || !['create', 'update'].includes(context.action)) {
        return next();
      }

      const data = context.params?.data as Record<string, unknown> | undefined;
      const link = typeof data?.link === 'string' ? data.link.trim() : '';
      if (!link) return next();

      try {
        const fetchOgUrl = new URL('/api/fetch-og', FRONTEND_URL);
        fetchOgUrl.searchParams.set('url', link);
        const res = await fetch(fetchOgUrl.toString());
        if (!res.ok) return next();
        const og = (await res.json()) as {
          title?: string | null;
          imageUrl?: string | null;
        };
        if (og.title) data!.title = og.title;
        if (og.imageUrl) data!.imageUrl = og.imageUrl;
      } catch {
        // ignore
      }

      return next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
