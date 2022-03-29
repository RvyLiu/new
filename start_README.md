# Blog

**windows 安装 node.js**

下载地址：https://nodejs.org/en/download/

## 安装 Yarn

```
npm install --global yarn
yarn --version
```

## 下载 vuepress-reco

**yarn**

```bash
yarn add -D @vuepress-reco/theme-cli	# 安装 global 全局 -D 目录本地
yarn theme-cli init			# 初始化博客
```

<font size=2 color=''>初始化结束后，目录下会多出一个`blogs`文件夹，用来存放你的博客文章，`docs`文件夹存放文档类文章，`.vuepress`文件夹，存放博客的配置文件，图标背景图片等资源。`README.md`文件，是你的博客主页。如果看不到`.vuepress`文件夹，在文件夹设置中打开“显示隐藏文件” </font>

安装需要的package

```
yarn install
yarn dev
```

## 自定义网站配置

打开 .vuepress/config.js 在此文件下，可以修改网站的一些配置。不想要的部分可以直接删掉。

```json
module.exports = {
  "title": "避海拦天的学习笔记", // 博客网站的标题
  "description": "BHLT's Blog", // 博客网站的描述
  "dest": "public", // 打包生成文件的路径
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico" // favicon图标，在/.vuepress/public目录下
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
  "theme": "reco", // 使用的主题
  "themeConfig": { // 主题配置
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
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
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [ // 友情链接
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png", // 网站左上角的Logo图片，存放在/.vuepress/public目录下
    "search": true, // 是否开启搜索功能
    "searchMaxSuggestions": 10, //搜索给出的最大建议条数
    "lastUpdated": "Last Updated", // 最后更新时间
    "author": "", // 网站作者
    "authorAvatar": "/avatar.png",
    "record": "xxxx", // 备案信息
    "startYear": "2017" // 网站始于xxxx年
  },
  "markdown": {
    "lineNumbers": true
  }
}
```

### 自定义首页配置

`Blog`目录下的`README.md`对首页的配置进行更改

```json
---
home: true
heroText: 避海拦天的学习笔记 # 展示在主页正中的标题
tagline: Things change, roll with it. # 展示在标题下方的文字
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   background: '#fff',
#   borderRadius: '1rem',
# }
# 主页背景图
bgImage: /bg.jpg # 设置背景图片，图片放在/.vuepress/public目录下
bgImageStyle: {
  height: '300px' # 背景图高度
}
isShowTitleInHome: false
actionText: Guide
actionLink: /views/other/guide
features:
- title: Yesterday
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题
- title: Today
  details: 希望帮助更多的人花更多的时间在内容创作上，而不是博客搭建上
- title: Tomorrow
  details: 希望更多的爱好者能够参与进来，帮助这个主题更好的成长
---
```

