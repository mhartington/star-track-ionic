module.exports = {
  modifyUrlPrefix: {
    '': '/'
  },
  maximumFileSizeToCacheInBytes: 5000000,
  globDirectory: 'www/',
  globPatterns: ['**/*.{js,css,html,json}'],
  swDest: './www/service-worker.js',
  globIgnores: ['workbox-v3.0.0/**/*'],
  // globIgnores: ['../workbox-cli-config.js', 'workbox-v3.0.0#<{(||)}>#*'],
    runtimeCaching: [
    {
      urlPattern: '*',
      handler: 'staleWhileRevalidate'
    }
  ]
};
