//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js'); 
Page({
  data: {
    day:'',
    hour:'',
    minute:'',
    second:'',
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  Timer: function () {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let diff = Math.floor((new Date(1528333200000) - new Date()) / 1000);
    days = Math.floor(diff / 86400);
    diff = diff - days * 86400;
    hours = Math.floor(diff / 3600);
    diff = diff - hours * 3600;
    minutes = Math.floor(diff / 60);
    seconds = diff - minutes * 60;
    this.setData({
      day:days,
      hour:hours,
      minute:minutes,
      second:seconds,
    })
  },
  onReady:function(){
    this.Timer()
    this.interval = setInterval(this.Timer, 1000)
  },
  gkcj: function () {
    wx.navigateTo({
      url: '../gkcj/gkcj'
    })
  },
  zhcj: function () {
    wx.navigateTo({
      url: '../zhcj/zhcj'
    })
  }
})
