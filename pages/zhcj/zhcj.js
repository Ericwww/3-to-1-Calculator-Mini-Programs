Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_1: ['------', '浙江工业大学', '杭州电子科技大学'],
    objectArray_1: [
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
      }

    ],
    index_1: 0,

    array_2: ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    objectArray_2: [
      {
        id: 0,
        name: '-'
      },
      {
        id: 1,
        name: '0'
      },
      {
        id: 2,
        name: '1'
      },
      {
        id: 3,
        name: '2'
      },
      {
        id: 4,
        name: '3'
      },
      {
        id: 5,
        name: '4'
      },
      {
        id: 6,
        name: '5'
      },
      {
        id: 7,
        name: '6'
      },
      {
        id: 8,
        name: '7'
      },
      {
        id: 9,
        name: '8'
      },
      {
        id: 10,
        name: '9'
      },
      {
        id: 11,
        name: '10'
      },
      {
        id: 12,
        name: '11'
      }

    ],
    index_2: 0,

    array_3: ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    objectArray_3: [
      {
        id: 0,
        name: '-'
      },
      {
        id: 1,
        name: '0'
      },
      {
        id: 2,
        name: '1'
      },
      {
        id: 3,
        name: '2'
      },
      {
        id: 4,
        name: '3'
      },
      {
        id: 5,
        name: '4'
      },
      {
        id: 6,
        name: '5'
      },
      {
        id: 7,
        name: '6'
      },
      {
        id: 8,
        name: '7'
      },
      {
        id: 9,
        name: '8'
      },
      {
        id: 10,
        name: '9'
      },
      {
        id: 11,
        name: '10'
      },
      {
        id: 12,
        name: '11'
      }

    ],
    index_3: 0,

    array_4: ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    objectArray_4: [
      {
        id: 0,
        name: '-'
      },
      {
        id: 1,
        name: '0'
      },
      {
        id: 2,
        name: '1'
      },
      {
        id: 3,
        name: '2'
      },
      {
        id: 4,
        name: '3'
      },
      {
        id: 5,
        name: '4'
      },
      {
        id: 6,
        name: '5'
      },
      {
        id: 7,
        name: '6'
      },
      {
        id: 8,
        name: '7'
      },
      {
        id: 9,
        name: '8'
      },
      {
        id: 10,
        name: '9'
      },
      {
        id: 11,
        name: '10'
      },
      {
        id: 12,
        name: '11'
      }

    ],
    index_4: 0,

    mscj: '',

    gkcj: '',

    score: '',


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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
      index_1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_2: e.detail.value
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_3: e.detail.value
    })
  },
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_4: e.detail.value
    })
  },
  bindInputText1: function (e) {
    console.log('input发送选择改变，携带值为', e.detail.value)
    this.setData({
      mscj: e.detail.value
    })
  },
  bindInputText2: function (e) {
    console.log('input发送选择改变，携带值为', e.detail.value)
    this.setData({
      gkcj: e.detail.value
    })
  },
  cal_zhcj: function (e) {
    var i = 0
    var zf = 7.5
    var college = this.data.index_1
    var a = this.data.index_2
    var b = this.data.index_3
    var c = this.data.index_4
    var ms = this.data.mscj
    var gk = this.data.gkcj
    var score
    if (college == 0) {
      wx.showToast({
        title: '请选择学校',
        icon: 'loading',
      })
      i++
    }
    if (a == 0 || b == 0 || c == 0) {
      wx.showToast({
        title: '请输入学考成绩',
        icon: 'loading',
      })
      i++
    }
    if (ms == '') {
      wx.showToast({
        title: '请输入面试成绩',
        icon: 'loading',
      })
      i++
    }
    if (gk == '') {
      wx.showToast({
        title: '请输入高考成绩',
        icon: 'loading',
      })
      i++
    }
    if (i == 0) {
      if (college == 2) {
        score = ((a - 1) * 15 + (b - 1) * 10 + (c - 1) * 5) / 1.5 * 0.15 + ms * 0.35 + gk / zf * 0.5
      }
      this.setData({
        score: score.toFixed(3)
      })
    }

  },
})