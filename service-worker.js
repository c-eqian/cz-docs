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
    "revision": "c1b26c0757c42a20df0efd32096c6d38"
  },
  {
    "url": "assets/css/0.styles.5d73045c.css",
    "revision": "5dca71e37778b982592114624fdd2681"
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
    "url": "assets/js/1.e734ae70.js",
    "revision": "1f546f46533614210f3d0eb70c4f71e1"
  },
  {
    "url": "assets/js/10.fc735f8a.js",
    "revision": "7426df23f17c191e1a840cd08fa25f9b"
  },
  {
    "url": "assets/js/11.9a39a54e.js",
    "revision": "26a82239b832b526840c298938973819"
  },
  {
    "url": "assets/js/12.4400b787.js",
    "revision": "24b12e268df72296571ec6d894a292a0"
  },
  {
    "url": "assets/js/13.f3925f23.js",
    "revision": "494b25883dfce8b3e2b2e3346078cf0d"
  },
  {
    "url": "assets/js/14.a5bd10d9.js",
    "revision": "f99792d9c59e9b9bca5206eb32bd2348"
  },
  {
    "url": "assets/js/15.53938014.js",
    "revision": "ec0b14277dd825abf80941d84350c4a9"
  },
  {
    "url": "assets/js/16.07097c82.js",
    "revision": "ecbdf9e194f8926a5a521b1e84579494"
  },
  {
    "url": "assets/js/17.6c73f6ea.js",
    "revision": "9ca43fe9cfe030961d168a34e66585ba"
  },
  {
    "url": "assets/js/18.cab54ee4.js",
    "revision": "2df140549e020444d95224d596a47f94"
  },
  {
    "url": "assets/js/19.b11924f2.js",
    "revision": "d373311048a7d4cd26667c113f60ec11"
  },
  {
    "url": "assets/js/2.ececd1f7.js",
    "revision": "ac41d9ca69f1766f81e849371937894d"
  },
  {
    "url": "assets/js/20.f208096e.js",
    "revision": "546e0a67170b23635cccf4ce99e7cd50"
  },
  {
    "url": "assets/js/21.089c64fe.js",
    "revision": "23b4abc9eccc92e21e0f0cfc4828e675"
  },
  {
    "url": "assets/js/22.81befe75.js",
    "revision": "1ac2b6fc57effc4059e67e855f6f4532"
  },
  {
    "url": "assets/js/23.610d904e.js",
    "revision": "1eebb652e928251bbb0d216b09b51497"
  },
  {
    "url": "assets/js/24.d48fb37a.js",
    "revision": "a4f33987d4bddc6a9a6b831c9fc74fdf"
  },
  {
    "url": "assets/js/25.580ae8ec.js",
    "revision": "c9cfc14c0af196324c27ffd786f4f9fc"
  },
  {
    "url": "assets/js/4.064e4312.js",
    "revision": "ebca971fe1a993b0c58b8d3088865923"
  },
  {
    "url": "assets/js/5.dea1ee85.js",
    "revision": "72be4f8dca1be04bbdd8fa772b424d72"
  },
  {
    "url": "assets/js/6.098b9af1.js",
    "revision": "edeb4d865a06396a74bb12857dbc24be"
  },
  {
    "url": "assets/js/7.ef25df22.js",
    "revision": "afed01ec3d1f6a66ff11697a31aaaafb"
  },
  {
    "url": "assets/js/8.36870a3e.js",
    "revision": "5e17cc687381e5b8cb0392194e18d97d"
  },
  {
    "url": "assets/js/9.c098e9b2.js",
    "revision": "ed105be458ce4fbb2993139b2fdd0839"
  },
  {
    "url": "assets/js/app.bea91655.js",
    "revision": "f7f41ebb3be1af7a89fbd3498feab70f"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "f49f74b3048fb13e0689bf4f13d5b4b3"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "3dbf411dacfe76b4bf9d887b72e210bf"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "947f1c35762f7843e7ad93a774275ebf"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "5682a75e6fc67f4283350b66ca3a309b"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "7ab476cc02bc0d05d35b7f993271e009"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "06cfa4b8184047d96145e072eedeea43"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "72ffe8ecd5616c9c68db72b22162a1ac"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "18a6ddf8fbd50765cbc2a746baa5a19a"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "a58fe1bf2e9f3cfa9531d9b4ebb5affe"
  },
  {
    "url": "categories/index.html",
    "revision": "bb852ada83a453a252c11492769e0c7c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "882cc4f6690c4562587279597a076f4f"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "c4ed063851c835785eab307526f84e29"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "1b7dfd5cd94c6f819c50f1dfa1be02cb"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "b5d0608c5de5f3a2fb2b39c9528a3740"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "733132755025515bdddf61b36fd950c1"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "2f68cad67464353143deac2da03da60c"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "679293e06208c9874cf5023dac925f09"
  },
  {
    "url": "index.html",
    "revision": "3c86021c4deb3176792f88c76bff6c8e"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "501f6cb8c904fd095c21c86da6139d08"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1824b83e92c77916e5f8987c74643aeb"
  },
  {
    "url": "tag/index.html",
    "revision": "708c8afd24bd23db67f027e13a6fd4bb"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "37cf6b36dce1a18b369708107143a0e3"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "72acfad130346de4790a93feccefd28c"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "701b4a71b36283dd49f6c03ca210d9d5"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "ebf6fae2867101247c0c84141baf58de"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e0cc96f34595d7fba9b01217db8a1972"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "c5d16c7a829bf24445841cf0f5628b0c"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "d31453cca1de97d6033c69d8dd017bf4"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "30f7e16cee491028f3ea6be99ecc6338"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "b61d005063abc9426dfaab5f809d95e2"
  },
  {
    "url": "timeline/index.html",
    "revision": "3ac3663ede99b70a8477abbb13cb38e6"
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
