const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api',{
      target: 'http://184.72.49.233:8080',
      changeOrigin: true,
    })
  );
};