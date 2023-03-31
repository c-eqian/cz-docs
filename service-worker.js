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
    "revision": "e6340330e2b683bda68d0a5804fdf972"
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
    "url": "assets/js/1.b4e5d39f.js",
    "revision": "afd8ac76475b97d1ed6de83454034aff"
  },
  {
    "url": "assets/js/10.9947e4a3.js",
    "revision": "441cb3eea7a361a97f9c4eca4692d274"
  },
  {
    "url": "assets/js/11.6fbb063a.js",
    "revision": "9f8e0aa8584a85dee2b3761e89d52849"
  },
  {
    "url": "assets/js/12.9ec29329.js",
    "revision": "638fa13e11846ed64344df9b74a9fa41"
  },
  {
    "url": "assets/js/13.9e710103.js",
    "revision": "f16e17b675baccc08c5324071a891b49"
  },
  {
    "url": "assets/js/14.3c791975.js",
    "revision": "80711bebc2a61770a70258e04b22d32f"
  },
  {
    "url": "assets/js/15.c3c2618f.js",
    "revision": "e3ac7f5f78b01dfcb655c942985be921"
  },
  {
    "url": "assets/js/16.0bca6d39.js",
    "revision": "233a9fb30794431ce9f6f21cfee78752"
  },
  {
    "url": "assets/js/17.e0bb5fce.js",
    "revision": "127d9d38c4fb65e807917b7906ebaa97"
  },
  {
    "url": "assets/js/18.ccbca4fb.js",
    "revision": "544856b4f74842d63f324413b1b23b99"
  },
  {
    "url": "assets/js/19.e2fe5df4.js",
    "revision": "582f811887f78438e11f77498b0c4375"
  },
  {
    "url": "assets/js/2.45f405fe.js",
    "revision": "9ec55b1f8d7997b9eabde46a37e072e1"
  },
  {
    "url": "assets/js/20.d9036cfd.js",
    "revision": "a6b7a48620f6fc0286920a7c05202684"
  },
  {
    "url": "assets/js/21.e9713553.js",
    "revision": "f0597689bfbcacb75a47685c65c2076a"
  },
  {
    "url": "assets/js/22.cf09be40.js",
    "revision": "3501c12c1ae87b9f739951913aee0816"
  },
  {
    "url": "assets/js/23.4db79c33.js",
    "revision": "941468772881cefa5ed9322ab68451b4"
  },
  {
    "url": "assets/js/24.4066be78.js",
    "revision": "41f50b8076a492907dcb815a391192e2"
  },
  {
    "url": "assets/js/25.4237eeb2.js",
    "revision": "7b46b6dd54428e1ab2bbf8bf32694114"
  },
  {
    "url": "assets/js/26.86d065a5.js",
    "revision": "af5c49aa23df1aaebba54942c061752e"
  },
  {
    "url": "assets/js/27.2eb70bbe.js",
    "revision": "31d08988135ac034c89c635dc7598ad1"
  },
  {
    "url": "assets/js/28.754a51c8.js",
    "revision": "fdc928cef1993763c8e0067077499fa4"
  },
  {
    "url": "assets/js/29.293ebd96.js",
    "revision": "c6c21baec8bc535eb69d112b07fb8b3a"
  },
  {
    "url": "assets/js/30.783f317b.js",
    "revision": "7bc0fb40ce7a5f795bb5047f185516ee"
  },
  {
    "url": "assets/js/31.4aea6775.js",
    "revision": "0e7e5368e25bfecda3b6a1d0e7390e69"
  },
  {
    "url": "assets/js/32.8e5cb280.js",
    "revision": "c8ebb7018d2e275c50ca570982cc3180"
  },
  {
    "url": "assets/js/33.ab89e187.js",
    "revision": "1fa312fb8324579345c9a343320d0d0a"
  },
  {
    "url": "assets/js/34.885249a8.js",
    "revision": "2f2de6bdf8e62a56d394bd1dfa4bd276"
  },
  {
    "url": "assets/js/4.264abce6.js",
    "revision": "1a51b934b05c5143bd99cf7ff45bded1"
  },
  {
    "url": "assets/js/5.7e3fe4c4.js",
    "revision": "6bf1edeb9809548e61cc762fb20d5845"
  },
  {
    "url": "assets/js/6.4f67065d.js",
    "revision": "1ca46a9ef970ec6e6283befd78799407"
  },
  {
    "url": "assets/js/7.b59711ca.js",
    "revision": "1e6aeda1c023141d03a5f458ec37e166"
  },
  {
    "url": "assets/js/8.1818d1f4.js",
    "revision": "5ac4f049363cae8de16ada21f29e4572"
  },
  {
    "url": "assets/js/9.8f0127d3.js",
    "revision": "667de1b0719f8e2cf5832c0e4952480e"
  },
  {
    "url": "assets/js/app.bec10bf3.js",
    "revision": "1a239871541fb402acd484044092136e"
  },
  {
    "url": "blogs/JavaScript/vite配置SSL证书.html",
    "revision": "412751ed6095aff04811fadd2bf52ea5"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "790380f02c1bd5bbdb2b2d008cc30851"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "fcce7dc7eee070ac18684e1542bad4da"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "6312004c80343ceeb0ba51fc55dc31d8"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "425e68b95711b0fc6184cb8f44ab5b9b"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "0869579fc0fdfe60f590c5d0cecea28e"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "a737909c28853683f5268fa560862ee9"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "3dc2e6f43f27aa349d6cf9fcb4a82f75"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "a0409d77e39ffe335603e8880094a0c2"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "64bfdc53e1be67d2c3e689077f377169"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "0b335f4fd9885a30aaaf9e0bcecac91d"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "9cd6a75299f64b7f4d9e6d316d4eef9a"
  },
  {
    "url": "blogs/react/react+ts项目搭建配置.html",
    "revision": "ad77dc6a96ced14a3eb3ff64be4ed39f"
  },
  {
    "url": "blogs/react/react基本使用.html",
    "revision": "48908a342e8bad40281517459f25a911"
  },
  {
    "url": "blogs/react/vite脚手架搭建react项目.html",
    "revision": "26648b19e88ef8756a71a483daa78b94"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "e3a7c6a6e5a86598d03ad2daa3e9e3c7"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "43ecacaf9df0650032ebb283e73667b2"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "093b0a36f2ebb3835789f5ab684003d7"
  },
  {
    "url": "categories/index.html",
    "revision": "70f797b3c7087379cb77c3fbbcc3b367"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "144526cc6ddeb7af64d50ffcb166a87c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9f18e3f7dfe89e4d5a66001c8c88a8ee"
  },
  {
    "url": "categories/react/index.html",
    "revision": "2ac75f0c34bd2c738ca91462e5b77a9f"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "8e2832a2991a8ba3b4415efd23232a03"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3a857e4dbfd6f320bce12294286a71b0"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "5cba1e908bda538241e85e23873971fd"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "4e29720312fef7c0d43669f567483d94"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "19294b510a9179ccf7904260ff270a5e"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "d4282173d75a66d9c9b57175b5f50ca9"
  },
  {
    "url": "index.html",
    "revision": "cf5f3a6f755a87dd9c9d2918995a2232"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "62ce8f9868d4406fcdac5dfdc270331d"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "5ce157442269c9e24b3c0469a2a73330"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "332ccde37d1e8842b4d1bbf5ea37df2f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8aa893c18fdbdf4c4d9ae8f3e7a23b3a"
  },
  {
    "url": "tag/index.html",
    "revision": "04e690a54c7474e802d3691201dc9bcf"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "e1af24f5f4f04f1f3ad03593f813ecc3"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "34292384408244b097e0b28ea0416633"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "a6b0805736d2c2c810b7855f9462c411"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "c58b2297ba739151c8572fe2f112afe5"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "ce25993a1c9a774019d98af7e4a31f86"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "0b79332991ef6ca046130fe5cb0b7f9c"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "8716d7d95e980725ab45962c970370e3"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1f81bcc8d39dbc45fa1aa4cf091e4623"
  },
  {
    "url": "tag/react/index.html",
    "revision": "59380f0d764e95317cd14fb7a623e9db"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "7de5e6dfede58f59299cedf2abd83407"
  },
  {
    "url": "tag/SSL/index.html",
    "revision": "f7558cbf22da243f08c0eb17d835d5f4"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "f6e58601327f300911fa6af0c3cfa83f"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "fd7442b95aa4c09dd16806deb6b4451d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2900b60708aea0aa52d6756312fcfbd5"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "f1df75dab5fa9517c9ce7b40c3341724"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "fccd7edfd353d96e47127fbeb0ca798e"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "51827b270969c7181dc39a3ab02a9e07"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "1886b2a45c427e63da26b346ba9edc49"
  },
  {
    "url": "timeline/index.html",
    "revision": "ec8028e8e3e596c4e20d2d32ef670554"
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
