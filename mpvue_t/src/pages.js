// 路由配置
// 第一个即小程序进入后打开的第一个页面
module.exports = [{
    path: 'pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      usingComponents: {}
    }
  },
  {
    path: 'pages/counter',
    config: {
      navigationBarTitleText: '计数'
    }
  },
  {
    path: 'pages/logs',
    config: {
      navigationBarTitleText: '日志'
    }
  }
]
