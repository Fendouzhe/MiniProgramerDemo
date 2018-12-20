Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: '1',
        name: '宽带续费',
        icon: '../../image/xufei.png',
        url: '../renew/renew'
      }, {
        id: '2',
        name: '我的订单',
        icon: '../../image/dingdan.png',
        url: '../order/order'
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

  kindToggle:function(param){
    console.log(param);
    const list = this.data.list;
    var model = list[0];
    for (let i = 0; i < list.length; i++) {
      if (param.id === list[i].id) {
        model = list[i];
      }
    }
    console.log(model.url);
    wx.navigateTo({
      url: '../renew/renew'
    })
  }
})