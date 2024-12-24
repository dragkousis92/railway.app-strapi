export default{
  routes: [
    {
      method: 'GET',
      path: '/get-articles',
      handler: 'upcoming.getArticles',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};