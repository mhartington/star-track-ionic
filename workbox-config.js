module.exports = {
  modifyUrlPrefix: {
    '': '/'
  },
  importWorkboxFrom: 'local',
  clientsClaim: true,
  maximumFileSizeToCacheInBytes: 5000000,
  globDirectory: 'www/',
  globPatterns: ['**/*.{eot,scss,svg,ttf,woff,woff2,ico,png,js,css,html,json}'],
  swDest: 'www/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: '/*',
      handler: 'staleWhileRevalidate'
    }
  ]
};
