const db = wx.cloud.database();
const store = db.collection("store");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isEmpty: true,
    store: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const openId = wx.getStorageSync("openId");
    store
      .where({
        _openid: openId,
      })
      .get()
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // 处理数据日期 和 添加id
        this.setData(
          {
            store: res.data,
          },
          (res) => {
            console.log("设置数据成功");
            if (this.data.store.length > 0) {
              this.setData({
                isEmpty: false,
              });
            }
          }
        );
      });
  },

  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  tapImage: function (e) {
    wx.previewImage({
      urls: this.data.store.images,
      current: e.currentTarget.dataset.url,
    });
  },
});
