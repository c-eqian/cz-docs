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
    "revision": "60adb2ea0d37f287ca4d1e32146b0d93"
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
    "url": "assets/js/1.ae8e7259.js",
    "revision": "f300d01e42a2377c48db4365bcc0b052"
  },
  {
    "url": "assets/js/10.62726d06.js",
    "revision": "c740d8090dacab613f9cd58060c02975"
  },
  {
    "url": "assets/js/11.2879268f.js",
    "revision": "a255a64af33af1d5e88a32cc9101d872"
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
    "url": "assets/js/19.28f16f7a.js",
    "revision": "aeb2aab1599c3bc4e8ccb24a89c43962"
  },
  {
    "url": "assets/js/2.51d1bd78.js",
    "revision": "4fbf8d06b3fa34bc2f2de10251937b0d"
  },
  {
    "url": "assets/js/20.9b8a4de5.js",
    "revision": "a0eeda2cd3fea654fbe11fdd59a6ff54"
  },
  {
    "url": "assets/js/21.37fbd8be.js",
    "revision": "4184332ab1588d39b5093c5c069680c9"
  },
  {
    "url": "assets/js/22.b9cb7c85.js",
    "revision": "00f1773e828e8588650f5cefd2226835"
  },
  {
    "url": "assets/js/23.b5b09899.js",
    "revision": "ff4a3801f9d4b7ccbbea51da021a42cf"
  },
  {
    "url": "assets/js/24.ae7630aa.js",
    "revision": "2c578803fa351f437660ac275bc5fc95"
  },
  {
    "url": "assets/js/25.42a4bcb2.js",
    "revision": "e5718ae620738ae34b0d8206fd3ca2ed"
  },
  {
    "url": "assets/js/26.0a2dabfb.js",
    "revision": "8b18b33dfafc36995d7361fe779a4bd8"
  },
  {
    "url": "assets/js/27.e54e8c7f.js",
    "revision": "9f004e1721ccfba508aefd970d2ad060"
  },
  {
    "url": "assets/js/28.8a08a35d.js",
    "revision": "8e72976efc9ba985fb761a1af2b337c3"
  },
  {
    "url": "assets/js/29.a2ebbed2.js",
    "revision": "3df1ccc21f6864633f9e958e80a833bc"
  },
  {
    "url": "assets/js/4.b918616e.js",
    "revision": "3674aa055fad94c292bd2c10261c3bf4"
  },
  {
    "url": "assets/js/5.f1c37070.js",
    "revision": "bde22810608dc24b785a24f4da969bbf"
  },
  {
    "url": "assets/js/6.9d83816b.js",
    "revision": "405df0a8e774923e4242e288e4eb5e41"
  },
  {
    "url": "assets/js/7.cbf5c6f6.js",
    "revision": "c9ca2127a9a373c5902b33a3cd7b05e2"
  },
  {
    "url": "assets/js/8.e909ca5c.js",
    "revision": "428c9a145daf168b7274fc8f52f405de"
  },
  {
    "url": "assets/js/9.e62cde5f.js",
    "revision": "f862d8f38b36db449ad2e7e3e099e58e"
  },
  {
    "url": "assets/js/app.be5f1d42.js",
    "revision": "1f1c72a85bdb4b6200510a76250c8a4d"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "48e7c988f15ee2988c9854f45560b624"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "76e5f51429b9d57783259642145c6211"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "185aaa836f9ea38c9c7a3805001c6fa8"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "a4c47b606127e388d71b3f3239c7a467"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "da73d0eb7058def224c6ef6ad460db1a"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "3e0ab67783bf9087da9e7abbfc9c9e7c"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "499e44b5d012261705fb45eb3f569ded"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "660938bd0a53fd2785f83b491dd52809"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "f5e312d02cf1ed610f3001bfceeea3e2"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "13f00a8194d475924ca28b4881baadac"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "ac3151b6e42ad522af0c41f9f99bffdb"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "cb89eac0415ccc43cba5f77e4011f757"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "34c41283629366ac08603e6102f671e9"
  },
  {
    "url": "categories/index.html",
    "revision": "85d34467acf716e125454fc8cda94051"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "f4c1ca5909007cb394dec166924b3778"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "62e986be55c33035aacc43a081549178"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "ec9d1f2d2b1c8c00a49f486a13a03bb1"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "4be4b213e09cfab007786cb8d334d3e3"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "e4205a4af6c31f7e74845d032256804c"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "0638637445eb46b2c9db601f9cff4cd3"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "83bd1e04d13020fc68d803741e2fc689"
  },
  {
    "url": "index.html",
    "revision": "7a3c02e3f29d8d53241ad3d89e170333"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "35ae1d7d379ebdd666a389f757ba18d9"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "866416188a73616bc4974f1c4bd16ac9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7570ef69e3016707d379e0a999d9d44a"
  },
  {
    "url": "tag/index.html",
    "revision": "cd7bf359543f343dfc92294b6f105470"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "8f628e6d7378f8636d3f8f19abb55d69"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "dc929357e6e0b8af6262b4442c1003ca"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "a14095a480684395d34a8a8fe02f1255"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "45b72c22e367839e8f3578db17eebba2"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "24e84d1cfdd031b4bfe136cd9fea1918"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "6f198df2a1b0877c225ace5f2590306f"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "8b45f8ae773b683085986c46e805d570"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "27545a1ccd50c415eddcc58f9e10ab1f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "66bc91a8eebce3a00083f2f3e3e301cc"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "fae1eddf484883ad8a038f9d49676426"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "67a9d95c856bf14b13cff3a7e9706a0d"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "bcb88bad3c3dbc2194875fa528fcfd89"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "44ccff9b0d3992fdb8398373b9071605"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b33bbb621ab61e3a2c9a21b1524764d"
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
