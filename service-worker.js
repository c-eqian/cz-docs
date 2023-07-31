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
    "revision": "d499315fc2bdb3c7cd5d0da32f93225b"
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
    "url": "assets/js/10.3b109263.js",
    "revision": "4db8d2d9c1dda858c153e2f4102e0f11"
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
    "url": "assets/js/2.12efeb42.js",
    "revision": "451f9617d391ab5076a59c702f1356be"
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
    "url": "assets/js/31.23fa92e8.js",
    "revision": "0fc4047a8cb3c5427e3d22763880ef26"
  },
  {
    "url": "assets/js/32.56dbb913.js",
    "revision": "b3b9b41fe43f4232ebd47f942e161fee"
  },
  {
    "url": "assets/js/33.bf202054.js",
    "revision": "1a17beab5d893187097cceac7e1bd425"
  },
  {
    "url": "assets/js/34.53ed8b73.js",
    "revision": "9f3263e22a8a16befbae6d95e7873e06"
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
    "url": "assets/js/7.43cd4946.js",
    "revision": "b9ef1475a8abb47ac9a78d5e16a79688"
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
    "url": "assets/js/app.d6185a21.js",
    "revision": "89b312ba447b38982b688192d346b195"
  },
  {
    "url": "blogs/JavaScript/vite配置SSL证书.html",
    "revision": "56ebafb034fd657ec9bd971e2ba0f608"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "572a91ff8bb70d28d670d8f0e6287605"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "9f6a62af91fa730e0368eb4818f0697d"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "255243a797a0a810d51e6824af12d201"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "c0783c7220dc09b8e525ca3c3c7ccc76"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "b999ddda732477bfcaed6669b5429d82"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "7be89bb86c5acb0455c0464c141d7169"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "0c663f0dad56779662d5b0c0a1506fd5"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "2abc265e4b592ba05e5d8e8eab23d262"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "e25eedcfca2f1ee238e3033a285dc186"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "cd23a746a7b4ff9e60a309bb5d64b9bc"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "20d6b95717d808398f05d267a04ab25b"
  },
  {
    "url": "blogs/react/react+ts项目搭建配置.html",
    "revision": "c61bd1756780f8e1755b9f503d6ace22"
  },
  {
    "url": "blogs/react/react基本使用.html",
    "revision": "542bad4fecab327c97ca095b2ae4bafd"
  },
  {
    "url": "blogs/react/vite脚手架搭建react项目.html",
    "revision": "ea6b60a8432cb0e11d7b3a4add966f19"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "714d7b046d5c41b64532a2549e47fbe0"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "92e1f8baa33bd54a8198a1ea68ac39ad"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "96a1d40d89001372b472e6fd55be1322"
  },
  {
    "url": "categories/index.html",
    "revision": "080ce300d9e46635385397b7d0aae7ea"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "3cf8aeb7e2e803dedb9db3aaecf502bf"
  },
  {
    "url": "categories/python/index.html",
    "revision": "de653ed8da23a6c4b0e7b4be853d95a3"
  },
  {
    "url": "categories/react/index.html",
    "revision": "740c1b4c823bfb1a5bcc61e0f9cc5c5a"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "9a01652f1014f544c4f2a0fa8222af23"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d030ccc5b5839b5f15195faac490a1d9"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "abee4fc2bc3f2dc503001f2d7938eda9"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "bc25362bbc956a72c6947a13b04af032"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "4a10d2c14bae7ea65e20283e717dcd32"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "64427b4da5e4eea6f791674313a88134"
  },
  {
    "url": "index.html",
    "revision": "a8850f9a30214ce0dbb6e3823e351bc6"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "5872a28841320fcc337e665f669df648"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "fc261d60ab154099755be89f5cf01e36"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "7cbf692d9b31627b80698209efcc6d27"
  },
  {
    "url": "tag/git/index.html",
    "revision": "828c086b96486f3021a13fa4affa3f49"
  },
  {
    "url": "tag/index.html",
    "revision": "0f94849f0b61f0a1d54291bd22ff02d1"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "1ac4a964fd8d266a11ea5f95ed483b01"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "2669fb6aeff473f4acf0af65852124e7"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "f914cb3831f66a3b58c54cb1dace0007"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "afd09a84c0139bfe1a10e277e7f52afb"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "fd317d2570fedfc0f45bdcd92b315302"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "50bd14f212f396afa79fe092f51fd653"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "72c043b4834c5827f54d1e23921d5ccd"
  },
  {
    "url": "tag/python/index.html",
    "revision": "572e4d52d4582d7956a86de656a78fe6"
  },
  {
    "url": "tag/react/index.html",
    "revision": "02a99c969f1ce19c3c30f13e8594a944"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "432cb629a6ee8b1e15bbbc54dcf3e1f7"
  },
  {
    "url": "tag/SSL/index.html",
    "revision": "e161551fb759970db8c53ef61ebd18d0"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "edba07a5a9bcba147c261f5d250b4fc5"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "05b655c5fb187d97f28fc4a05272b520"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "cfd2d5d1a2746d58038e823338448476"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "061ae0061912e020099accdd1ce94fb9"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "c0525645b5dcc92bee982010e3851020"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "ac2c79b9fcb3b688eadbf938b7c4bf26"
  },
  {
    "url": "timeline/index.html",
    "revision": "04c8425d1b3f68335e38a0049af48977"
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
