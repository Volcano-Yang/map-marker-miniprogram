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
    // try {
    //   const res = wx.getStorageSync('isNotShowIntroduction');
    //   console.log("isNotShowIntroduction缓存内容", res);
    //   if (res) {
    //     console.log("不需要展示引导");
    //     wx.navigateTo({
    //       url: "../map/map",
    //     });
    //   } else {
    //     console.log("需要展示引导");
    //     this.setData({ isNotShowIntroduction: false });
    //   }
    // } catch (e) {
    //   console.log("缓存不支持", e);
    // }
  },
});
