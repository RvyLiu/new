module.exports = {
  "title": "Rvy笔记收录",  // 标题
  "description": "this Rvy_Blog",	// 描述
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"	// ico
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
  "theme": "reco", // 主题
  "themeConfig": {	 // 主题配置
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
    "friendLink": [
	     {
			"title": "Rvy_gitee",
			"desc": "come in",
			"email": "rvyliu@163.com",
			"link": "https://gitee.com/rvyliu/know"
		}
	
      // {
        // "title": "午后南杂",
        // "desc": "Enjoy when you can, and endure when you must.",
        // "email": "1156743527@qq.com",
        // "link": "https://www.recoluan.com"
      // },
      // {
        // "title": "vuepress-theme-reco",
        // "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        // "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        // "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    "logo": "/logo1.png",		 // 网站左上角的Logo图片
    "search": true,				// 是否开启搜索功能
    "searchMaxSuggestions": 10,	//搜索给出的最大建议条数
    "lastUpdated": "Last Updated",	// 最后更新时间
    "author": "rvyliu",				// 网站作者
    "authorAvatar": "/avatar1.png",		// 头像
    "record": "xxxx",		// 备案信息
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}