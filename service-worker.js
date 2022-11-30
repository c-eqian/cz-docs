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
    "revision": "9fca656b6f0353de961d79e78c1c9647"
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
    "url": "assets/js/10.50e5d5a6.js",
    "revision": "87e680af595c72195f52b723a67669a6"
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
    "url": "assets/js/18.011840a4.js",
    "revision": "5ba1bbd82cd7850967845d3f5adaf4bc"
  },
  {
    "url": "assets/js/19.b11924f2.js",
    "revision": "d373311048a7d4cd26667c113f60ec11"
  },
  {
    "url": "assets/js/2.580ab6d6.js",
    "revision": "517f33fe07c8b4c402ff9728d5689046"
  },
  {
    "url": "assets/js/20.26a878de.js",
    "revision": "70993374eada0651534155e04789f4e3"
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
    "url": "assets/js/23.d30bf129.js",
    "revision": "72b45af710cc0701ac79f90f59e2396a"
  },
  {
    "url": "assets/js/24.037f9e63.js",
    "revision": "f0367d471312935f0ff98c60da042d14"
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
    "url": "assets/js/app.dcd7e598.js",
    "revision": "50e1fadab63aa136107cde4d81a1cf88"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "b64b8a239d7ecf6559cb19571dbbd785"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "e75447fc740a665e580e2c3eeaf1f4f6"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "b4c23e743053b9095a491e6497bcfb8c"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "db329ce5e93a6e5ef1776d8b194a2700"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "c4703bbfb0c748282f7c12d8fec8e04d"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "1aff3bb545d933321d8e15863cb5b7d9"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "b28caab998b57b9c2105e404aa9943e8"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "4db799f2595cf76d412b3f48287408e5"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "3734491064490dc741e09b298dc60495"
  },
  {
    "url": "categories/index.html",
    "revision": "98ee6a0cad29ea0f67359c6ad6116944"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "040a2788a8c2210d03076e44ccfe7495"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "56ff620909714bbdd3df39150815a081"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "34a747aa4025189fcad31fb22b16b2f1"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "e91be061f9d93a238585714329777022"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "348d05f296d4fb0d6a7e7cd7cb908cbe"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "f552ed5500172481d9164db289b05440"
  },
  {
    "url": "index.html",
    "revision": "06a0f53dd5f4cee5b2379dde27bc0f44"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "664d8b891cff3c384b7ad1e52d0fe79c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "adc4ab37b5042d75bbecf7e1119b3181"
  },
  {
    "url": "tag/index.html",
    "revision": "0a7fd3defb1e9fc5d9df3b10ba332d43"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "f131e6ca8b3d6906bbc3dcec163399f2"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "ff3d6eb79ad11c318d7ecdc1c35c573b"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "65f7bbbecdd8855359b74a8033c275c4"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "e5ed09a7aa428a28fd4fdfe2ecfd3804"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7b822fcdfd5dc99e513cab0e9c6312b1"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "2d03e4d76bcdf754e268154b6068247d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "5893d2739026e6f7e4ff90c626a68c6e"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "24797f5f9b0ff3fe2d7df5b6b50c875c"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "95c14b2bb60a5e94964b7eb9207f4846"
  },
  {
    "url": "timeline/index.html",
    "revision": "edee6b430e6daff58a811ebd4bb3b349"
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
