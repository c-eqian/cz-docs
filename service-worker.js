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
    "revision": "295140a79d7d7bfd1b0d0e92633846f8"
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
    "url": "assets/js/18.d44c31ec.js",
    "revision": "5c06fe6a90beb0b1eebc0e8bb512a881"
  },
  {
    "url": "assets/js/19.b11924f2.js",
    "revision": "d373311048a7d4cd26667c113f60ec11"
  },
  {
    "url": "assets/js/2.d35d5263.js",
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
    "url": "assets/js/app.e9608ba5.js",
    "revision": "c936b141072d7f96e8d69970650b9d83"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "d835ce690dd597cdd41a4c94793c3ec5"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "8222c997513f03a561e8422d624b2595"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "034cba8d14a292a95da7329786315267"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "17eb6d35172967dc2f963baf9c50d1c1"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "877443190c161b08d4005974ea3db477"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "2664fd920223cbd3f7efe1d8f3a52e06"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "3b5210ba07ab7c518df02262a9dde09f"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "4ed2ef33e7faf6ec12e7baaea10d349a"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "5c151f7e7f5a16e1112e96445f92caeb"
  },
  {
    "url": "categories/index.html",
    "revision": "65f76148cd077773a08d89e620b56ee0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "664eec0f6ee2fd7b9c99cd585078a7ac"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "a5497f2b9d20c246769b3d903514e5cd"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "83193906c8195cbb94adb3bdd5856a92"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "7fdb383a4fa636197c68582216130278"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "63d5dadc8dfd5e48eae96fd5bfdb6bff"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "2a3acf3952e4742f939a13f0c488b6d3"
  },
  {
    "url": "index.html",
    "revision": "717b7384c6e36212fcd452449eab9f3a"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "880b16c0ea73f6e2b070cb1bd7a91711"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7d23003a209270c4ef617577b9ae7053"
  },
  {
    "url": "tag/index.html",
    "revision": "68c7a4ceaac1b44fed30467ba7a4f453"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "7feeed1436b3d4876b6ff6df07fcdb49"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "1a5322f8352ce98e367d9c0fd79e0b04"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "50e3e77a32da230e55a9f692c62c83fe"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1cc3219d4101bba39ac51d97dc2f2e17"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "2f67720d2e57336b5954c098ee283cc8"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "e134dc4e23defe55e2eb6d7723c77fee"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "849ed7d2f9316f5dd643716b5577be19"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "027930e4469c24fc95d99612e13bc855"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba7a912208bfa008a1fe8d749eb2303d"
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
