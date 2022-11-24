module.exports = {
  "title": "cz-文档",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "联系我",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "GitHub",
      //       "link": "https://github.com/recoluan",
      //       "icon": "reco-github"
      //     }
      //   ]
      // }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "笔记&博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "cz-十三",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "更新时间",
    "author": "cz-十三",
    "authorAvatar": "https://s3.uuu.ovh/imgs/2022/11/23/f0fcebdd69e0360a.jpeg",
    "record": "cz",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}