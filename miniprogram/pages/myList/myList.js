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
        const store = res.data.map((item, index) => {
          if (item.createTime) {
            item.date = `${item.createTime.getFullYear()}年${
              item.createTime.getMonth() + 1
            }月${item.createTime.getDate()}日`;
          }
          item.id = index;
          return item;
        });
        console.log(res.data);
        // 处理数据日期 和 添加id
        this.setData(
          {
            store,
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
