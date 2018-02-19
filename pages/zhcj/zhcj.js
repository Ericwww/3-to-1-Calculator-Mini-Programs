Page({

  /**
   * 页面的初始数据
   */
  data: {
    school: [
      '------',
      '浙江工业大学',
      '杭州电子科技大学',
      '宁波大学',
      '温州医科大学',
      '浙江工商大学',
      '浙江师范大学',
      '浙江中医药大学',
      '中国计量大学',
      '中国美术学院(实践类)',
      '中国美术学院(非实践类)',
      '杭州师范大学(非电子商务)',
      '杭州师范大学(电子商务)',
      '杭州师范大学钱江学院',
      '嘉兴学院',
      '丽水学院',
      '宁波大学科学技术学院',
      '宁波诺丁汉大学',
      '衢州学院',
      '上海财经大学浙江学院',
      '绍兴文理学院',
      '绍兴文理学院元培学院',
      '同济大学浙江学院',
      '温州大学瓯江学院',
      '温州肯恩大学',
      '温州商学院',
      '浙江财经大学',
      '浙江财经大学东方学院',
      '浙江工业大学之江学院',
      '浙江海洋大学',
      '浙江科技学院(普通类)',
      '浙江科技学院(艺术类)',
      '浙江农林大学',
      '浙江树人大学',
      '浙江外国语学院',
      '浙江万里学院',
      '浙江音乐学院',
      '浙江越秀外国语学院',
      '浙江中医药大学滨江学院',
      '中国计量学院现代科技学院',
      '杭州医学院',
      '湖州师范学院',
      '宁波大红鹰学院',
      '台州学院',
      '温州大学',
      '温州医科大学仁济学院'

    ],
    schoolArray: [
      {
        id: 0,
        name: '------'
      },
      {
        id: 1,
        name: '浙江工业大学'
      },
      {
        id: 2,
        name: '杭州电子科技大学'
      },
      {
        id: 3,
        name: '宁波大学'
      },
      {
        id: 4,
        name: '温州医科大学'
      },
      {
        id: 5,
        name: '浙江工商大学'
      },
      {
        id: 6,
        name: '浙江师范大学'
      },
      {
        id: 7,
        name: '浙江中医药大学'
      },
      {
        id: 8,
        name: '中国计量大学'
      },
      {
        id: 9,
        name: '中国美术学院(实践类)'
      },
      {
        id: 10,
        name: '中国美术学院(非实践类)'
      },
      {
        id: 11,
        name: '杭州师范大学(非电子商务)'
      },
      {
        id: 12,
        name: '杭州师范大学(电子商务)'
      },
      {
        id: 13,
        name: '杭州师范大学钱江学院'
      },
      {
        id: 14,
        name: '嘉兴学院'
      },
      {
        id: 15,
        name: '丽水学院'
      },
      {
        id: 16,
        name: '宁波大学科学技术学院'
      },
      {
        id: 17,
        name: '宁波诺丁汉大学'
      },
      {
        id: 18,
        name: '衢州学院'
      },
      {
        id: 19,
        name: '上海财经大学浙江学院'
      },
      {
        id: 20,
        name: '绍兴文理学院'
      },
      {
        id: 21,
        name: '绍兴文理学院元培学院'
      },
      {
        id: 22,
        name: '同济大学浙江学院'
      },
      {
        id: 23,
        name: '温州大学瓯江学院'
      },
      {
        id: 24,
        name: '温州肯恩大学'
      },
      {
        id: 25,
        name: '温州商学院'
      },
      {
        id: 26,
        name: '浙江财经大学'
      },
      {
        id: 27,
        name: '浙江财经大学东方学院'
      },
      {
        id: 28,
        name: '浙江工业大学之江学院'
      },
      {
        id: 29,
        name: '浙江海洋大学'
      },
      {
        id: 30,
        name: '浙江科技学院(普通类)'
      },
      {
        id: 31,
        name: '浙江科技学院(艺术类)'
      },
      {
        id: 32,
        name: '浙江农林大学'
      },
      {
        id: 33,
        name: '浙江树人大学'
      },
      {
        id: 34,
        name: '浙江外国语学院'
      },
      {
        id: 35,
        name: '浙江万里学院'
      },
      {
        id: 36,
        name: '浙江音乐学院'
      },
      {
        id: 37,
        name: '浙江越秀外国语学院'
      },
      {
        id: 38,
        name: '浙江中医药大学滨江学院'
      },
      {
        id: 39,
        name: '中国计量学院现代科技学院'
      },
      {
        id: 40,
        name: '杭州医学院'
      },
      {
        id: 41,
        name: '湖州师范学院'
      },
      {
        id: 42,
        name: '宁波大红鹰学院'
      },
      {
        id: 43,
        name: '台州学院'
      },
      {
        id: 44,
        name: '温州大学'
      },
      {
        id: 45,
        name: '温州医科大学仁济学院'
      }

    ],
    schoolIndex: 0,

    xkcjIsA: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    xkcjIsAArray: [
      {
        id: 0,
        name: '0'
      },
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 7,
        name: '7'
      },
      {
        id: 8,
        name: '8'
      },
      {
        id: 9,
        name: '9'
      },
      {
        id: 10,
        name: '10'
      }
    ],
    xkcjIsAIndex: 0,

    xkcjIsB: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    xkcjIsBArray: [
      {
        id: 0,
        name: '0'
      },
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 7,
        name: '7'
      },
      {
        id: 8,
        name: '8'
      },
      {
        id: 9,
        name: '9'
      },
      {
        id: 10,
        name: '10'
      }

    ],
    xkcjIsBIndex: 0,

    xkcjIsC: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    xkcjIsCArray: [
      {
        id: 0,
        name: '0'
      },
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 7,
        name: '7'
      },
      {
        id: 8,
        name: '8'
      },
      {
        id: 9,
        name: '9'
      },
      {
        id: 10,
        name: '10'
      }

    ],
    xkcjIsCIndex: 0,

    xkcjIsD: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    xkcjIsDArray: [
      {
        id: 0,
        name: '0'
      },
      {
        id: 1,
        name: '1'
      },
      {
        id: 2,
        name: '2'
      },
      {
        id: 3,
        name: '3'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 5,
        name: '5'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 7,
        name: '7'
      },
      {
        id: 8,
        name: '8'
      },
      {
        id: 9,
        name: '9'
      },
      {
        id: 10,
        name: '10'
      }

    ],
    xkcjIsDIndex: 0,

    mscj: '',

    gkcj: '',

    score: '',

    bkxxBool: true,

    mscjBool: true,

    gkcjBool: true,

    bool_score: false,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


  /**
   * 生命周期函数--监听页面显示
   */

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      schoolIndex: e.detail.value,
      bkxxBool: false
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      xkcjIsAIndex: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      xkcjIsBIndex: e.detail.value
    })
  },
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      xkcjIsCIndex: e.detail.value
    })
  },
  bindPickerChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      xkcjIsDIndex: e.detail.value
    })
  },
  bindInputText1: function (e) {
    console.log('input发送选择改变，携带值为', e.detail.value)
    this.setData({
      mscj: e.detail.value,
      mscjBool: false
    })
  },
  bindInputText2: function (e) {
    console.log('input发送选择改变，携带值为', e.detail.value)
    this.setData({
      gkcj: e.detail.value,
      gkcjBool: false
    })
  },

  calZhScore: function (e) {
    var i = 0
    var zf = 7.5
    var college = this.data.schoolIndex
    var a = this.data.xkcjIsAIndex
    var b = this.data.xkcjIsBIndex
    var c = this.data.xkcjIsCIndex
    var d = this.data.xkcjIsDIndex
    var ms = this.data.mscj
    var gk = this.data.gkcj
    var xk
    var score


    if (college == 1) {//浙江工业大学
      score = (50 + a * 5 + b * 2) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 2) {//杭州电子科技大学
      score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 3) {//宁波大学
      score = (50 + a * 5) * 0.15 + ms * 0.3 + gk / zf * 0.55
    }
    if (college == 4) {//温州医科大学
      score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 5) {//浙江工商大学
      score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 6) {//浙江师范大学
      score = (a * 10 + b * 8 + c * 4) * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 7) {//浙江中医药大学
      score = (a * 10 + b * 7 + c * 4) * 0.15 + ms * 0.3 + gk / zf * 0.55
    }
    if (college == 8) {//中国计量大学
      score = (a * 10 + b * 9 + c * 8 + d * 7) * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 9) {//中国美术学院实践类
      score = (30 + a * 10 + b * 5) * 0.1 + ms * 0.6 + gk / zf * 0.3
    }
    if (college == 10) {//中国美术学院 艺术理论 工业设计
      score = (30 + a * 10 + b * 5) * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 11) {//杭州师范大学(非电子商务)
      score = (a * 10 + b * 5 + c * 2) * 0.1 + ms * 0.3 + gk / zf * 0.6
    }
    if (college == 12) {//杭州师范大学(电子商务)
      score = (a * 10 + b * 5 + c * 2) * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 13) {//杭州师范大学钱江学院
      score = (a * 10 + b * 7 + c * 5) * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 14) {//嘉兴学院
      score = (a * 10 + b * 7 + c * 4) * 0.15 + ms * 0.3 + gk / zf * 0.55
    }
    if (college == 15) {//丽水学院
      score = (a * 10 + b * 7 + c * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 16) {//宁波大学科学技术学院
      score = (a * 10 + b * 7 + c * 3) * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 17) {//宁波诺丁汉大学
      score = (50 + a * 5) * 0.1 + ms * 0.3 + gk / zf * 0.6
    }
    if (college == 18) {//衢州学院
      score = (a * 10 + b * 7 + c * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 19) {//上海财经大学浙江学院
      score = (a * 10 + b * 6 + c * 2) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 20) {//绍兴文理学院
      score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 21) {//绍兴文理学院元培学院
      score = (a * 10 + b * 8 + c * 7 + d * 6) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 22) {//同济大学浙江学院
      score = (a * 10 + b * 5 + c * 3) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 23) {//温州大学瓯江学院
      score = (a * 10 + b * 6 + c * 3) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 24) {//温州肯恩大学
      score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 25) {//温州商学院
      xk = a * 15 + b * 11 + c * 7 + d * 3
      if (xk > 100) {
        xk = 100
      }
      score = xk * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 26) {//浙江财经大学
      score = (a * 15 + b * 9 + c * 3) / 1.5 * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 27) {//浙江财经大学东方学院
      score = (a * 10 + b * 8 + c * 5 + d * 2) * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 28) {//浙江工业大学之江学院
      score = (a * 10 + b * 5 + c * 2) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 29) {//浙江海洋大学
      score = (a * 10 + b * 7 + c * 4) * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 30) {//浙江科技学院(普通类)
      score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 31) {//浙江科技学院(艺术类)
      score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 32) {//浙江农林大学
      score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 33) {//浙江树人大学
      score = (a * 10 + b * 7 + c * 3 + d * 1) * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 34) {//浙江外国语学院
      score = (a * 10 + b * 6 + c * 2) * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 35) {//浙江万里学院
      xk = a * 12 + b * 9 + c * 6 + d * 4
      if (xk > 100) {
        xk = 100
      }
      score = xk * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 36) {//浙江音乐学院
      score = (a * 10 + b * 9 + c * 7 + d * 4) * 0.1 + ms * 0.6 + gk / zf * 0.3
    }
    if (college == 37) {//浙江越秀外国语学院
      score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 38) {//浙江中医药大学滨江学院
      score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.15 + ms * 0.3 + gk / zf * 0.55
    }
    if (college == 39) {//中国计量学院现代科技学院
      score = (a * 10 + b * 9 + c * 8 + d * 7) * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 40) {//杭州医学院
      score = (a * 10 + b * 7 + c * 3) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 41) {//湖州师范学院
      score = (a * 15 + b * 9 + c * 3) / 1.5 * 0.2 + ms * 0.3 + gk / zf * 0.5
    }
    if (college == 42) {//宁波大红鹰学院
      xk = a * 12 + b * 8 + c * 4 + d * 2
      if (xk > 100) {
        xk = 100
      }
      score = xk * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 43) {//台州学院
      score = (a * 10 + b * 8 + c * 6 + d * 4) * 0.1 + ms * 0.4 + gk / zf * 0.5
    }
    if (college == 44) {//温州大学
      score = (a * 15 + b * 10 + c * 5) / 1.5 * 0.15 + ms * 0.35 + gk / zf * 0.5
    }
    if (college == 44) {//温州医科大学仁济学院
      score = (a * 10 + b * 5) * 0.2 + ms * 0.3 + gk / zf * 0.5
    }

    this.setData({
      score: score.toFixed(3),
      scoreBool: true
    })


  },
})