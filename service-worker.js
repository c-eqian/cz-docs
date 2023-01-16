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
    "revision": "00c1716190f3336e2980bdeccec01954"
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
    "url": "assets/js/10.5ca4c4b2.js",
    "revision": "594a991310f2008ae5ba2873d1ca9dfa"
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
    "url": "assets/js/16.e585b362.js",
    "revision": "47cc8cdda3e77735a4b0e478a2da5863"
  },
  {
    "url": "assets/js/17.dd7ebff8.js",
    "revision": "7a1ee6dd1e8787ef432865f5d8a1d1bc"
  },
  {
    "url": "assets/js/18.0105c0d4.js",
    "revision": "83d92ae808646067f7cfd2b9a06cb152"
  },
  {
    "url": "assets/js/19.e5ffa348.js",
    "revision": "34d3fb6766c745e3f927859c1c1dfbbd"
  },
  {
    "url": "assets/js/2.fb9d50dc.js",
    "revision": "c06ffa2edde8df6949bea0dbb5fa8142"
  },
  {
    "url": "assets/js/20.d1ad1f1f.js",
    "revision": "b443cd95f1ec408655871c2a612afcf4"
  },
  {
    "url": "assets/js/21.d3b6ecf1.js",
    "revision": "76900670c5ca2af542c7259ffe424024"
  },
  {
    "url": "assets/js/22.f0c1e724.js",
    "revision": "0a5e187f46b23816be4bfcfaabd2705b"
  },
  {
    "url": "assets/js/23.447713d9.js",
    "revision": "2ac89da5c43a528ddded22d76845e80a"
  },
  {
    "url": "assets/js/24.cd8d82f9.js",
    "revision": "d06a10cffc90aebd7d74a3a200edecf0"
  },
  {
    "url": "assets/js/25.5c3b80e5.js",
    "revision": "5c815c7db69a18476c8e60ccbbaa1973"
  },
  {
    "url": "assets/js/26.8e733237.js",
    "revision": "2347c0b0b567929a7e1cd6c3c053f840"
  },
  {
    "url": "assets/js/27.1ff4193f.js",
    "revision": "caef344a77e9b08bcae61a7312e5e3a8"
  },
  {
    "url": "assets/js/28.b0c235bf.js",
    "revision": "e0a8e131037815c977631a187e0e9af4"
  },
  {
    "url": "assets/js/29.5fe31b56.js",
    "revision": "69d19797c34bafc62beb43d71d7243e6"
  },
  {
    "url": "assets/js/30.007aabaf.js",
    "revision": "62a0430cbd81b31b1f0bef4bd480eb57"
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
    "url": "assets/js/app.5f1ce669.js",
    "revision": "d96b3bc863dfc5d4b5aa5d65fbfc9bf2"
  },
  {
    "url": "blogs/JavaScript/前端知识点.html",
    "revision": "57053d1248e69e8438c786d116e5a669"
  },
  {
    "url": "blogs/JavaScript/手写深拷贝.html",
    "revision": "614f7d7930ec4e27930dd04aa554a5a3"
  },
  {
    "url": "blogs/JavaScript/数据结构.html",
    "revision": "57f06f4512276179f5f6125afa477f95"
  },
  {
    "url": "blogs/other/centos部署Jenkins.html",
    "revision": "0e5c099b799b34e86ff7bf0427df8e32"
  },
  {
    "url": "blogs/other/cmder.html",
    "revision": "6e7acf8f435d3d614015756b4a2d80e7"
  },
  {
    "url": "blogs/other/Giteen代码与服务器同步更新.html",
    "revision": "20a7bcd30aa4b63109c2d248199a36a3"
  },
  {
    "url": "blogs/other/git常用.html",
    "revision": "0f823492b53ab9738db6ed441a9a288a"
  },
  {
    "url": "blogs/other/git配置SSH.html",
    "revision": "7b696cf30ed36a0e58b56c0a1bd78184"
  },
  {
    "url": "blogs/other/nvm版本管理.html",
    "revision": "e99c9d40e41d240b37ba480f398fcb1f"
  },
  {
    "url": "blogs/other/vite配置.html",
    "revision": "5ac0375758a81af71715fc5db30cda33"
  },
  {
    "url": "blogs/Python/Django-ORM.html",
    "revision": "133d773d23a96decbf4a65b2d6f265da"
  },
  {
    "url": "blogs/SQL/mysql.html",
    "revision": "3716746a2591352e2669c817a3d663c5"
  },
  {
    "url": "blogs/vue/pinia基本使用方法.html",
    "revision": "1187a6ad53b763c79cbc9f840e383c6f"
  },
  {
    "url": "blogs/vue/vue2项目搭建.html",
    "revision": "9fcb3abe3d693d6230da067432f138a3"
  },
  {
    "url": "categories/index.html",
    "revision": "4a46f0bae7720f6f0266d6752fa4a223"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8b40b9026d0d816be9a0fbb2b3753425"
  },
  {
    "url": "categories/python/index.html",
    "revision": "32b1b642c83407c3e949ace34f6ff9f5"
  },
  {
    "url": "categories/SQL/index.html",
    "revision": "4161f59d796e5f9dd5fb1dcd330f5186"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "27e30444765fec3d24a2f25a1480d6eb"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "79e580128234ae390446abaec89e5703"
  },
  {
    "url": "docs/utils/co-utils工具库.html",
    "revision": "21f47e0e63219d2603413a10dbf226d8"
  },
  {
    "url": "docs/utils/co-utils工具库v2.html",
    "revision": "4a201cd7c68189a36b07a175824452d3"
  },
  {
    "url": "docs/utils/index.html",
    "revision": "0e7e8482368b463bb0c2755737199a13"
  },
  {
    "url": "index.html",
    "revision": "5859fa28b99878abb112c25152a611f6"
  },
  {
    "url": "tag/centos/index.html",
    "revision": "e0d057d19bdad604d705f0881988fb4b"
  },
  {
    "url": "tag/cmder/index.html",
    "revision": "8b1f4ba295e83cea194829fa2738724c"
  },
  {
    "url": "tag/Django/index.html",
    "revision": "8ec7bc60e3074bc123af43897d09ab89"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b05fda080b0519c5aadc102c726942bd"
  },
  {
    "url": "tag/index.html",
    "revision": "e2ddd2fd2918a9d3ec2f6c641705e099"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "a8b7f8e73d7a8b20e681e53bb2f6f47d"
  },
  {
    "url": "tag/jenkins/index.html",
    "revision": "a3a3a27f787462be5e4e983ad432becf"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "890e65a34306fd4137be85e87990a536"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "33cbc4158210c52bb1c65c8fc2c8349f"
  },
  {
    "url": "tag/nvm/index.html",
    "revision": "25b38db2d8d4e375aaf20cd5e27f4c1d"
  },
  {
    "url": "tag/ORM/index.html",
    "revision": "cee569bb13c1ff0484b92734bfd220b7"
  },
  {
    "url": "tag/pinia/index.html",
    "revision": "dce8071890ec4b3bb9d13c7ec6f52269"
  },
  {
    "url": "tag/python/index.html",
    "revision": "42c3d9173358b43b8862376184d3ecce"
  },
  {
    "url": "tag/SSH/index.html",
    "revision": "2dc9fa691b167c3444218ebc3cc44a79"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "4066cd37470f4a02362324a29a28c839"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "18666cddc3cc6ab462562d7afe842b56"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "f8a2d65b0c66fa757eefb98afd12ed26"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "ad3370317f46ffa31746a9c50cf8de87"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "41bb3f524bb655bc189b3dd212588dab"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "08199c7b152f7200b286e87a46941cbe"
  },
  {
    "url": "timeline/index.html",
    "revision": "04c94c01c98614610bb34888ef261aa0"
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
