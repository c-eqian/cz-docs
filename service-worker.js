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
    "revision": "bf3357b08e69ac568ed05ef1e808e526"
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
    "url": "assets/js/2.fb9d50dc.js",
    "revision": "c06ffa2edde8df6949bea0dbb5fa8142"
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
    "url": "assets/js/app.74a73220.js",
    "revision": "2790b7ae0eb7dc0a3190a0401b3be81b"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "12f0e7013e5b28aabce64778aaf5834d"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "0efa6078149304e5b4b97fbba4984744"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "50a1d1bfcca53cf7246645aade94936e"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "e7040cacaf6ab267376dca32b2e0771f"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "8c64e5df41e1d25cc0083a6ce5a124bb"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "0b0f2868b8475ebd8bb6fbb5c67647f4"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "13656766dbd0c352acd139b016026034"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "403aea4e98aa73364e217938332ccfc3"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "05ed6b8f8226d8b3a04fa517fe1b009d"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "64e7ccaa610c42b1b297ef21b928c114"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "f4dac20fb594f7340f53be623eca1fcf"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "52fef5e9b98451acde87adbf4fd4a6b9"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "e2de6be17b2a5d9c2d501ebc51c182f6"
  },
  {
    "url": "categories/index.html",
    "revision": "4c240e8c9441e3f5acc8cb674ce8dee9"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "df39bdd387806bf4ab0f0011e1548830"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "2b65e42f3875085b12240ed857614057"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "61392550b59672501e966adb3ec6044c"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "8112505572d46b512ff1166d3458c4bf"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "a5acd376698399b293957b3f31e2a8a5"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "9347207d91f389cd2c5922ca3480e4e2"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "600ddc3e5367d654f0d624f09d96e10a"
  },
  {
    "url": "index.html",
    "revision": "57a28eb98f13a4f0757353d58456acbf"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "ccfecc2c993d03a44660dc88f5d28732"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "96b016b68ec95b3bfc8a1f29deb2f257"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8bfc2cd600d64c3711002d26db6be694"
  },
  {
    "url": "tag/index.html",
    "revision": "841bafc4c493b532d28a452dbf0a676b"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "bc5a26499ec479d969f51426ac86ab8b"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "d18cad2f26f94bd54877e5d8aa684c52"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "5e532eefeb793643004f852d556bd6b2"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "30bf15b8feea8ff62ff8986876660efe"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "fe65674515bb655ae1ddcfcd6f580750"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "e18523d80af44765f5f5753f99fedf9a"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "95f556e762eed237acad451b53c4d218"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "2878d2b53dbd64b4324de3fc3ee1bdd7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6379eaa10adc8ff8cd4688b9b75da07b"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "8a51af0143c3f23983edca7acb38107d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "b14a3495d59e05c59e09490bea444a19"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "548501c386c513225f334f1623f5ca14"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "85747b736b3fede2f5e26ff7585be262"
  },
  {
    "url": "timeline/index.html",
    "revision": "2b32abc3ef38a1c38acce08bc6548db0"
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
