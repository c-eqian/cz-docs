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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d57b8fc643a29f2352975ef7bbb58c9b"
  },
  {
    "url": "assets/css/0.styles.fbf86e7c.css",
    "revision": "fde8c9a061ac2b67ab1796a54a44e4f0"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.90f877a7.js",
    "revision": "58f4c665b80067e8b1c0e063b31b9e0a"
  },
  {
    "url": "assets/js/10.e7951cff.js",
    "revision": "6b30d32c76bf7d28d45a2119579d34f5"
  },
  {
    "url": "assets/js/11.59e1a829.js",
    "revision": "d0a38757309f2c1d7232305ed4c62852"
  },
  {
    "url": "assets/js/12.4fe7a2b8.js",
    "revision": "4728bd14aba7fcda6d36324db0064579"
  },
  {
    "url": "assets/js/13.b00b3d5e.js",
    "revision": "13fc39df039f1e3b1775b9ccb3316ddf"
  },
  {
    "url": "assets/js/14.1fa8ce68.js",
    "revision": "0cf826b7ff1a98c26c03e57e5d4b9a41"
  },
  {
    "url": "assets/js/15.bbbd7f77.js",
    "revision": "aa8299229ce1329efc81c317bf2b8726"
  },
  {
    "url": "assets/js/16.7e9d5df8.js",
    "revision": "2b60977bf24e6f28aed8b7fa1224b0f8"
  },
  {
    "url": "assets/js/17.93d055a7.js",
    "revision": "dca1f2af76a287b4a1c375dfb44133a3"
  },
  {
    "url": "assets/js/18.6fdc24e5.js",
    "revision": "6ad13b7d383458d3c52878e7606c84d6"
  },
  {
    "url": "assets/js/19.b985ce14.js",
    "revision": "55c2bb2c8d2f77e0fb54da080697b57d"
  },
  {
    "url": "assets/js/20.6b60e9d2.js",
    "revision": "ed5f7d68978671eeed2c2d0925588010"
  },
  {
    "url": "assets/js/21.83f284ec.js",
    "revision": "ab45c5e005c53315a4a66eae57af818b"
  },
  {
    "url": "assets/js/22.883b30c9.js",
    "revision": "307d91a525fae09719e76711131621f0"
  },
  {
    "url": "assets/js/3.458c87ad.js",
    "revision": "dde671555b2f522699d58de294d4ef88"
  },
  {
    "url": "assets/js/4.5b73d2ed.js",
    "revision": "0be440303fec0c3087c48e553e0d7235"
  },
  {
    "url": "assets/js/5.bf8ff550.js",
    "revision": "553612314446e64422193bce01cd58ec"
  },
  {
    "url": "assets/js/6.d664b3ed.js",
    "revision": "9e52af296d3c616638c606d5f5bf1525"
  },
  {
    "url": "assets/js/7.11ae43b7.js",
    "revision": "90b2c1856668c411b2c940943ab2a537"
  },
  {
    "url": "assets/js/8.7fab6618.js",
    "revision": "5072638951e5fcfe2462aa0e3b23f602"
  },
  {
    "url": "assets/js/9.ffdd172d.js",
    "revision": "1e19f95d835f80b40e11591b70e6a1b2"
  },
  {
    "url": "assets/js/app.0cfc9a5d.js",
    "revision": "b814344d38ea52a181b129cf3d7670ca"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "fdaa522b7146f2a02981443532ce2252"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "cfcb20416e7292142598997559765219"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "b22734addc1879393b7b704ce7351930"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "214528b7827b7cafcba0a154fab75a1a"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "b6fff9142932317813b5fff4322b9169"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "7be0e27118bb747c03e9d4b4aa02c383"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "1bec6310bb56c756a08507220825be38"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "469f26f7f19c27ad6ca73a8df78dad59"
  },
  {
    "url": "categories/index.html",
    "revision": "93711493304e9e9c7b7fd505382138db"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5f92855c9c8c5cf414e3463eaa3e0835"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "f2f5677b10a559b94aeedf9c8b89ae16"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "c93e0edf81699f013bfb8d0a08d35e7f"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "4e98282d5f153bb25011c1a99bf8391b"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "a9c50982baae8b7887bc86183691a1e9"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "d1cfe6a5df923cbbadc8ccb4cc393de4"
  },
  {
    "url": "index.html",
    "revision": "0136d330ce5c6a897f45d1be280da308"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "fe49b51d92a9a767de0b0d3ecfe73878"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fd62df150ac0d027b837bab2e3ecc477"
  },
  {
    "url": "tag/index.html",
    "revision": "c85ab01a57fb9da4ffd8ceecb1e75ad3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "aef4450033f6bf81ae2195afc2c87817"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "0675363e04d2a4bef134e15782f53a00"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "199611766916378e5ab903f704fb5ff5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f72f2d523dfacf538b5694126f04fb56"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "7bcb8720389633c831b4a3db8c5e3418"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "950bd504768697a454af86de9397c253"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "a337836291aafee3bd85917d47429cd7"
  },
  {
    "url": "timeline/index.html",
    "revision": "01782b790c710f49e44d8830f294a81d"
  }
].concat(self.__precacheManifest || []);
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
