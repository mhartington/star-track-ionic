module.exports = {
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets'
  },
  // copyIndexContent: {
  //   src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
  //   dest: '{{WWW}}'
  // },
  copyIndexContent: {
    src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json'],
    dest: '{{WWW}}'
  },
  copyFonts: {
    src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyPolyfills: {
    src: ['{{ROOT}}/node_modules/ionic-angular/polyfills/polyfills.js'],
    dest: '{{BUILD}}'
  },
  // copyWorkbox: {
  //   src: ['{{ROOT}}/node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v1.0.0.js'],
  //   dest: '{{BUILD}}'
  // }
}
