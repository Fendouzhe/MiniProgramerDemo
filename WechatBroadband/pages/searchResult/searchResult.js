Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      {
        id:'1',
        num:'282931282931282931',
        address:'广州天河区林和西路林和街道156号'
      }, {
        id: '2',
        num: '282931282931282932',
        address: '广州天河区林和西路林和街道157号'
      }, {
        id: '3',
        num: '282931282931282933',
        address: '广州天河区林和西路林和街道158号'
      }
    ]
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
  
  selectEvent:function(){
    wx.navigateTo({
      url: '../setmeal/setmeal',
    })
  }
})