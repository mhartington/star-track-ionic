importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/build/0.js",
    "revision": "c54a723b6af400a52ea7f7fc3eb06cdf"
  },
  {
    "url": "/build/1.js",
    "revision": "55b4da9dc30f00cd65abfc937a73d267"
  },
  {
    "url": "/build/2.js",
    "revision": "7a85b52d611677619defa95a26fa9c62"
  },
  {
    "url": "/build/3.js",
    "revision": "8b2ee3b87f35794fe796d7d8e7a0ac2c"
  },
  {
    "url": "/build/main.css",
    "revision": "1036e91a9241062d0371f67d264fffab"
  },
  {
    "url": "/build/main.js",
    "revision": "04829c02461d895ae618e76a3202781b"
  },
  {
    "url": "/build/polyfills.js",
    "revision": "443c697fc904cd88a651d09cf5c2fe2b"
  },
  {
    "url": "/build/sw-toolbox.js",
    "revision": "2770efb889cc10c4de88d0b746c2a13c"
  },
  {
    "url": "/build/vendor.js",
    "revision": "978367fac784a0bf9760e9407172f366"
  },
  {
    "url": "/index.html",
    "revision": "bb11dbf91e1a9594b2704ba910080c04"
  },
  {
    "url": "/manifest.json",
    "revision": "71e9020cd10949e5af9aed93daa8c8da"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('*', workboxSW.strategies.staleWhileRevalidate({}), 'GET');
