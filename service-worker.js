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
    "revision": "711320c333d2be718718de3bf3a6aec4"
  },
  {
    "url": "assets/css/0.styles.29c1148b.css",
    "revision": "468d961e9c7010dde55f577277826a94"
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
    "url": "assets/js/1.f9e8e3b2.js",
    "revision": "468c3bd84f793b20e72c237ad7eee73d"
  },
  {
    "url": "assets/js/10.ace4bc06.js",
    "revision": "97dd2d1e9017c1091ef9e6b1e496a834"
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
    "url": "assets/js/3.1ab8fbe7.js",
    "revision": "8da0716ffd27f31e7d306b797976da19"
  },
  {
    "url": "assets/js/4.62e9019b.js",
    "revision": "adb73ab37e3981fc005219d2204bfe59"
  },
  {
    "url": "assets/js/5.14a8565a.js",
    "revision": "1e33746595adb079df55af1d7a050e77"
  },
  {
    "url": "assets/js/6.3dfa0bae.js",
    "revision": "5a0691c40bfae8dc78d2da131b1d196c"
  },
  {
    "url": "assets/js/7.b44fb727.js",
    "revision": "90b2c1856668c411b2c940943ab2a537"
  },
  {
    "url": "assets/js/8.431b17e9.js",
    "revision": "b82dfad37b369da4d483176b623c48af"
  },
  {
    "url": "assets/js/9.f4fb73ed.js",
    "revision": "7244031ae7e40ef799a011778189f8cd"
  },
  {
    "url": "assets/js/app.9c7fbb90.js",
    "revision": "0f32f8ac55d7fd5a6ec988a73058c41a"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "a8b1dcba6cd100e26aaf4de4adc43cb0"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "4cdeba12acf244b4546903ed0da32dbf"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "ba2a91346cb48702b53cbbfdcd5db6cb"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "41e63d1421eaac167292e17f198449e2"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "2d03e8963055473b0939937ed26a4639"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "799e9a86bdbc59412ee713d040e04416"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "0129ef8bd1ca7f1209edebb8f39603e1"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "c126d21d88e69b41e4b2ca40ab4f5502"
  },
  {
    "url": "categories/index.html",
    "revision": "d6a109892a6ba7d2c7e4cec0793ec942"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "38ec4301a3db8c07580f7abdb7bfb7a1"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "4e73d1e233f11dad3725474aa4f09096"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "58467a5113bfd972a2c39afe9910acc3"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "99dd623a5e122bd19484e9377d2b7a78"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "88b99fcc53e82f604acfef90ddd2bf81"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "85f0eb91fa81af43b8ddf8e58c1ae9fc"
  },
  {
    "url": "index.html",
    "revision": "249264b263b2d88fdf34918ac1f5b392"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "114be2ce176ffec258aad3e12b8fa366"
  },
  {
    "url": "tag/git/index.html",
    "revision": "11a14e3a6b8277ab1b0443e478c0706d"
  },
  {
    "url": "tag/index.html",
    "revision": "ab6161af937c83e93af219766c4e3877"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "dd28d99ce40f0fce1a10fdd6b540ab33"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "05a1ffbb3720f0a77c37bf35629a7049"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "ce3f532532b52c16cd670dee4e0f0481"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "05c77a209f4a70e0588b63e1548002ba"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "3c55eff2dc6e881c1ceb0d0ce5b49707"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "88be7aca1a506789e835da8e78cc5bd3"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "966c19a3fe55f559023ba56eb92e68d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "39f81864efa70696a6d70435e5be627a"
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
