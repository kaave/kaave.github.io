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
    "revision": "7b63cc86be127245318a6cd7a0fab22f"
  },
  {
    "url": "about/index.html",
    "revision": "f2a35583ddc2909297571e1d30f80658"
  },
  {
    "url": "assets/css/0.styles.ff3a76eb.css",
    "revision": "482e7ef0be14b1befbed376e57f82c94"
  },
  {
    "url": "assets/js/10.107f4834.js",
    "revision": "2a0e51a0e9038574e46f64f2ec0723b2"
  },
  {
    "url": "assets/js/11.33de596a.js",
    "revision": "84fd0c9db7c4ce5ee4e489f9de346f9f"
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
    "url": "assets/js/6.952ce4b0.js",
    "revision": "505473549cecd10734d22dbefeb9df73"
  },
  {
    "url": "assets/js/7.d218a362.js",
    "revision": "e161f58b3b52b286cc21f2048d64a6e4"
  },
  {
    "url": "assets/js/8.f448438b.js",
    "revision": "6cc8115016fba58d4f2d73a0e94c1ddf"
  },
  {
    "url": "assets/js/9.0e7ebef7.js",
    "revision": "e6523dec9f32593e85c4c58120f3599a"
  },
  {
    "url": "assets/js/app.e4ebcd86.js",
    "revision": "aa1462ee32172e12cc4025d852af26a4"
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
    "revision": "d1cbe2da9252744d47723a1e4da4e197"
  },
  {
    "url": "entries/2018/0614-pixi-glitch.html",
    "revision": "e3e3486e54e5c5627e295fd18a4f3937"
  },
  {
    "url": "entries/2018/0614/thumbnail.gif",
    "revision": "acb224f5d39f168b8427221cacbfe92c"
  },
  {
    "url": "entries/2018/0923-vuepress.html",
    "revision": "fcb84c9c437b5d07ea7b5a949780f5c5"
  },
  {
    "url": "entries/2018/0923/thumbnail.png",
    "revision": "e790a805f20a8b4597c7ff3bbdb2ff8a"
  },
  {
    "url": "entries/index.html",
    "revision": "fb6ba10562d5dfce98ac941f37553abb"
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
    "url": "googled4dd8c2a3c565054.html",
    "revision": "8013ec934a9cb444274ec2ae3e92efa7"
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
    "revision": "8952c0cf554a55515ef441324bec869f"
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
