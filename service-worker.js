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
    "revision": "06532bd2b13572102b61254199775914"
  },
  {
    "url": "about/index.html",
    "revision": "addafb4b6d6dcf227d8101ff42ae07c7"
  },
  {
    "url": "assets/css/0.styles.4955f728.css",
    "revision": "c0f1e2dbf41786224b41cd7492e11158"
  },
  {
    "url": "assets/js/10.3c9e4ea0.js",
    "revision": "a5bb438d9fb1e44141f212eff3c9b131"
  },
  {
    "url": "assets/js/11.658ba5ea.js",
    "revision": "847cb97efb80861be6809c18edd91817"
  },
  {
    "url": "assets/js/12.9677e907.js",
    "revision": "0daec568fce6c394e9bb984bd625c5af"
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
    "url": "assets/js/4.ea0b6816.js",
    "revision": "2e7cf52b63273714dd6d331911873c02"
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
    "url": "assets/js/8.f448438b.js",
    "revision": "6cc8115016fba58d4f2d73a0e94c1ddf"
  },
  {
    "url": "assets/js/9.1187de05.js",
    "revision": "524660388e31c327b5663ef503824425"
  },
  {
    "url": "assets/js/app.776a43f7.js",
    "revision": "2153b5f22490df9249faec349e466958"
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
    "revision": "d25e3262b3429ff545a0750db3be01e5"
  },
  {
    "url": "entries/2018/0614-pixi-glitch.html",
    "revision": "75825fda84e9d1545c5e7e857c176468"
  },
  {
    "url": "entries/2018/0614/thumbnail.gif",
    "revision": "acb224f5d39f168b8427221cacbfe92c"
  },
  {
    "url": "entries/2018/0923-vuepress.html",
    "revision": "5bf1528cced88820a5d9ab1b04b49187"
  },
  {
    "url": "entries/2018/0923/thumbnail.png",
    "revision": "e790a805f20a8b4597c7ff3bbdb2ff8a"
  },
  {
    "url": "entries/2018/0930-webgl-vscode.html",
    "revision": "a00204c3f764ab656e4d85045e107b5b"
  },
  {
    "url": "entries/2018/0930/thumbnail.png",
    "revision": "2defcd2109f8d8841e6989993a62f90b"
  },
  {
    "url": "entries/index.html",
    "revision": "185153ff8a4663d748ead30d689c13f2"
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
    "revision": "7b5f942e60e2fbdba2edb5efaeaf57a4"
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
