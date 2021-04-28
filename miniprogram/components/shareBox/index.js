Component({
  properties: {
    //属性值可以在组件使用时指定
    isCanDraw: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        newVal && this.drawPic();
      },
    },
    drawData: {
      type: Object,
      value: {},
    },
  },
  data: {
    isModal: false, //是否显示拒绝保存图片后的弹窗
    imgDraw: {}, //绘制图片的大对象
    sharePath: "", //生成的分享图
    visible: false,
  },
  methods: {
    handlePhotoSaved() {
      this.savePhoto(this.data.sharePath);
    },
    handleClose() {
      this.setData({
        visible: false,
      });
    },
    drawPic() {
      console.log("drawData", this.data.drawData);
      if (this.data.sharePath) {
        //如果已经绘制过了本地保存有图片不需要重新绘制
        this.setData({
          visible: true,
        });
        this.triggerEvent("initData");
        return;
      }
      wx.showLoading({
        title: "生成中",
      });
      if (this.data.drawData.context1 === "已经第") {
        let numberId = "";
        if (this.data.drawData.numberId <= 10) {
          numberId = " " + this.data.drawData.numberId
        } else {
          numberId = "" + this.data.drawData.numberId
        }
        console.log("numberId", numberId)
        // 下次这个画布宽度最好就按iphone6的750rpx定
        this.setData({
          imgDraw: {
            width: "1210rpx",
            height: "1830rpx",
            background: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/poster/poster.png?sign=8e64452badeadc8e80770a1b6bcf6a67&t=1616160878",
            views: [
              // 图画
              {
                type: "image",
                url: this.data.drawData.artImage,
                css: {
                  top: "680rpx",
                  left: "260rpx",
                  width: "674rpx",
                  height: "500rpx",
                  borderWidth: "20rpx",
                  borderColor: "#ffffff",
                  shadow: "10rpx 10rpx 5rpx #64afee",
                },
              },

              // 头像
              {
                type: "image",
                url: wx.getStorageSync("avatarUrl") ||
                  "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/default-avatar.png?sign=70bf172250d552f97216258faa41785c&t=1616315144",
                css: {
                  top: "80rpx",
                  left: "480rpx",
                  width: "254rpx",
                  height: "254rpx",
                  borderWidth: "3rpx",
                  borderColor: "#0063a9",
                  borderRadius: "127rpx",
                },
              },
              {
                type: "text",
                text: wx.getStorageSync("nickName") || "微信昵称获取失败",
                css: {
                  top: "360rpx",
                  left: "600rpx",
                  fontSize: "68rpx",
                  align: "center",
                  color: "black",
                  fontWeight: "bolder",
                },
              },
              {
                type: "text",
                text: this.data.drawData.context1,
                css: {
                  top: "500rpx",
                  left: "290rpx",
                  fontSize: "48rpx",
                  align: "left",
                  color: "black",
                  fontWeight: "normal",
                },
              },
              {
                type: "text",
                text: numberId,
                css: {
                  top: "500rpx",
                  left: "440rpx",
                  fontSize: "48rpx",
                  align: "left",
                  color: "#006de4",
                  fontWeight: "normal",
                },
              },
              {
                type: "text",
                text: this.data.drawData.context2,
                css: {
                  top: "500rpx",
                  left: "500rpx",
                  fontSize: "48rpx",
                  align: "left",
                  color: "black",
                  fontWeight: "normal",
                },
              },
              {
                type: "text",
                text: this.data.drawData.context3,
                css: {
                  top: "570rpx",
                  left: "605rpx",
                  fontSize: "48rpx",
                  align: "center",
                  color: "black",
                  fontWeight: "normal",
                },
              },

              // 二维码
              {
                type: "image",
                url: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/qr-code2.jpg?sign=e9272e95a564b5b62bd327f02c7be7a1&t=1618475799",
                css: {
                  bottom: "80rpx",
                  left: "180rpx",
                  width: "220rpx",
                  height: "220rpx",
                  borderRadius: "110rpx",
                },
              },

              {
                type: "text",
                text: this.data.drawData.artTitle,
                css: {
                  bottom: "540rpx",
                  left: "605rpx",
                  fontSize: "50rpx",
                  align: "center",
                  color: "black",
                  fontWeight: "normal",
                },
              },

              {
                type: "text",
                text: this.data.drawData.artContext1,
                css: {
                  bottom: "470rpx",
                  left: "340rpx",
                  fontSize: "50rpx",
                  align: "left",
                  color: "black",
                  fontWeight: "normal",
                },
              },

              {
                type: "text",
                text: this.data.drawData.artContext2,
                css: {
                  bottom: "470rpx",
                  left: "730rpx",
                  fontSize: "50rpx",
                  align: "left",
                  color: "#006de4",
                  fontWeight: "normal",
                },
              },
            ],
          },
        });
      } else {
        // let numberId = "";
        // if (this.data.drawData.numberId <= 10) {
        //   numberId = " " + this.data.drawData.numberId
        // } else {
        //   numberId = "" + this.data.drawData.numberId
        // }
        // console.log("numberId", numberId)
        this.setData({
          imgDraw: {
            width: "1210rpx",
            height: "1830rpx",
            background: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/poster/poster.png?sign=8e64452badeadc8e80770a1b6bcf6a67&t=1616160878",
            views: [
              // 图画
              {
                type: "image",
                url: this.data.drawData.artImage,
                css: {
                  top: "680rpx",
                  left: "260rpx",
                  width: "674rpx",
                  height: "500rpx",
                  borderWidth: "20rpx",
                  borderColor: "#ffffff",
                  shadow: "10rpx 10rpx 5rpx #64afee",
                },
              },

              // 头像
              {
                type: "image",
                url: wx.getStorageSync("avatarUrl") ||
                  "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/default-avatar.png?sign=70bf172250d552f97216258faa41785c&t=1616315144",
                css: {
                  top: "80rpx",
                  left: "480rpx",
                  width: "254rpx",
                  height: "254rpx",
                  borderWidth: "3rpx",
                  borderColor: "#0063a9",
                  borderRadius: "127rpx",
                },
              },
              {
                type: "text",
                text: wx.getStorageSync("nickName") || "微信昵称获取失败",
                css: {
                  top: "360rpx",
                  left: "600rpx",
                  fontSize: "68rpx",
                  align: "center",
                  color: "black",
                  fontWeight: "bolder",
                },
              },
              {
                type: "text",
                text: this.data.drawData.context1,
                css: {
                  top: "500rpx",
                  left: "245rpx",
                  fontSize: "48rpx",
                  align: "left",
                  color: "black",
                  fontWeight: "normal",
                },
              },
              {
                type: "text",
                text: "" + this.data.drawData.numberId,
                css: {
                  top: "500rpx",
                  left: "470rpx",
                  fontSize: "48rpx",
                  align: "center",
                  color: "#006de4",
                  fontWeight: "normal",
                },
              },
              {
                type: "text",
                text: this.data.drawData.context2,
                css: {
                  top: "500rpx",
                  left: "500rpx",
                  fontSize: "48rpx",
                  align: "left",
                  color: "black",
                  fontWeight: "normal",
                },
              },
              {
                type: "text",
                text: this.data.drawData.context3,
                css: {
                  top: "570rpx",
                  left: "605rpx",
                  fontSize: "48rpx",
                  align: "center",
                  color: "black",
                  fontWeight: "normal",
                },
              },

              // 二维码
              {
                type: "image",
                url: "https://6d61-map-4g0ciu1x80002ab0-1305236624.tcb.qcloud.la/share/qr-code2.jpg?sign=e9272e95a564b5b62bd327f02c7be7a1&t=1618475799",
                css: {
                  bottom: "80rpx",
                  left: "180rpx",
                  width: "220rpx",
                  height: "220rpx",
                  borderRadius: "110rpx",
                },
              },

              {
                type: "text",
                text: this.data.drawData.artTitle,
                css: {
                  bottom: "540rpx",
                  left: "605rpx",
                  fontSize: "50rpx",
                  align: "center",
                  color: "black",
                  fontWeight: "normal",
                },
              },

              {
                type: "text",
                text: this.data.drawData.artContext1,
                css: {
                  bottom: "470rpx",
                  left: "340rpx",
                  fontSize: "50rpx",
                  align: "left",
                  color: "black",
                  fontWeight: "normal",
                },
              },

              {
                type: "text",
                text: this.data.drawData.artContext2,
                css: {
                  bottom: "470rpx",
                  left: "730rpx",
                  fontSize: "50rpx",
                  align: "left",
                  color: "#006de4",
                  fontWeight: "normal",
                },
              },
            ],
          },
        });
      }
    },
    onImgErr(e) {
      wx.hideLoading();
      wx.showToast({
        title: "生成分享图失败，请刷新页面重试",
      });
    },
    onImgOK(e) {
      wx.hideLoading();
      this.setData({
        sharePath: e.detail.path,
        visible: true,
      });
      //通知外部绘制完成，重置isCanDraw为false
      this.triggerEvent("initData");
    },
    preventDefault() {},
    // 保存图片
    savePhoto(path) {
      wx.showLoading({
        title: "正在保存...",
        mask: true,
      });
      this.setData({
        isDrawImage: false,
      });
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success: (res) => {
          wx.showToast({
            title: "图片已保存到相册，快去朋友圈分享吧",
            icon: "none",
          });
          setTimeout(() => {
            this.setData({
              visible: false,
            });
          }, 300);
        },
        fail: (res) => {
          wx.getSetting({
            success: (res) => {
              let authSetting = res.authSetting;
              if (!authSetting["scope.writePhotosAlbum"]) {
                this.setData({
                  isModal: true,
                });
              }
            },
          });
          setTimeout(() => {
            wx.hideLoading();
            this.setData({
              visible: false,
            });
          }, 300);
        },
      });
    },
  },
});