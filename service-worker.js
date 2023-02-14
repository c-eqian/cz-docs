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
    "revision": "8b5d40b764272f85ffcdca1d88b2ab4b"
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
    "url": "assets/js/1.b39eea39.js",
    "revision": "fe978acff5d2c2bd6068c4f0630d1a37"
  },
  {
    "url": "assets/js/10.acb0c1d7.js",
    "revision": "88daa46fcc216a51547b0939f2eeccb5"
  },
  {
    "url": "assets/js/11.d150b633.js",
    "revision": "a261f7e0ceef523cb99547986a4a3f51"
  },
  {
    "url": "assets/js/12.87908eb9.js",
    "revision": "2d456bb4fbc9ca57559c8ad7e1c86b0e"
  },
  {
    "url": "assets/js/13.f3a666a5.js",
    "revision": "4fcc6ad096a7f540c2ea0c904febd7f6"
  },
  {
    "url": "assets/js/14.2a465743.js",
    "revision": "792d46c3c9acf4d2efd02a5b5cfa25c0"
  },
  {
    "url": "assets/js/15.c3a40ee1.js",
    "revision": "16225afad22efe91e5ffcaa715fc1373"
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
    "url": "assets/js/2.ee51168e.js",
    "revision": "a1bf43d2b4cb9d4e6f497b3d1cbb7277"
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
    "url": "assets/js/22.233015c9.js",
    "revision": "6df2d324a370369401cc2b182b1ad98c"
  },
  {
    "url": "assets/js/23.1ae1b6ca.js",
    "revision": "11d78a5c74f2b48d9908970bf9c3be28"
  },
  {
    "url": "assets/js/24.ec35495f.js",
    "revision": "a436a25c6b0d83eba2f2aa1c41e7f1ec"
  },
  {
    "url": "assets/js/25.c063d3ac.js",
    "revision": "696c194339784eae04a5839258d8c5c7"
  },
  {
    "url": "assets/js/26.aa2c197a.js",
    "revision": "53709d51f34b4e569f4091e4d796251c"
  },
  {
    "url": "assets/js/27.2680601c.js",
    "revision": "12400a86680b7599a7d517f806b81364"
  },
  {
    "url": "assets/js/28.7bbc6dfe.js",
    "revision": "3be418ec7c545c3a1db388962fbcdb4f"
  },
  {
    "url": "assets/js/29.57a27a75.js",
    "revision": "1054fca42106662642c708886e578d34"
  },
  {
    "url": "assets/js/30.e2433654.js",
    "revision": "7ac77cf383c2dcd40f25d6aebed6709d"
  },
  {
    "url": "assets/js/31.c30b80b2.js",
    "revision": "0b07a440193e127fa89518eaf952ba71"
  },
  {
    "url": "assets/js/32.c49efae4.js",
    "revision": "7e5b0e9396f8a826cff67c2700e5c9b8"
  },
  {
    "url": "assets/js/33.7588bce0.js",
    "revision": "3d88feb0a12f6a0a16be7176e821eadb"
  },
  {
    "url": "assets/js/4.2c8c7931.js",
    "revision": "88e6ca5c1d2878b3c39116a224e996b4"
  },
  {
    "url": "assets/js/5.32aff053.js",
    "revision": "467aadf5dd97ea9889bdfd804a919025"
  },
  {
    "url": "assets/js/6.567d2b6e.js",
    "revision": "c5ecd2581a575f17dd786d44d32f9b73"
  },
  {
    "url": "assets/js/7.6727ae84.js",
    "revision": "977eba69be33be18e264044d2843c58d"
  },
  {
    "url": "assets/js/8.d05a7b16.js",
    "revision": "72d1f76a9327cf44f9c5c7930145a255"
  },
  {
    "url": "assets/js/9.40a59b0b.js",
    "revision": "c801e335d00431eb01e2b6f365a066c2"
  },
  {
    "url": "assets/js/app.1d587395.js",
    "revision": "2daae8576542ac1c5a9c9a08e069e278"
  },
  {
    "url": "blogs/JavaScript/vite配置SSL证书.html",
    "revision": "7817bbc6c19b9f9d51130bdc7328dc5b"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "2d46c9a638de4dcf3ef0597dc577f6ef"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "f0863b3fbf1c2bdf3cf4e9fe41815de2"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "b0fadf65dcb604504acf05b01ae902c3"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "a66fed17f4605c193fe6f3c64021570e"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "a08603370c08f261c33a12d0ac33e0bf"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "9528fe5157d4fa4c2b08dadd79fe0593"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "0c68e96abc0bf956a0e3e5e595f2866b"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "305db90454dcfdc645c07ae37338aba8"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "6e093911e96e78dc9b52245f4207a53b"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "58de073118fb1a445341f4b9f6eca438"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "7c0e41d893ed6ad2e950f939348ae049"
  },
  {
    "url": "blogs/react/react+ts项目搭建配置.html",
    "revision": "e17b41f029c3bcd725696a95bf58f279"
  },
  {
    "url": "blogs/react/vite脚手架搭建react项目.html",
    "revision": "af330d8ae1b8bce14681536f16cf3106"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "73f09ab3b508065541e749cc6adf6a32"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "a729d712547565b0932e71ef35c282ef"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "cee7f21f1a2ce1b1aab45b5c3f7cc326"
  },
  {
    "url": "categories/index.html",
    "revision": "4e4b29f67b785a5c249ea3d2e26027ac"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "be9b071d750ceaf3b93dbc40a1624315"
  },
  {
    "url": "categories/python/index.html",
    "revision": "68542842cf1972f82ea08b34a9d38a9d"
  },
  {
    "url": "categories/react/index.html",
    "revision": "1046975d258dffc208d385338c017aa7"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "90dda8e9da09ba9662655f387636221c"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "8901079359fb389b0832d95e4f6ce456"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "900715c00f1962e56d4f3b2987ccaf8a"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "9ce5e272693ccbd15d83b03f5989f30e"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "65879825a625fcec40f831cffd0f2a5d"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "a6cf0e15f50131f3119666f29ecb3f76"
  },
  {
    "url": "index.html",
    "revision": "1fb9a9db33792287238b0eaf341c438e"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "5fc11a61baec2ddcf69d40d559ad4243"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "57b0f498c7446be8b60daec78131b625"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "cc6fa399609473201fd52d6568781d90"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2e9cb2ee97d0a0cc084f208902d8d145"
  },
  {
    "url": "tag/index.html",
    "revision": "89a5a7f522e33b11f3ad097496b57733"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "aef76035fed4f0dae71e629ce0932ba7"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "2962ffb176af4e326946bdb78d6b1950"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "a10ca85b97c552584cdd6192c8be9220"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "8f7c93f6cba7430849652073b25dec97"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "243bc5d1e4acef9137a72c9b0637f832"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "f9d810db802129766fbc3e3798c6ee78"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "e227fd5dcc85104b01d5b65879927823"
  },
  {
    "url": "tag/python/index.html",
    "revision": "ac5c1756d71bce5c3bd7e305a210f085"
  },
  {
    "url": "tag/react/index.html",
    "revision": "82c19e27e3c94255110db0af96582b5a"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "c8c2f985bfb82eb58d54095e6a5892c1"
  },
  {
    "url": "tag/SSL/index.html",
    "revision": "bd2f6477fbc6fd787663153848602b0e"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "074ebbae59ae09bebe2377c2e73e12a2"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "fe7e88a5f6de9bc2ca4fd0a9b9cf3a61"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "823067a7078bf5f416027e418a9be3f5"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "632cc36f50510dbf17866444a197ee57"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "5cc2a02d4d6a1d675f7fb07e6298d3f1"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "3d48d4a9e3fd50c948afecb82faa272c"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "7b3dfc1217e865502a76832ac990c893"
  },
  {
    "url": "timeline/index.html",
    "revision": "89350f20641c0171b2d9f1f775379981"
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
