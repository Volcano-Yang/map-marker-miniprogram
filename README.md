# 地图标记小程序模板
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

地图标记小程序（map-markers-miniprogram）是一个借助腾讯地图map api给用户展示周边资源和允许用户自主上传添加标记的小程序模板。可以用它改造成新生校园导航、美食周边、AED地图、好房资源地图等地图小程序。希望我的代码对你有所帮助~

## 一、现有功能：

1. **基于地图和位置的查找周边标记**：小程序首页为地图， 可以查看地图中的标记资源或问题
2. **完整的搜索支持和列表功能**：用户除了可以在地图中滑动或缩放寻找标记，还可以直接查看标记列表或搜索标记点
3. **点击地图标记自动跳转详情页，查看更多信息，还可以导航前往标记点**
4. **支持用户自主上传标记**：支持让用户选择新增标记经纬度，自动填写地址，填写描述，选择分类，添加图片之后，新增标记点
5. **支持定义多种类型的标记，不同类型标记在地图中显示不同图标，并且支持统计不同类型标记的数量**
6. **丰富的分享功能**：支持分享给微信好友，分享到朋友圈，生成标记成功激励海报分享等多种分享功能
7. **展示用户的个人上传日志**
8. **支持小程序端管理标记点**：支持自动识别管理员，管理可以直接在小程序上对标记进行删除隐藏
9. **支持第一次进入小程序的用户查看功能引导页**
10. **添加到我的小程序提醒下**：在首页加入了「添加到我的小程序」的提醒，提醒用户收藏小程序。

## 二、特性

- 基于微信小程序地图实现
- 使用[小程序·云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)，无需编写后端代码
- 全移动端交互，数据管理无需再开电脑
- 独立配置项目，方便自行部署

## 三、功能截图

| 首页 | 上传页 | 上传成功页 |
| ---- |  ----| ----|
|![](http://qny.volcanoblog.cn/markdown/20210327222847.png) |![](http://qny.volcanoblog.cn/markdown/20210327222910-20210327222917352.png)| ![](http://qny.volcanoblog.cn/markdown/20210327221526.png) |
| 生成海报 | 用户上传日志 | 分享到微信 |
| ![](http://qny.volcanoblog.cn/markdown/20210327221709.png) |![](http://qny.volcanoblog.cn/markdown/20210327222936-20210327222945968.png)|![](http://qny.volcanoblog.cn/markdown/20210327221657.png)|

## 四、Demo 小程序

> 如果你希望自己的小程序展示在这里，欢迎pr或在issue中提出

| 友好盲道小程序 | 深圳美食图鉴 | **千岛湖民宿地图**|
| ---- |  ----| ----|
| ![](http://qny.volcanoblog.cn/markdown/gh_a140ade9386a_258-20210327220337422.jpg) |![小程序码](http://qny.volcanoblog.cn/markdown/gh_ab61838fb8b2_258.jpg)| ![](https://postimg.aliavv.com/201810/pw1cy.jpg)|
| **jooyi的美食地图** |  |                                                  |
| ![](http://qny.volcanoblog.cn/markdown/mw4c9.jpg) |||

## 开始使用
1. 请查看 [安装教程](https://github.com/CloudKits/miniprogram-foodmap/wiki/Install)
2. 请查看 [配置文件说明](https://github.com/CloudKits/miniprogram-foodmap/wiki/Settings)
3. 请查看 [依赖服务说明](https://github.com/CloudKits/miniprogram-foodmap/wiki/Service)
4. 请使用[vantui npm方式安装](https://vant-contrib.gitee.io/vant-weapp/#/quickstart)
5. 生成海报使用：[painter](https://github.com/Kujiale-Mobile/Painter) 


## 注意事项：

1. 基础库要>2.15.0才会在地图显示中心点标记
2. marker对象中的label不能是一个字符串 应该是一个对象 不然会在高版本基础库上真机不显示marker

## 致谢

>  在[miniprogram-foodmap](https://github.com/CloudKits/miniprogram-foodmap)的基础上进行开发，感谢优秀的成哥。

## FAQ

常见问题请参看 [FAQ](https://github.com/CloudKits/miniprogram-foodmap/wiki/FAQ)

## 贡献说明

欢迎您为项目提交 Pull Request；如果您在使用中有任何问题或有新的特性需求，请前往[ISSUE](https://github.com/CloudKits/miniprogram-foodmap/issues)提交新的 issue。

## 寻求帮助

您可以在 [支持社区](https://www.xieit.com/forum-51-1.html) 内发帖寻求帮助

## LICENSE

本项目基于 Apache License 2.0 开放源代码授权 

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://volcanoblog.cn"><img src="https://avatars.githubusercontent.com/u/43328103?v=4?s=100" width="100px;" alt=""/><br /><sub><b>杨灿就是杨火山</b></sub></a><br /><a href="#infra-Volcano-Yang" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#design-Volcano-Yang" title="Design">🎨</a> <a href="https://github.com/Volcano-Yang/map-marker-miniprogram/commits?author=Volcano-Yang" title="Code">💻</a></td>
    <td align="center"><a href="https://www.ixiqin.com/"><img src="https://avatars.githubusercontent.com/u/13283837?v=4?s=100" width="100px;" alt=""/><br /><sub><b>白宦成</b></sub></a><br /><a href="#ideas-bestony" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Volcano-Yang/map-marker-miniprogram/commits?author=bestony" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!