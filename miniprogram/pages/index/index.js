// miniprogram/pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isNotShowIntroduction: true,
  },

  onCloseIntroduction() {
    console.log("关闭新手引导");
    try {
      wx.setStorageSync("isNotShowIntroduction", true);
    } catch (e) {}
    wx.navigateTo({
      url: "../map/map",
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    try {
      const res = wx.getStorageSync('isNotShowIntroduction');
      console.log("isNotShowIntroduction缓存内容", res);
      if (res) {
        console.log("不需要展示引导");
        wx.navigateTo({
          url: "../map/map",
        });
      } else {
        console.log("需要展示引导");
        this.setData({ isNotShowIntroduction: false });
      }
    } catch (e) {
      console.log("缓存不支持", e);
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
