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
        this.setData({
            store:store.reverse(),
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
  onShareAppMessage: function () {
    return {
      title: "我在友好盲道地图上标记了一处盲道问题，你也快来加入我们吧",
      path: "/pages/map/map",
      imageUrl: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-pre.jpg?sign=d0236b01a9f4f1255d06109ef4a3fa91&t=1618313697",
    };
  },
  /**
   * 用户分享到朋友圈
   */
  onShareTimeline: function () {
    return {
      title: "我在友好盲道地图上标记了一处盲道问题，你也快来加入我们吧",
      path: "/pages/map/map",
      imageUrl: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-pre.jpg?sign=d0236b01a9f4f1255d06109ef4a3fa91&t=1618313697",
    };
  },

  tapImage: function (e) {
    wx.previewImage({
      urls: [e.currentTarget.dataset.url],
      current: e.currentTarget.dataset.url,
    });
  },
});