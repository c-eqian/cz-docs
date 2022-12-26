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
    "revision": "5abc5ae6db124d037bddd073273bb2d5"
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
    "url": "assets/js/2.758b2886.js",
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
    "url": "assets/js/24.4bff6212.js",
    "revision": "77d90f54c22d8352a69102ac0937dee7"
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
    "url": "assets/js/app.a22b9aef.js",
    "revision": "9fb786459f733d2f6871147d677e5f3b"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "a26547e49f7be3b4f3033dcc63aa5222"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "12352ff51e17ba1957cf71aea16eae3e"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "9991baa40041d603a30c968f37652812"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "df24f0034933083608d3c17ead9a6c4f"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "7601428c75fa8dd1ec212a98302043d6"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "03f9725aa6eed5d5ff77a7ac339c3ce3"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "3a231a9abd9028d6006cf3e84961cf70"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "2da1502892babb45ce8e4e0bf106d57a"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "a96f65618a3fd2e0c06512fa2052f25c"
  },
  {
    "url": "categories/index.html",
    "revision": "4fe16dd311f119b722d65b014bfa19ed"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "cd72c8e59231bcc6f8e807f16e1e287f"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "dc1bc616c3e11757f5798ecf452302e9"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d01b99233bb7fd1ab78101add2895535"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "f751c98960b2739b35ce8b1217e5245e"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "8c9a585206d9beac6e252705b9834e28"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "7bac4c593a8c231c75ae5230c02bc0fb"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "f921d9d31e4669a24f0db2941c4d184d"
  },
  {
    "url": "index.html",
    "revision": "63ad4cbb78278909f09682d7e33334ad"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "41fb068a7acfdb2fa69d6bb45e537ada"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0170737c0920fe63c0a3154b49fd434e"
  },
  {
    "url": "tag/index.html",
    "revision": "26a51b1e57b8c7f0363564c0541fc2f9"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "5b9d1e690a930a9de035293b64d3d520"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "d7cca9a554a5d476d8af60624432d75c"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "08611438ad518f1b464518e12b730e60"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "4cf7d884d23e20b5114afd4878523ed0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7f4387417b32e32fc301ac7e37e769c1"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "09d5e0cfd9689c125b14419592fda9a7"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "cb96dae87decd8031ce661ffc9a2995d"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "1d5d7146dac5bfaefe954cb0422cbcaa"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "47eacc5b5f6890ffb313ea323c272c55"
  },
  {
    "url": "timeline/index.html",
    "revision": "7de2e6b6c85cac70bb290aaff7495e4d"
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
