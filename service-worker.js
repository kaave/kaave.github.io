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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "52eba246a738119b1f09adbd25386776"
  },
  {
    "url": "about/index.html",
    "revision": "0bef0b5ecc14edf46de7f21ad9a682fd"
  },
  {
    "url": "assets/css/0.styles.2da2f59a.css",
    "revision": "2a9dd85efe773f006b294bfd8c8568b3"
  },
  {
    "url": "assets/js/10.6a537d09.js",
    "revision": "7b19c6f32e2ad3c9cd1ccb1567d685ef"
  },
  {
    "url": "assets/js/2.4faa4522.js",
    "revision": "3e0636443587f83f92c5b6debd173d3a"
  },
  {
    "url": "assets/js/3.fa5d7dc6.js",
    "revision": "4e9fabe0aeebf6af7829ed030a8ad009"
  },
  {
    "url": "assets/js/4.13c04526.js",
    "revision": "a89678f6c97bdb9df8c219be273ca017"
  },
  {
    "url": "assets/js/5.f27e5580.js",
    "revision": "38141e57b845075fa14fc4ab149286d6"
  },
  {
    "url": "assets/js/6.8d1fa845.js",
    "revision": "06628dd56b6bee774a7faa01cb3832a8"
  },
  {
    "url": "assets/js/7.78fbcb14.js",
    "revision": "5c473c59e4c08d751246aed70e4879ce"
  },
  {
    "url": "assets/js/8.b33b4ccc.js",
    "revision": "9f0b4ac98c2cfd4e8c541b087ec48221"
  },
  {
    "url": "assets/js/9.1187de05.js",
    "revision": "524660388e31c327b5663ef503824425"
  },
  {
    "url": "assets/js/app.4479cde3.js",
    "revision": "167237ac7f373f8243ab5f6b6d782172"
  },
  {
    "url": "css/animation.css",
    "revision": "4431213f856f0521033d8f1e56d14c61"
  },
  {
    "url": "css/kaave-codes.css",
    "revision": "916b5a6974d89de49e1fa1ae624e2860"
  },
  {
    "url": "css/kaave-embedded.css",
    "revision": "99eebb353ae30d35c430d546886b6431"
  },
  {
    "url": "css/kaave-ie7-codes.css",
    "revision": "d9dde5e27b89d9bf33c7ca7e2c1a4939"
  },
  {
    "url": "css/kaave-ie7.css",
    "revision": "889fdca2d10c14fc0ea32168e819e083"
  },
  {
    "url": "css/kaave.css",
    "revision": "47b840ea636b66e357c33fb8863d0639"
  },
  {
    "url": "entries/2017/0702-ordinary-day.html",
    "revision": "7c185022605c715e3c2f88adad0690d8"
  },
  {
    "url": "entries/2018/0614-pixi-glitch.html",
    "revision": "db909caa95c2718dcccd9037863be87c"
  },
  {
    "url": "entries/2018/0614/thumbnail.gif",
    "revision": "acb224f5d39f168b8427221cacbfe92c"
  },
  {
    "url": "entries/index.html",
    "revision": "c1b5f2f474d84ffb23a14b1fd10bd84b"
  },
  {
    "url": "font/kaave.eot",
    "revision": "1bedc01f6a170594aa0422948335b472"
  },
  {
    "url": "font/kaave.svg",
    "revision": "d6ae723e17e0a6269aeff891338eb62c"
  },
  {
    "url": "font/kaave.ttf",
    "revision": "7726f17b555de2be7c51059b793abe4a"
  },
  {
    "url": "font/kaave.woff",
    "revision": "40b24d38b14e0365d99fc5b413ffdb32"
  },
  {
    "url": "font/kaave.woff2",
    "revision": "4c265b15f7840b368ec8ad26b943fe25"
  },
  {
    "url": "images/github_tiles.png",
    "revision": "1a7cd864366c06e0ba645736458ddb21"
  },
  {
    "url": "images/how_to_create.jpg",
    "revision": "27605eacba5d90593ef1eef14034d314"
  },
  {
    "url": "images/my_bike.jpg",
    "revision": "65ac04c413ebd4ea9005657782bd7c3e"
  },
  {
    "url": "images/my_desk.jpg",
    "revision": "dddafa9142df5e512ce07cf67545c85d"
  },
  {
    "url": "images/outbound.svg",
    "revision": "af86993cb646961a4474d5ada225dc25"
  },
  {
    "url": "images/reaktor.png",
    "revision": "c944bf50070f5b763c2beae5d72e16d7"
  },
  {
    "url": "index.html",
    "revision": "80cceb77ded92d20904e1c2f9524f82a"
  },
  {
    "url": "ogp.jpg",
    "revision": "8f55062b0a485bf372e2cc1f59e74f77"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
