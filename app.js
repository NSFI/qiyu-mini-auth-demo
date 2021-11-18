import DATracker from './utils/DATracker';

    DATracker.init('ba5e6e832ae0cf651df1540eaabc62eb',{
      appid: 'wx1f97b3203db61983',
      //在页面路由变动时，发送页面标题的事件
      onPageShow: function(datracker, router, page) {
          datracker.track_pageview({data: page.data.ysf});      
      },
    });

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        
      }
    })
  },
  onLoad() {
    console.log('DATracker', DATracker);
  },
  globalData: {
    userInfo: null
  }
})
