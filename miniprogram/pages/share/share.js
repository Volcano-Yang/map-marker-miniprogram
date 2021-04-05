const app = getApp();
const db = wx.cloud.database();
const store = db.collection("store");
const userInfo = db.collection("userInfo");

Page({
  data: {
    nickName: "",
    avatarUrl: "",
    isCanDraw: false,
    userId: 26,
    drawData: {},
  },
  onLoad() {
    this.setData({
      nickName: wx.getStorageSync("nickName") || "",
      avatarUrl: wx.getStorageSync("avatarUrl") || "",
    });

    this.handleDrawData();
  },

  handleDrawData: async function () {
    //查询分享次数
    const openId = wx.getStorageSync("openId");
    const shareTimeRes = await store
      .where({
        _openid: openId,
      })
      .count();
    console.log("查询分享次数", shareTimeRes);
    const shareTime = shareTimeRes.total;

    // 用户首次分享和非首次分享文案不同
    if (shareTime === 1) {
      // 查询用户编号
      const userIdRes = await userInfo.where({ _openid: openId }).get();
      console.log("该用户的编号", userIdRes.data);
      const userId = userIdRes.data[0].id;
      this.setData({
        drawData: {
          context1: "已成为",
          numberId: userId,
          context2: "位上传盲道问题的筑路",
          context3: "者，并获得了视障人士分享的视界",
          artImage:
            "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/poster/art.png?sign=732932151b7b452221a989d97a46f7ba&t=1616160915",
          artTitle: "《看与被看》",
          artContext1: "摄影师：傅高山 |",
          artContext2: "低视力",
        },
      });
    } else {
      this.setData({
        drawData: {
          context1: "已经第",
          numberId: shareTime,
          context2: "次上传盲道问题，并",
          context3: "获得了视障人士分享的视界",
          artImage:
            "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/poster/art.png?sign=732932151b7b452221a989d97a46f7ba&t=1616160915",
          artTitle: "《看与被看》",
          artContext1: "摄影师：傅高山 |",
          artContext2: "低视力",
        },
      });
    }
  },
  createShareImage: function () {
    this.setData({
      isCanDraw: !this.data.isCanDraw,
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
        "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-pre.jpg?sign=12f3587ba61b1d8d20c6fe77523514ec&t=1616382630",
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
        "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/share-pre.jpg?sign=12f3587ba61b1d8d20c6fe77523514ec&t=1616382630",
    };
  },
  /**
   * 修改返回上一页的路径
   */
  onUnload: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },
});
