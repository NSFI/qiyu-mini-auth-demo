// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    ysf: {
      title: '定位',
      config: JSON.stringify({
        "uid": "dingwei123",  // 用户唯一标识
        "level": 1,  // vip等级
        "data": JSON.stringify([
            { "key": "real_name", "value": "小明-定位" },
            { "key": "mobile_phone", "value": "15968136257" },
            { "key": "email", "value": "dingwei0@163.com" },
            { "index": 0, "key": "account", "label": "账号", "value": "zhangsan", "href": "http://example.domain/user/zhangsan" },
            { "index": 1, "key": "sex", "label": "性别", "value": "先生" },
            { "index": 5, "key": "reg_date", "label": "注册日期", "value": "2015-11-16" },
            { "index": 6, "key": "last_login", "label": "上次登录时间", "value": "2015-12-22 15:38:54" }
          ])
      })
    },
  },
  onLoad() {},
})
