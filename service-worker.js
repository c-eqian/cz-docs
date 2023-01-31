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
    "revision": "3c9f48395bf73b4160db447a919da231"
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
    "url": "assets/js/app.b58080a5.js",
    "revision": "306e590c4ff46582ed7c79fc69b82c2c"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "0c94fbd9a446bb4450272685dd55fe7d"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "bed4b84ddc5258a2874c0b719db9463e"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "ef81bb297936a67f816a08aa8352c68d"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "0cb482061a0d060ff8910f629c753e03"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "a659b2f226291430c1a2123992607bb0"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "8295a58b47594a484224af97020c6cfc"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "efabf2742b2ef7cbc7abae47f72548b2"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "5fbc2e9e59ec7e06d60d504ae1fd24be"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "845c5972ef96382de6e9168ff5266b41"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "3307f26ed62826afc320b8f1242c50e8"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "e07526be958c2f8421d263cc5d52b99b"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "f793dc868f694b733e1711e9b78d55b3"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "5263772c29ce7638a3e383d3dc11a46b"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "3684b108645a64827847c28b8dc0aca3"
  },
  {
    "url": "categories/index.html",
    "revision": "282b6fd63228ce23c3dbf2fb5e998f44"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "b209aeae5c2c30097065a9307ddf3ded"
  },
  {
    "url": "categories/python/index.html",
    "revision": "756013fe61dbab381ecc53f4b33c1a62"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "499cfc9c1c336b5bed7c2f30c520c602"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "c54a60d8093a38aaa47baecf3e61201e"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "11670bd41d22c703a8a8232c94af127a"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "1119a78c61da86031b940460f38910c4"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "c288028b05ce03c5fa905f631022bece"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "4f3c766b35c08c88a9365868022fc3e5"
  },
  {
    "url": "index.html",
    "revision": "b098bdf69572d3e08a6524989a6426bd"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "283d4d88238c7e05b8c2817379cec377"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "fe528f5efed6c363e64e0b1750be4492"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "fb148b6e457a661291f8cdd71c251ac7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "98e9d6b0663ed4294e89c36dd1ce5dbe"
  },
  {
    "url": "tag/index.html",
    "revision": "397e95a117d32b96bac8ff7f265212da"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e30a4e8b81078ae09d7e2ec2869c45af"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "52c67594b1982ef1ea461ca89d23d0a0"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "f20d51366b57c2683048497ea7840206"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "f29f4f38bf663c2d3cccc2ee544ea6ff"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "10fe833926cf5e895b928946f321c2d2"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "908f573f0b6c53deb65ac80ca2669e1f"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "f00cdbc97b59390837bb4e9461c29343"
  },
  {
    "url": "tag/python/index.html",
    "revision": "2d2a30d47d3efb2ea013d452639a848a"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "5f0396569c0e013e26a0f162d7c71253"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "29ff442a0c9e061d042c5f2b99da7f15"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c3b5de43044bd8d9a6168017fd950259"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "35ae06be1b7847e3b51a3aab3260d5e2"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "197ec4976b35b68734fb0bcc9fb9220e"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "3361106164b44cab396c2b53b1bc045e"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "cec245f11fbe7e06aff48e0db83daaa5"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ca1301a3cde208661edfb06bc03adcc"
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
