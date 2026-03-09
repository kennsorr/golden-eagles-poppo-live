/** @type {import('@strapi/strapi').Core.RouterConfig} */
export default {
  type: 'content-api',
  routes: [
    {
      method: 'GET',
      path: '/fetch-preview',
      handler: 'api::shop-item.shop-item.fetchPreview',
      config: {
        auth: false,
      },
    },
  ],
};
