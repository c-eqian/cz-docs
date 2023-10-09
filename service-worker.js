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
    "revision": "6de64addabbf89ef815ea16d218794be"
  },
  {
    "url": "assets/css/0.styles.37a7060c.css",
    "revision": "76df6aa7b3d3deb47296327bf9e3f985"
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
    "url": "assets/js/1.6b515816.js",
    "revision": "6a68838187c573caf43db51bcf9e6b06"
  },
  {
    "url": "assets/js/10.1836938d.js",
    "revision": "35a60360b64ac9c5e5baf6c0fcb88708"
  },
  {
    "url": "assets/js/11.d45f3c6f.js",
    "revision": "0344870d227127ee557d69f029c94ac2"
  },
  {
    "url": "assets/js/12.0f773e16.js",
    "revision": "839d9ed3c62a54a6c8b33cde39bfff79"
  },
  {
    "url": "assets/js/13.098aa458.js",
    "revision": "d2768b58e5541dc530c1b1fc58e3703f"
  },
  {
    "url": "assets/js/14.9e93e6bf.js",
    "revision": "e74f15d956d559278052550edcc1dc18"
  },
  {
    "url": "assets/js/15.0af5f2e2.js",
    "revision": "2c0b471b12319617828d5a4ba297f7a0"
  },
  {
    "url": "assets/js/16.f4a642ee.js",
    "revision": "bd5c8763cf0fe888c6b40b05be381baa"
  },
  {
    "url": "assets/js/17.c98cd683.js",
    "revision": "8e2a746d530db33339374bd4bfade899"
  },
  {
    "url": "assets/js/18.0d7079ed.js",
    "revision": "bc322c8683e7c97b7e8fa0a71d29b735"
  },
  {
    "url": "assets/js/19.845fd299.js",
    "revision": "b6bee69a5f5e80a4952a88224e0e5aa6"
  },
  {
    "url": "assets/js/2.d5967c94.js",
    "revision": "367f1b60edea5bc71a2d8b8ff0813812"
  },
  {
    "url": "assets/js/20.e60884fe.js",
    "revision": "09fafa435d740746bd25cd8d711fbb6e"
  },
  {
    "url": "assets/js/21.8d6152ef.js",
    "revision": "eb6e8a3d04a0537966294348247bedb3"
  },
  {
    "url": "assets/js/22.dd9c782f.js",
    "revision": "9ec1cd2e6001d09213e80d1e68445dfc"
  },
  {
    "url": "assets/js/23.be9954b4.js",
    "revision": "713c235001b30b50a331c2efbc2ebda7"
  },
  {
    "url": "assets/js/24.0fda4cab.js",
    "revision": "9d5f451d770feb679f3f8af87084c521"
  },
  {
    "url": "assets/js/25.8a363d7a.js",
    "revision": "747874dc3cebcd9636e2310761349076"
  },
  {
    "url": "assets/js/26.89d055c0.js",
    "revision": "4e278a5137e74435b57b30d96a5419a7"
  },
  {
    "url": "assets/js/27.235b61ca.js",
    "revision": "324d2dac53d1fdd96a6e8346ebfe55bb"
  },
  {
    "url": "assets/js/28.6a3cde16.js",
    "revision": "c37c58654e9997b3a9c5d3019436bfac"
  },
  {
    "url": "assets/js/29.3422e07c.js",
    "revision": "18e71303213339b004fb81e5b6f69ec6"
  },
  {
    "url": "assets/js/30.c4f77ff3.js",
    "revision": "5a33d0372e9e137c0edbe18562c8b6ef"
  },
  {
    "url": "assets/js/31.104518b8.js",
    "revision": "ebf3fc8213f0e792da9fd827c91b2b6d"
  },
  {
    "url": "assets/js/32.451c0496.js",
    "revision": "276d0415fdeaf07c9fb7739805785ed8"
  },
  {
    "url": "assets/js/33.3dd81e3f.js",
    "revision": "7c1987219f9f0a6f530de3d0197fd2ef"
  },
  {
    "url": "assets/js/34.320163ef.js",
    "revision": "3d285b4240001b1dce01bdb8dbfdee34"
  },
  {
    "url": "assets/js/35.ccf3b984.js",
    "revision": "de2f694626882c11605fbcceb5af2254"
  },
  {
    "url": "assets/js/4.e1b56d5c.js",
    "revision": "89e86292ae0c102831f67604eb5a57ce"
  },
  {
    "url": "assets/js/5.f01dd61b.js",
    "revision": "5681faedee8fab1e17124ec9e9691f4e"
  },
  {
    "url": "assets/js/6.757a2041.js",
    "revision": "f2311d2990a65076e5655b58f04ea310"
  },
  {
    "url": "assets/js/7.eafacd95.js",
    "revision": "692065dcbede81d3d0773574213f625e"
  },
  {
    "url": "assets/js/8.42d11a29.js",
    "revision": "38319c915027d7644e49e1e987210566"
  },
  {
    "url": "assets/js/9.d6ad70c3.js",
    "revision": "4655ee5bdd8b2d34524a95ed9d20d175"
  },
  {
    "url": "assets/js/app.3ffb4b25.js",
    "revision": "d1a7f31ed65b8b92a3b6cae86148a64e"
  },
  {
    "url": "blogs/JavaScript/vite配置SSL证书.html",
    "revision": "e42cd88540150a1789480509848d4566"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "07150269ca583ce304075904cdcede49"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "961b90b863a73ace2894aa524d7a13b1"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "4c4f4f047830848b9d240c07f73bf775"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "f37aa2b36995285e8d2de5aa54976571"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "8fb344271272d6954df0d7719a10f826"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "76b7fad42c648f201bf989fccea08704"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "5d570ce0c867e023ba6450eb99e5c532"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "2979c764012c02e24b0b475963903c4d"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "d24f2c929fe6877879dbfd96c018525f"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "e33c0d8f34333861e85a78139ed10d10"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "1f532d5861da9404ea48c1f6e611f0ce"
  },
  {
    "url": "blogs/react/react+ts项目搭建配置.html",
    "revision": "eec936bbbf49973ec3cee3d9e3cd4415"
  },
  {
    "url": "blogs/react/react基本使用.html",
    "revision": "0b964b8d07b30e50e9131a8a5d15fbe5"
  },
  {
    "url": "blogs/react/vite脚手架搭建react项目.html",
    "revision": "b3d27c661a5813726c550d1230e4bc2d"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "2d192c9bf8a9267c5ab492ff0e1086ec"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "9b0e37cb67bd37b475fb2c6fc59816b3"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "fc22fe7684f8098f3947f11255dfb527"
  },
  {
    "url": "blogs/vue/vue3结合elementPlus封装可配置的搜索组件.html",
    "revision": "baf23f9e570296b5747efd929e6a636a"
  },
  {
    "url": "categories/index.html",
    "revision": "df24442cda0b613d5962e6cb05635dd0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "ce414f0e31819e94a17fdaaa316cf22b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "8803d1694e9d8b3c8a8e8a0473d9ab0e"
  },
  {
    "url": "categories/react/index.html",
    "revision": "3db48badf89443128c853aebdd2a0566"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "47b28552c23031705668549a1071fccd"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3026abc608322dc462698694f173861a"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "3e31391686aa21a5fb0c64db85d012af"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "fb9a4e38f44c8efb67dfde5819c39878"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "97ff971622a98ba84b7615dc9e6483c4"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "e13410da42776f2a853e6d7a0bcf3115"
  },
  {
    "url": "index.html",
    "revision": "ea622cf500a4298d4fd3ecb0bb0e68ee"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "4967856d994650c72848f7bc9dcb2b93"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "2fb94592931c2f1fa6312870620d387f"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "6538fe3a438dd16c369c425d8f82e9cd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2999fbbbb2028cdd5343c4cd08837d36"
  },
  {
    "url": "tag/index.html",
    "revision": "3b1601396b9445ed46189ae64c8f9626"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "3642a862bf1d233a7e2623ecf4577f3d"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "c717e54a57e1160e3722ab639b9c52e7"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "1ff0276c35c94f0b062274710b04f614"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "3ddefe2b74fe0d8c70122c8a7200d81b"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "a6154e8ef10ba891556275bec1c58ce7"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "e621ba5573b9e3300ae6d5ff4e3e848a"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "27e0c2259f8d27ffe6afe8ad844aeedd"
  },
  {
    "url": "tag/python/index.html",
    "revision": "212afb4b7760a14ceba05d028e737c0c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3c2d35322e6418d7289d2f2a8f9b00cb"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "18ac8f2667452c9db65754f983e0579a"
  },
  {
    "url": "tag/SSL/index.html",
    "revision": "994cbabcc022f307219c169d7a0c9187"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "dabbce5e79b721d94000f04a9505a555"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "9cd6b45c23378410203809612de557be"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "864b922e91a4311633e3e23e168bf6be"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "686b83b2c00447757024571737ca796f"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "890c63eaf4d54409f98cfed47aadd66f"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "e9c499413b34ed493c641e64501a1304"
  },
  {
    "url": "timeline/index.html",
    "revision": "e044d6a5c926c7ae8b76f670822fd8b7"
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
