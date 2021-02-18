const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    '/apigw/rtg/rest/euromillions',
    createProxyMiddleware({
      target: 'https://www.fdj.fr',
      changeOrigin: true,
    })
  );
};
