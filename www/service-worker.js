/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.0.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.0.0"});

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/assets/fonts/ionicons.eot",
    "revision": "bdf1d30681cf87986c385eea78e8de9a"
  },
  {
    "url": "/assets/fonts/ionicons.scss",
    "revision": "c1fdfabf9cbd412b444f064d27641f10"
  },
  {
    "url": "/assets/fonts/ionicons.svg",
    "revision": "d9496a234c81179afbca6bf5959cc30a"
  },
  {
    "url": "/assets/fonts/ionicons.ttf",
    "revision": "74c652671225d6ded874a648502e5f0a"
  },
  {
    "url": "/assets/fonts/ionicons.woff",
    "revision": "81414686e99c00d2921e03dd53c0ab04"
  },
  {
    "url": "/assets/fonts/ionicons.woff2",
    "revision": "311d81961c5880647fec7eaca1221b2a"
  },
  {
    "url": "/assets/fonts/noto-sans-bold.ttf",
    "revision": "a165a42685795361b25593effb32fdb1"
  },
  {
    "url": "/assets/fonts/noto-sans-bold.woff",
    "revision": "ce3d777f2c41cca1494021cfa3fcd72c"
  },
  {
    "url": "/assets/fonts/noto-sans-regular.ttf",
    "revision": "2fd9c16b805724d590c0cff96da070a4"
  },
  {
    "url": "/assets/fonts/noto-sans-regular.woff",
    "revision": "ce8ba1a4ff970db896192c41fc3c96b1"
  },
  {
    "url": "/assets/fonts/noto-sans.scss",
    "revision": "47d5f7264952ccee8cead7b6dcb6d1bd"
  },
  {
    "url": "/assets/fonts/roboto-bold.ttf",
    "revision": "1f4fd7e4df65487f07ba9148f7ca095d"
  },
  {
    "url": "/assets/fonts/roboto-bold.woff",
    "revision": "43183beef21370d8a4b0d64152287eba"
  },
  {
    "url": "/assets/fonts/roboto-bold.woff2",
    "revision": "28d80f43ae4cc35f19e1f1a6ab670f25"
  },
  {
    "url": "/assets/fonts/roboto-light.ttf",
    "revision": "9ff15bd34ea83e4dd3f23c20c7f5090e"
  },
  {
    "url": "/assets/fonts/roboto-light.woff",
    "revision": "7e2d32e7141050d758a38b4ec96390c0"
  },
  {
    "url": "/assets/fonts/roboto-light.woff2",
    "revision": "a826ff848e9f52b1732fed7d154afa97"
  },
  {
    "url": "/assets/fonts/roboto-medium.ttf",
    "revision": "a937e2cae14e68262a45aa91204c2fdf"
  },
  {
    "url": "/assets/fonts/roboto-medium.woff",
    "revision": "0f3b7101a8adc1afe1fbe89775553c32"
  },
  {
    "url": "/assets/fonts/roboto-medium.woff2",
    "revision": "b2c9c262e089411e20689ed393c00796"
  },
  {
    "url": "/assets/fonts/roboto-regular.ttf",
    "revision": "07f8fb6acbabeb10d3fad9ab02d65e0b"
  },
  {
    "url": "/assets/fonts/roboto-regular.woff",
    "revision": "f94d5e5102359961c44a1da1b58d37c9"
  },
  {
    "url": "/assets/fonts/roboto-regular.woff2",
    "revision": "e6b9d54811307f98da62eae992ae05ba"
  },
  {
    "url": "/assets/fonts/roboto.scss",
    "revision": "e7c30075bc0f0b11422bfbdb2236f9e7"
  },
  {
    "url": "/assets/icon/favicon.ico",
    "revision": "37096b1d5ca5b77ba1f4d5b8fd4016e7"
  },
  {
    "url": "/assets/images/icons/icon-128x128.png",
    "revision": "9535e4682569733c1bd6d99fc513e6fb"
  },
  {
    "url": "/assets/images/icons/icon-144x144.png",
    "revision": "471ef498d1df12533ef4db02e30397c5"
  },
  {
    "url": "/assets/images/icons/icon-152x152.png",
    "revision": "92afb9b3978b3af7f0eabdd4b7907c7a"
  },
  {
    "url": "/assets/images/icons/icon-192x192.png",
    "revision": "314a3004ed85f48440e76de5bc360647"
  },
  {
    "url": "/assets/images/icons/icon-384x384.png",
    "revision": "4961a34eae42eeb138368698ef9996ae"
  },
  {
    "url": "/assets/images/icons/icon-512x512.png",
    "revision": "392998449f8ff1c6b2a7be2eaf5b57d8"
  },
  {
    "url": "/assets/images/icons/icon-72x72.png",
    "revision": "e2a57782534c17f0c154ad1f449599a9"
  },
  {
    "url": "/assets/images/icons/icon-96x96.png",
    "revision": "25ffdb7ca905819bcce8914d6689068e"
  },
  {
    "url": "/assets/imgs/logo.png",
    "revision": "aa054eb23bcba11636d7be097640897a"
  },
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
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/*", workbox.strategies.staleWhileRevalidate(), 'GET');
