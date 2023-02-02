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
    "revision": "c02a77387f08a605a6667245b2bc7c72"
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
    "url": "assets/js/10.54aa2f54.js",
    "revision": "5cc822f8278615df95f7098a512e6f00"
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
    "url": "assets/js/13.93c3cda4.js",
    "revision": "ef1ae9cd23569dd17268228571b632ad"
  },
  {
    "url": "assets/js/14.d932a236.js",
    "revision": "0971d9f6eafac500622620aea45e3d25"
  },
  {
    "url": "assets/js/15.14e87ced.js",
    "revision": "116ac690bf804166ca5876ea8de636ef"
  },
  {
    "url": "assets/js/16.7e8d883f.js",
    "revision": "caa32bfc6109553e05ab908e04e40460"
  },
  {
    "url": "assets/js/17.ea92fffd.js",
    "revision": "dc247798b18d6a0b7951e53cc080f3f2"
  },
  {
    "url": "assets/js/18.815917e2.js",
    "revision": "e7421499e9fa44f5ad7e29de23e8d01a"
  },
  {
    "url": "assets/js/19.58c8ed5c.js",
    "revision": "909d63da777bfcfd182e2675eaa3a1bc"
  },
  {
    "url": "assets/js/2.93f1f1db.js",
    "revision": "8d3619c4d35077ab0a73c22056d5ce8e"
  },
  {
    "url": "assets/js/20.b1de30aa.js",
    "revision": "03df36ae5b606882ee25f82629753a20"
  },
  {
    "url": "assets/js/21.2e40a142.js",
    "revision": "9e0876990eda4a33cb880140adce7816"
  },
  {
    "url": "assets/js/22.51ffc4e4.js",
    "revision": "45b723373eb736eb41dc5c046557c43a"
  },
  {
    "url": "assets/js/23.37abb264.js",
    "revision": "b6879866b120f9eef6a0065598e798eb"
  },
  {
    "url": "assets/js/24.b9c4353c.js",
    "revision": "1c3134d3b70efc42efe2d72f92ee8cbf"
  },
  {
    "url": "assets/js/25.ccde8d17.js",
    "revision": "0f2b9a4dc952f9086a575a3a0f76ab45"
  },
  {
    "url": "assets/js/26.08c6e0db.js",
    "revision": "9272c0ca46b19324203660c75185bc55"
  },
  {
    "url": "assets/js/27.a7ea7924.js",
    "revision": "df88977cbd2423ad00d72576f29ef54c"
  },
  {
    "url": "assets/js/28.18595e85.js",
    "revision": "b78ce517f01ad2c1244082770b5a5bdc"
  },
  {
    "url": "assets/js/29.d7ee14de.js",
    "revision": "c8c38d2b6712e6b4f5f81cb587363127"
  },
  {
    "url": "assets/js/30.658d465c.js",
    "revision": "ea73737535d5d220e32a30706511ccc6"
  },
  {
    "url": "assets/js/31.899b2658.js",
    "revision": "cb6da887991811bab0a7be1b454a0e8d"
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
    "url": "assets/js/app.346a0460.js",
    "revision": "a67b2f61ff5888eefbc286c56ebc3ad6"
  },
  {
    "url": "blogs/JavaScript/vite配置SSL证书.html",
    "revision": "77cca79ac6b0e16634ff3a1ee086fbd4"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "eeecc4a925a0badd8232624d181e2768"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "eaaf1b5193249f80eaa2f21d8255ca07"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "67992cb4d5d06fdc7193bfa383b5f437"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "3e5e916d55a31ba7a12150599e1a3382"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "66f0f82396a9bb19b476eac7cba92f81"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "cbdca0b199bff81d5c3c557df3b17314"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "e6e5ae22158da201dd66e8a0deb60eb7"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "69a19f5765164b33c1246233070c204b"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "1c4f2bc7713cd4dbc9a98e0bcd6212c8"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "d2c7e82b65f171b0fba7321ffe344294"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "0523c228456cdbde71ab20ac5c9c7783"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "eafc7e6b47408638124aa0283fa604fa"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "129d1ea56edf888afb565f553fab044d"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "8e171aa38e1131199dd1c836662bcb52"
  },
  {
    "url": "categories/index.html",
    "revision": "245091d5005a9674b25587c3520e4310"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "7791326bc5f6516666d813f072be1920"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4fd1a6a2b70cb4f02c95dffd28f7d1f8"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "4b831f25b75a393361710181273b2eb9"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "6923659923ad747db47c37b0728165e4"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "474122739e6c13af2f7569e6e7bc4630"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "1311c659d67bc6c02d3cb695edd74a76"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "a2d933da5d40d1952c8b66a7e6898575"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "c1b437ceb20e3fa3cecc8a59f5673bdd"
  },
  {
    "url": "index.html",
    "revision": "eedf07d833410349a8a6437d80acbd64"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "c42a2e1565d514702f03f86e6b4d404f"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "2d7ae4069871a21974f458e601b1f5af"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "4cfaa246f49060f085ea8d5f42373857"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5c3ed15a62d7fd07981069d9c1361c19"
  },
  {
    "url": "tag/index.html",
    "revision": "63a454a1df428739f1dd465fa59f01a3"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "2d8c8def54910c6031981b1a9ac79032"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "49323414f949ff7cfd62d3f968305d5d"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "de27b2f817e4fb500116c7cc9452bb8a"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "681274c630f3c03bfcf24cab2eb110ef"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "880d55c5fe7c76af1532eee459209b4e"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "0dbb3b0f859d7d1d9f6c9baefb9f7ea9"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "10a71168d72142bc1e4133e84f82c35a"
  },
  {
    "url": "tag/python/index.html",
    "revision": "969c54a23d39f1ebc0475d515c9eb50b"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "4f73d8f0dd311138fd3f58c9780f8b98"
  },
  {
    "url": "tag/SSL/index.html",
    "revision": "e4faa0ae22172742f2b7ac20f2c1b29c"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "3a39c66322daa943c13ef9500ee7740d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fe483b92bbda327ef86f9c99ff84806d"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "97a912e94928e9d2771b52a49c152124"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "02ef8838d0cbb38b06c7b2de266a7a4f"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "e2cb13c6e1469ab43f9db2b980538b62"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "50eae9d399914cef9e7f47b9d94f9ab0"
  },
  {
    "url": "timeline/index.html",
    "revision": "51feff208161b9a772eb401161f09e25"
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
