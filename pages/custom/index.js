var app = getApp()
Page( {
  data: {
    ysf: { title:"自定义" }   
  },
  onLoad: function() {},

  /*
  * 自定义事件示例：
  * 触发自定义事件时，会产生事件上报。
  * 可在控制台NetWork中查看
  */
  Custom_1() {
    app.DATracker.track('这是自定义事件', {
      ProductId: '123456',
      ProductName: "MacBook Pro",
      ProductPrice: "$123"
    });
  },
  Custom_2() {
    app.DATracker.track('转发', {
      title: '购物车页转发',
      desc: '小程序测试demo',
      path: '/page/cart'
    });
  }
})
