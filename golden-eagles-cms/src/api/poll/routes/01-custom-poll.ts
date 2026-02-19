/** @type {import('@strapi/strapi').Core.RouterConfig} */
export default {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/polls/:id/vote',
      handler: 'api::poll.poll.vote',
      config: {
        auth: false,
      },
    },
  ],
};
