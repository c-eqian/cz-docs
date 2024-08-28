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
    "revision": "c7ba0a43279225155924189e40bbc1ba"
  },
  {
    "url": "assets/css/0.styles.f183d118.css",
    "revision": "5ea24b31e90bbb6983921f743c639f12"
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
    "url": "assets/js/1.0d7da4e9.js",
    "revision": "f4e620afd2236868e1af641c852e37ef"
  },
  {
    "url": "assets/js/10.dfa5009c.js",
    "revision": "c3eef21601ef5c79d95d27f2f60e0be8"
  },
  {
    "url": "assets/js/11.a973ada2.js",
    "revision": "d81467569b61731f2027c636e98ff934"
  },
  {
    "url": "assets/js/12.17f2b6eb.js",
    "revision": "68baf5b202c7700262ae1b170caf1c93"
  },
  {
    "url": "assets/js/13.446c18cf.js",
    "revision": "63de2cfe250c9a9852a85737ee76a073"
  },
  {
    "url": "assets/js/14.319035df.js",
    "revision": "63017143860156d86859acc3e606dada"
  },
  {
    "url": "assets/js/15.e58df88e.js",
    "revision": "ec8c0ceb7a938dec095240d605c66bb6"
  },
  {
    "url": "assets/js/16.bcd871df.js",
    "revision": "5b5d322f9023f74e52f81991b162ee78"
  },
  {
    "url": "assets/js/17.6c17d3eb.js",
    "revision": "ac41098d4d074274630fcea9f5cb0f79"
  },
  {
    "url": "assets/js/18.3188b422.js",
    "revision": "75fdc0f691062fa87ef9111028741d43"
  },
  {
    "url": "assets/js/19.cf63a7dc.js",
    "revision": "d3cb9fc328f7711acc272acce344d15d"
  },
  {
    "url": "assets/js/2.af67ce17.js",
    "revision": "c80c7b2cad01d92ec9d4993942b59899"
  },
  {
    "url": "assets/js/20.e96e1c8c.js",
    "revision": "51c83a339c19e023d365dae072651f32"
  },
  {
    "url": "assets/js/21.c3506834.js",
    "revision": "33b74a192e9c8688d14c9d0352a6152f"
  },
  {
    "url": "assets/js/22.8d57a774.js",
    "revision": "19d7c55c6d9d9ad04ddb27c72109b16e"
  },
  {
    "url": "assets/js/23.e02511b2.js",
    "revision": "968e90ea1deac25cb939f96f54f069f6"
  },
  {
    "url": "assets/js/24.95581d2b.js",
    "revision": "118322240fc82b4df22de04ba5e5a02c"
  },
  {
    "url": "assets/js/25.bfa5c2a4.js",
    "revision": "3dd3d4847d7cf1f9b52fb688610b0079"
  },
  {
    "url": "assets/js/26.a81c727e.js",
    "revision": "1c7373a8f494ed643902cdc65d9df0ee"
  },
  {
    "url": "assets/js/27.5e8493f4.js",
    "revision": "1b29ac23381f643e568c77dc8f8063db"
  },
  {
    "url": "assets/js/28.bbb6a756.js",
    "revision": "ec2db486adee45b47300344061ec49c7"
  },
  {
    "url": "assets/js/29.cbfad1cf.js",
    "revision": "9f4bdcf3c77d8565c02dc0025c989e93"
  },
  {
    "url": "assets/js/30.7e4a45f7.js",
    "revision": "21afd3b44f2d33366b36997b9aa11184"
  },
  {
    "url": "assets/js/31.2fe318d6.js",
    "revision": "a2f968a501aed615715131552a826894"
  },
  {
    "url": "assets/js/32.bdfcc26f.js",
    "revision": "fd8ebda983219d385b5605ede0eb3df9"
  },
  {
    "url": "assets/js/33.521f162d.js",
    "revision": "092acf25ab4d06ddab4ebd5e72012a9b"
  },
  {
    "url": "assets/js/34.d9c77f24.js",
    "revision": "fd3d56bd20c2b51ea8a7dbcd21db91a5"
  },
  {
    "url": "assets/js/35.269212cc.js",
    "revision": "52cd65433c03e3f85a5e8f15b285c676"
  },
  {
    "url": "assets/js/36.e7a6ea87.js",
    "revision": "bed7a346423202657513e64fdd0dd2b0"
  },
  {
    "url": "assets/js/37.1fca32fb.js",
    "revision": "f2d48475d5c3451c5dbdb7c0e70e6b00"
  },
  {
    "url": "assets/js/38.61314264.js",
    "revision": "1cd8c0aedf267ef971a8578f37040a8d"
  },
  {
    "url": "assets/js/39.816c493d.js",
    "revision": "1cbf5c60d64bf2a12c4fff85fcad9526"
  },
  {
    "url": "assets/js/4.f75cd3a5.js",
    "revision": "be4839be8771a88f75316e54365f55c9"
  },
  {
    "url": "assets/js/5.36e7918c.js",
    "revision": "c5882ac5aa32ded9e2e12a3627ca74ef"
  },
  {
    "url": "assets/js/6.e2e6a695.js",
    "revision": "5af497665a85b9c2c56d424a1ccfb1f1"
  },
  {
    "url": "assets/js/7.3816eded.js",
    "revision": "d5ae67281ba221f8c0dceb1367a90c4a"
  },
  {
    "url": "assets/js/8.b74c6eeb.js",
    "revision": "eb1b7d38108e461f00ab77a7ecbc71c7"
  },
  {
    "url": "assets/js/9.2bd2cb8d.js",
    "revision": "f260a23cd207da636f5f2a6f92e3a819"
  },
  {
    "url": "assets/js/app.e0426d90.js",
    "revision": "c9c891184b032072a835ff346311827d"
  },
  {
    "url": "blogs/JavaScript/vite配置SSL证书.html",
    "revision": "330d08d320a9e0cc162f70f383e8bb9d"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "04f9c7ed3d08fa15b297a415f564ba69"
  },
  {
    "url": "blogs/JavaScript/微任务与宏任务.html",
    "revision": "67ac1f6705673cbfe376480d3a245e3a"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "ca04e6b01b0ed237e415fedb319f474d"
  },
  {
    "url": "blogs/JavaScript/揭开Promise神秘的面纱.html",
    "revision": "50834d16e7c9e0cafab41db5bbe52d60"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "ff5f0cb914d03223bc0e60c730d80ad3"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "b8bcb3349d7db72120ae5b774de95cd9"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "5f0ab2ea79490b7f3b440acfceda4d20"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "c0c093eeb3126ebfe9b153b1dd898dda"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "f580af7ab5b3ee4b16940f2c1236c4cd"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "4b48815b0a1e359dc3be1d238ea6ea3a"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "6b4d89b8f493d8cae8ca0ae48f38d060"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "454140306bce8890e008ddca0b5106db"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "f40023bd0c747ff3bf5977192cba40b0"
  },
  {
    "url": "blogs/react/react+ts项目搭建配置.html",
    "revision": "6822a1bd95abcd1049d2ce8d80362ce3"
  },
  {
    "url": "blogs/react/react基本使用.html",
    "revision": "52937beb26976e2700532aec44c289e1"
  },
  {
    "url": "blogs/react/vite脚手架搭建react项目.html",
    "revision": "db71521d2fa938e7cf497a81e8a96698"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "22004526d95d69697ea14501502f2311"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "8e1fbe2d6168d5675b94a846281a0bd0"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "c01304c0c3fe1ce117c5b0891ada4539"
  },
  {
    "url": "blogs/vue/vue3结合elementPlus封装可配置的搜索组件.html",
    "revision": "74d2b50389eb4079778c8933f93a41a2"
  },
  {
    "url": "blogs/vue/基于vite搭建项目脚手架-create-eqian-app.html",
    "revision": "1c22993c5f2b1f1f3b0ee05f868cb9b1"
  },
  {
    "url": "blogs/vue/基于websocket封装.html",
    "revision": "63c3c884708d3da87dc0c2e6b538ef7c"
  },
  {
    "url": "blogs/vue/记vue3中h函数双向绑定问题.html",
    "revision": "d020f621039172e1778629affda319b5"
  },
  {
    "url": "categories/index.html",
    "revision": "e4575cde35df117f1be755e932128f8f"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4df173bf056f52d89469577f01708910"
  },
  {
    "url": "categories/python/index.html",
    "revision": "0fe6d25f1f200e459a526a3f027dc03c"
  },
  {
    "url": "categories/react/index.html",
    "revision": "5532031bfd5734ae2712c3ffef7cd8aa"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "87bde2b42202085fa01eaad9e527e5aa"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d78e2c5e621b0c3b5cb9be66dc901a7a"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "6f35e308aa1428367fa074185e95cfbd"
  },
  {
    "url": "docs/utils/axios-vue.html",
    "revision": "0cf4717e0f4f7141aae8619989bed183"
  },
  {
    "url": "docs/utils/utils-vue.html",
    "revision": "ea8d1c1c1e1b0fafb4bb42f475f2524a"
  },
  {
    "url": "index.html",
    "revision": "95117a8ccd0edc239341ad9dc785867b"
  },
  {
    "url": "tag/axios/index.html",
    "revision": "e6d879b680c33f4b4d8228c981b0836d"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "4fe324ae3123dc22628ef2dfbca74a3b"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "b3b72e6460c8118a7c2cacd353927168"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "0231c9046782c05cbbeb0f701c62966e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f8a594a211e45cd1607ec4629018b645"
  },
  {
    "url": "tag/index.html",
    "revision": "055a7859e5ecabf290ebc1ef68775e58"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "afdb0f065c88862967d6a3e833eb6bae"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "05bb079b438b8527549b0d3f86543c63"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "0a3a752cd9b83be7e23292d5b61df6c5"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "229de74891a99ef25aefb1bc83985d9c"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "ac46ee19e83c9247525dfb64f7166a08"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "53133fa2b189355b5c72b9ff06eed0fe"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "12dc795ce9477d3f1f3ea4dd52fac818"
  },
  {
    "url": "tag/python/index.html",
    "revision": "435248e30dc22cd1fd239f50858a06ac"
  },
  {
    "url": "tag/react/index.html",
    "revision": "e5bf168790ddd7de81afc8aad178b451"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "d73fce244e12d044cb712587e40af86f"
  },
  {
    "url": "tag/SSL/index.html",
    "revision": "76e72b4ec0cae248eece12002488e4d9"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "60fc0909fe56584a90a14f85ef0fdcfe"
  },
  {
    "url": "tag/utils/index.html",
    "revision": "c7fd81fcf16d3694a2fc9ebc9e24b5c0"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "9d551cedc02797b77492c836c6938a80"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "22395574dd8f5d6e4c68bfc5047c2f8b"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "0d848da02bcb8a195b848558b37b6c31"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "111504425e64f09740e0bac3e8c9101d"
  },
  {
    "url": "tag/websocket/index.html",
    "revision": "3cb29c03d2fa612ce865b1ccba6bc0e7"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "beac86beefccb1bf8f8afcdd5e52b7ad"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "97bff54921bd3e30ff46b45ade6615ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "083407e1d7b3af4d9dc4b10575a8b309"
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
