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
    "revision": "432d365f8fe6ff114ab59410d47795bf"
  },
  {
    "url": "assets/css/0.styles.119859db.css",
    "revision": "3a2b4d4297f4d1b73bcd67c93cec1fe6"
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
    "url": "assets/js/1.8f5e831d.js",
    "revision": "d3c606f400304af90576ccec86c68b97"
  },
  {
    "url": "assets/js/10.d6e1a295.js",
    "revision": "8a6bdade999c58efa34cea2c4d4f3e63"
  },
  {
    "url": "assets/js/11.79fb7931.js",
    "revision": "209eb67fdd38525b6253f1c9979b005b"
  },
  {
    "url": "assets/js/12.bfc548ed.js",
    "revision": "3e224c619a565ac38f6963a38bb29531"
  },
  {
    "url": "assets/js/13.5b8d51b6.js",
    "revision": "3fd60a8db0450c1eefc67546600c3334"
  },
  {
    "url": "assets/js/14.765abc4b.js",
    "revision": "10544d0a134ddfb9280de2ffe95bac76"
  },
  {
    "url": "assets/js/15.2c336b09.js",
    "revision": "916a7cc43fceacdfea251645985ceb95"
  },
  {
    "url": "assets/js/16.3f2e7597.js",
    "revision": "2e6444a0c8f9e421ed75b154ef0ab294"
  },
  {
    "url": "assets/js/17.3c0870f8.js",
    "revision": "64d4b162ff258297a02950a6d59700f3"
  },
  {
    "url": "assets/js/18.5ae7690d.js",
    "revision": "6b9bfb4665828d1000b152fa678e839d"
  },
  {
    "url": "assets/js/19.700957d6.js",
    "revision": "5d30ee81164b5902caa488085e5d0882"
  },
  {
    "url": "assets/js/2.93f1f1db.js",
    "revision": "8d3619c4d35077ab0a73c22056d5ce8e"
  },
  {
    "url": "assets/js/20.9ceb6f4d.js",
    "revision": "65ac62a43fcae85d2e1abaf50a9357b8"
  },
  {
    "url": "assets/js/21.31660db0.js",
    "revision": "bd15ed4276ff74b627624a8da3d6a367"
  },
  {
    "url": "assets/js/22.9cda8009.js",
    "revision": "cd16407d1df1d3a419ba6a6f9e3b0f7f"
  },
  {
    "url": "assets/js/23.2019679b.js",
    "revision": "1c9a570c0f4600b0c11c7f8b5fcbb7e4"
  },
  {
    "url": "assets/js/24.98e40c4c.js",
    "revision": "4717ec76cd500cc9855f8a869929393c"
  },
  {
    "url": "assets/js/25.7a494b69.js",
    "revision": "9b3e66546a48fe214ec223aeeac2549c"
  },
  {
    "url": "assets/js/26.648cd344.js",
    "revision": "b10380eeaa225311aaca24d8bf77ee5c"
  },
  {
    "url": "assets/js/27.f46311a6.js",
    "revision": "09494919484fc7c821918ffccb1cb5c9"
  },
  {
    "url": "assets/js/28.05ffe3fe.js",
    "revision": "5ebb37c9b5650b5f259ca7061d999091"
  },
  {
    "url": "assets/js/29.d2434e37.js",
    "revision": "e57c4527a7d867f68ed55233cb9284ef"
  },
  {
    "url": "assets/js/30.87b68750.js",
    "revision": "57cefa441a43bfde726d50dc9ac725c2"
  },
  {
    "url": "assets/js/4.ba2f3ca1.js",
    "revision": "58ea4b0c2e7cbd4e32a1cd20d01eae0e"
  },
  {
    "url": "assets/js/5.16d4e48e.js",
    "revision": "32f2ef194fae1d4898034304583ee19a"
  },
  {
    "url": "assets/js/6.6d648116.js",
    "revision": "9b978632cfec37718838dab4e55b2adf"
  },
  {
    "url": "assets/js/7.98e212ea.js",
    "revision": "d918ac5e999580e3d93fe68f7634fed0"
  },
  {
    "url": "assets/js/8.c54da29c.js",
    "revision": "3776ad8debdb22b1050362d9a927790c"
  },
  {
    "url": "assets/js/9.c0479d0c.js",
    "revision": "ed8d10ef874570cc3f97fe1fd96fd54a"
  },
  {
    "url": "assets/js/app.d1e0b2e9.js",
    "revision": "16e68f284e678cf2a51fa7c7937be36b"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "d3e044cea6ab57f22541fec2c618a090"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "6b15a03feee54aea6f4386c2f0e5a5d9"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "d382d57d92276020a4bf5a7c0e8e75c3"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "f904d11e0df8f5bb6dc24fb9b56a015f"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "9c92b64c868d295197c28fbd20153c90"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "ce65a148644779f16588660eb9da9337"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "c20245bd17743a772a32e59abe28a446"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "78e12f4d02ef5cef9476745f40cf1484"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "42f13166792d8016c7d2f4729d40d3d2"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "98eb89582ded9e0d44498a7bc6cdc22d"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "c4eebdd446787397bb3a6bcd736e46c6"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "6581fd4ae8456b51115d1a45895d8d75"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "9947a91f22204bc63ed51e6ef2c82dbe"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "d093a5a8a8384d33f03624fb9f7cd634"
  },
  {
    "url": "categories/index.html",
    "revision": "cbc7915c41e7eb2fe596e022b454ff13"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b773075a4a7822aa17d870dce680fd35"
  },
  {
    "url": "categories/python/index.html",
    "revision": "65bdbb117ccb3a04de8b304f931d6cc1"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "b50f79e2b22de2441fc58d307103d2c4"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "c6271d6cd2633d8792f6e1898f0b0d84"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "19c8b436f86beef417581740c0b5b9c2"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "87370fe2a0ec60a6d79cac95d3c64ace"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "b0f5d5640e658363c7624462f27ba85f"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "89b8d46836938dfda1d55bedb9e90096"
  },
  {
    "url": "index.html",
    "revision": "988e37d39ebd52654fb553ced8eb9d83"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "943ef5ed93cd9b9f44a9c5a29b781994"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "96f16059599084e44e69534ac98b4244"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "957674be900a2a0456988bfba169a3b7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1be3ebb4d9194aa316b7b72acb3c9350"
  },
  {
    "url": "tag/index.html",
    "revision": "878535b0f2e307b47345294218d446d3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6375df62376628bc2d4f4658962d3790"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "c05ea5af4e95cd22dc7a9d69cfe047ca"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "4f9c7365cb994adfb6e127ad05bfa01a"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "dcde2b95a6ab4ee30e653c2893248325"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "b3866a8fea0b3fb90cd11c165abf929f"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "85ba872d53de872d564f97bae3de7e02"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "7ddea78c16fe329b84e1cbb52a9371d0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "a1dcec14d37bee86b0d1df718ebb7a26"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "93e89c6fb5d61453d6d4f25f46765c92"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "e8674f8db31eb383f8df9a7f15572040"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f39bd7649852259fc1dc33614a05aa8c"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "d1386f8242d956a037b58abc6849daef"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "2f1a405f278b09c0d870af8c18692116"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "4fb968edcfceecd2d6ecd70fdd4b0696"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "d0ac90da0ad23db6b3d38e364d391702"
  },
  {
    "url": "timeline/index.html",
    "revision": "560c8e9ae7feba899361c1a8d2509ec1"
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
