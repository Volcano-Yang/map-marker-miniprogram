const app = getApp();

Page({
  data: {
    nickName: "",
    avatarUrl: "",
    isCanDraw: false,
  },
  onLoad() {
    this.setData({
      nickName: wx.getStorageSync("nickName") || "",
      avatarUrl: wx.getStorageSync("avatarUrl") || "",
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
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:
        "我在友好盲道地图上标记了一处盲道问题，你也快来加入我们吧",
      path: "/pages/map/map",
      imageUrl: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-page.png?sign=223a2ca14ca43b18e594062abb8c45fd&t=1616241279",
    };
  },
  /**
   * 用户分享到朋友圈
   */
  onShareTimeline: function () {
    return {
      title:
        "我在友好盲道地图上标记了一处盲道问题，你也快来加入我们吧",
      path: "/pages/map/map",
      imageUrl: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-page.png?sign=223a2ca14ca43b18e594062abb8c45fd&t=1616241279",
    };
  },
});
