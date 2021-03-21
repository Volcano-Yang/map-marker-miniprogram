const app = getApp();
const db = wx.cloud.database();
const store = db.collection("store");
const userInfo = db.collection("userInfo");

Page({
  data: {
    nickName: "",
    avatarUrl: "",
    isCanDraw: false,
    shareTime: 1,
    userId: 26,
  },
  onLoad() {
    this.setData({
      nickName: wx.getStorageSync("nickName") || "",
      avatarUrl: wx.getStorageSync("avatarUrl") || "",
    });

    const openId = wx.getStorageSync("openId");
    store
      .where({
        _openid: openId,
      })
      .count()
      .then((res) => {
        console.log("查询分享次数", res);
        this.setData({
          shareTime: res.total,
        });
      });

    // 查询用户编号
    userInfo
      .where({ _openid: openId })
      .get()
      .then((res) => {
        console.log("该用户的编号", res.data);
        this.setData({
          userId: res.data[0].id,
        });
      });
  },

  getUserInfo(e) {
    this.setData({
      nickName: e.detail.userInfo.nickName,
      avatarUrl: e.detail.userInfo.avatarUrl,
    });
    wx.setStorageSync("avatarUrl", e.detail.userInfo.avatarUrl);
    wx.setStorageSync("nickName", e.detail.userInfo.nickName);
  },
  createShareImage() {
    this.setData({
      isCanDraw: !this.data.isCanDraw,
    });
    this.setData({
      nickName: wx.getStorageSync("nickName") || "",
      avatarUrl: wx.getStorageSync("avatarUrl") || "",
    });

    const openId = wx.getStorageSync("openId");
    store
      .where({
        _openid: openId,
      })
      .count()
      .then((res) => {
        console.log("查询分享次数", res);
        this.setData({
          shareTime: res.total,
        });
      });

    // 查询用户编号
    userInfo
      .where({ _openid: openId })
      .get()
      .then((res) => {
        console.log("该用户的编号", res.data[0].id);
        this.setData({
          userId: res.data[0].id,
        });
      });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "我在友好盲道地图上标记了一处盲道问题，你也快来加入我们吧",
      path: "/pages/map/map",
      imageUrl:
        "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-wechat.jpg?sign=b07d35d5d9222ff5214cbb43b11af24b&t=1616241760",
    };
  },
  /**
   * 用户分享到朋友圈
   */
  onShareTimeline: function () {
    return {
      title: "我在友好盲道地图上标记了一处盲道问题，你也快来加入我们吧",
      path: "/pages/map/map",
      imageUrl:
        "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-wechat.jpg?sign=b07d35d5d9222ff5214cbb43b11af24b&t=1616241760",
    };
  },
});
