Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_1:['------','浙江工业大学','杭州电子科技大学'],
    objectArray_1: [
      {
        id:0,
        name:'------'
      },
      {
        id:1,
        name: '浙江工业大学'
      },
      {
        id:2,
        name: '杭州电子科技大学'
      }

    ],
    index_1:0,

    array_2: ['0', '1', '2'],
    objectArray_2: [
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
      }

    ],
    index_2: 0,

    array_3: ['0', '1', '2'],
    objectArray_3: [
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
      }

    ],
    index_3: 0,

    array_4: ['0', '1', '2'],
    objectArray_4: [
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
      }

    ],
    index_4: 0,

    
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
  bindPickerChange_1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_1: e.detail.value
    })
  },
  bindPickerChange_2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_2: e.detail.value
    })
  },
  bindPickerChange_3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_3: e.detail.value
    })
  },
  bindPickerChange_4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index_4: e.detail.value
    })
  },
})