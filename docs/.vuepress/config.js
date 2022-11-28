module.exports = {
  title: '秋谨~',
  description: '',
  base: '/cz-docs/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: 'https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js',
      },
    ],
    [
      'script',
      {
        language: 'javascript',
        type: 'text/javascript',
        src: '/js/MouseClickEffect.js',
      },
    ],
  ],
  theme: 'reco',
  themeConfig: {
    '/cz-docs/': {
      lang: 'zh-CN',
      recoLocales: {
        pagation: {
          prev: '上一页',
          next: '下一页',
          go: '前往',
          jump: '跳转至'
        }
      }
    },
    codeTheme: 'solarizedlight',
    subSidebar: 'auto',
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '文档',
        icon: 'reco-document',
        items: [
          {
            text: 'co-utils工具库',
            link: '/docs/utils/',
          },
        ],
      },
      {
        text: '时间线',
        link: '/timeline/',
        icon: 'reco-date',
      },
    ],
    sidebar: {
      '/docs/utils/': ['', 'co-utils工具库'],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 3,
        text: '笔记&博客',
      },
      tag: {
        location: 3,
        text: '标签',
      },
    },
    logo: 'https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '更新时间',
    author: '秋谨',
    authorAvatar: 'https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg',
    record: 'cz',
    startYear: '2022',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    //   ["sakura", {
    //     num: 20,  // 默认数量
    //     show: true, //  是否显示
    //     zIndex: -1,   // 层级
    //     img: {
    //       replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
    //       httpUrl: 'https://s3.uuu.ovh/imgs/2022/11/26/1996446d90014289.jpg'     // 绝对路径
    //     }
    // }],
    [
      '@vuepress/last-updated',
      {
        // "上次更新"时间格式
        transformer: (timestamp, lang) => {
          const moment = require('moment') // https://momentjs.com/
          return moment(timestamp).utcOffset(480).format('YYYY-MM-DD, HH:mm:ss')
        },
      },
    ],
    [
      'cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: [
          'koharu',
          'blackCat',
          'whiteCat',
          'haru1',
          'haru2',
          'haruto',
          'izumi',
          'shizuku',
          'wanko',
          'miku',
          'z16',
        ],
        clean: false,
        messages: {
          welcome: '我是lookroot欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦',
        },
        width: 240,
        height: 352,
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    ['vuepress-plugin-boxx'],
    [
      'dynamic-title',
      {
        showIcon: 'https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg',
        showText: '(/≧▽≦/)咦！又好了！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)喔哟，崩溃啦！',
        recoverTime: 2000,
      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 网络文件示例
          {
            name: '飞舞吧，樱花！',
            artist: '余日秋山',
            url: 'http://music.163.com/song/media/outer/url?id=518291899.mp3',
            cover:
              'https://p1.music.126.net/AKhQSRL6HyZu4YwWg4Wi6A==/109951163060585255.jpg?param=130y130',
          },
          {
            name: 'Blue Dream',
            artist: 'KWXZ',
            url: 'http://music.163.com/song/media/outer/url?id=1367709776.mp3',
            cover:
              'https://p2.music.126.net/3MXP_EOixgEYhNAGtrR1Mg==/109951164100133944.jpg?param=130y130',
          },
          {
            name: '飞鸟以天空为巢戏腔版',
            artist: '勇往直前',
            url: 'http://music.163.com/song/media/outer/url?id=1990239305.mp3',
            cover:
              'https://p1.music.126.net/cDmRsAy8b1aLXn40txAMag==/109951167975616048.jpg?param=130y130',
          },
        ],
      },
    ],
  ],
}
