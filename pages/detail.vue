<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-sider width="400" >
    <a-list size="large" bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        {{ item }}
      </a-list-item>
      <!-- <div slot="header">
        Header
      </div>
      <div slot="footer">
        Footer
      </div> -->
    </a-list>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>小程序与普通网页开发的区别</a-layout-header>
        <a-layout-content style="min-height:500px;color:#000">
          <div v-html="content"></div>
        </a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>

  </div>
</template>
<script lang="ts">
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const content = `<div>小程序的主要开发语言是 JavaScript，网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应，而在小程序中，二者是分开的，分别运行在不同的线程中。网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。而如上文所述，小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的DOM API和BOM API。这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的。同时 JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的。
网页开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ浏览器等，在移动端需要面对Safari、Chrome以及 iOS、Android 系统中的各式 WebView 。而小程序开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具，小程序中三大运行环境也是有所区别的，如表1-1所示。
表1-1 小程序的运行环境

运行环境
逻辑层
渲染层
iOS 
JavaScriptCore 
WKWebView 
安卓 
V8 
chromium定制内核 
小程序开发者工具 
NWJS 
Chrome WebView 

网页开发者在开发网页的时候，只需要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。小程序的开发则有所不同，需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程方可完成。
小程序宿主环境

我们称微信客户端给小程序所提供的环境为宿主环境。小程序借助宿主环境提供的能力，可以完成许多普通网页无法完成的功能。
场景值

场景值用来描述用户进入小程序的路径。
由于Android系统限制，目前还无法获取到按 Home 键退出到桌面，然后从桌面再次进小程序的场景值，对于这种情况，会保留上一次的场景值。
开发者可以通过下列方式获取场景值：
* 对于小程序，可以在 App 的 onLaunch 和 onShow，或wx.getLaunchOptionsSync 中获取上述场景值。
* 对于小游戏，可以在 wx.getLaunchOptionsSync 和 wx.onShow 中获取上述场景值
注册小程序

每个小程序都需要在 app.js 中调用 App 方法注册小程序实例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。
整个小程序只有一个 App 实例，是全部页面共享的。开发者可以通过 getApp 方法获取到全局唯一的 App 实例，获取App上的数据或调用开发者注册在 App 上的函数。
// app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
// 监听小程序初始化
  },
  onShow (options) {
    // Do something when show.
//监听小程序启动或切前台
  },
  onHide () {
    // Do something when hide.
//监听小程序切后台
  },
  onError (msg) {
    console.log(msg)
//错误监听函数
  },
注册页面

对于小程序中的每个页面，都需要在页面对应的 js 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等。
简单的页面可以使用 Page() 进行构造。
代码示例：
//index.js
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // 页面创建时执行
  },
  onShow: function() {
    // 页面出现在前台时执行
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
  },
  onHide: function() {
    // 页面从前台变为后台时执行
  },
  onUnload: function() {
    // 页面销毁时执行
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
  },
  onReachBottom: function() {
    // 页面触底时执行
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
  },
  onPageScroll: function() {
    // 页面滚动时执行
  },
  onResize: function() {
    // 页面尺寸变化时执行
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 事件响应函数
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  // 自由数据
  customData: {
    hi: 'MINA'
  }
})
behaviors

behaviors 是用于组件间代码共享的特性，类似于一些编程语言中的 “mixins” 或 “traits”。
每个 behavior 可以包含一组属性、数据、生命周期函数和方法。组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。 每个组件可以引用多个 behavior ，behavior 也可以引用其它 behavior 。
页面可以引用 behaviors 。 behaviors 可以用来让多个页面有相同的数据字段和方法。
// my-behavior.js
module.exports = Behavior({
  data: {
    sharedText: 'This is a piece of data shared between pages.'
  },
  methods: {
    sharedMethod: function() {
      this.data.sharedText === 'This is a piece of data shared between pages.'
    }
  }
})
// page-a.js
var myBehavior = require('./my-behavior.js')
Page({
  behaviors: [myBehavior],
  onLoad: function() {
    this.data.sharedText === 'This is a piece of data shared between pages.'
  }
})
页面路由

在小程序中所有页面的路由全部由框架进行管理。

路由方式

对于路由的触发方式以及页面生命周期函数如下：

路由方式
触发时机
路由前页面
路由后页面
初始化 
小程序打开的第一个页面 

onLoad, onShow 
打开新页面 
调用 API wx.navigateTo

使用组件 <navigator open-type="navigateTo"/>
onHide 
onLoad, onShow 
页面重定向 
调用 API wx.redirectTo

使用组件 <navigator open-type="redirectTo"/>
onUnload 
onLoad, onShow 
页面返回 
调用 API wx.navigateBack

使用组件<navigator open-type="navigateBack">

用户按左上角返回按钮 
onUnload 
onShow 
Tab 切换 
调用 API wx.switchTab

使用组件 <navigator open-type="switchTab"/>

用户切换 Tab 

各种情况请参考下表 
重启动 
调用 API wx.reLaunch

使用组件 <navigator open-type="reLaunch"/>
onUnload 
onLoad, onShow 


Tips:
* navigateTo, redirectTo 只能打开非 tabBar 页面。
* switchTab 只能打开 tabBar 页面。
* reLaunch 可以打开任意页面。
* 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
* 调用页面路由带的参数可以在目标页面的onLoad中获取。
异步 API 返回 Promise

基础库 2.10.2 版本起，异步 API 支持 callback & promise 两种调用方式。当接口参数 Object 对象中不包含 success/fail/complete 时将默认返回 promise，否则仍按回调方式执行，无返回值。
注意事项

1. 部分接口如 downloadFile, request, uploadFile, connectSocket, createCamera（小游戏）本身就有返回值， 它们的 promisify 需要开发者自行封装。
2. 当没有回调参数时，异步接口返回 promise。此时若函数调用失败进入 fail 逻辑， 会报错提示 Uncaught (in promise)，开发者可通过 catch 来进行捕获。
3. wx.onUnhandledRejection 可以监听未处理的 Promise 拒绝事件。
4. 代码示例
5. 
// callback 形式调用
wx.chooseImage({
  success(res) {
    console.log('res:', res)
  }
})

// promise 形式调用
wx.chooseImage().then(res => console.log('res: ', res))
尺寸单位

设计稿是750的话，则1rpx=1px
@import "common.wxss";样式导入
小程序运行机制

前台/后台状态

小程序启动后，界面被展示给用户，此时小程序处于前台状态。
当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了后台状态，小程序还可以运行一小段时间。
当用户再次进入微信或再次打开小程序，小程序又会从后台进入前台。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被销毁，即完全终止运行。
小程序启动

这样，小程序启动可以分为两种情况，一种是冷启动，一种是热启动。
* 冷启动：如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。
* 热启动：如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。
小程序销毁时机

通常，只有当小程序进入后台一定时间，或者系统资源占用过高，才会被销毁。具体而言包括以下几种情形：
* 当小程序进入后台，可以维持一小段时间的运行状态，如果这段时间内都未进入前台，小程序会被销毁。
* 当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。
    * 在 iOS 上，当微信客户端在一定时间间隔内连续收到系统内存告警时，会根据一定的策略，主动销毁小程序，并提示用户 「运行内存不足，请重新打开该小程序」。具体策略会持续进行调整优化。
    * 建议小程序在必要时使用 wx.onMemoryWarning 监听内存告警事件，进行必要的内存清理。
小程序更新机制

未启动时更新

开发者在管理后台发布新版本的小程序之后，如果某个用户本地有小程序的历史版本，此时打开的可能还是旧版本。微信客户端会有若干个时机去检查本地缓存的小程序有没有更新版本，如果有则会静默更新到新版本。总的来说，开发者在后台发布新版本之后，无法立刻影响到所有现网用户，但最差情况下，也在发布之后 24 小时之内下发新版本信息到用户。用户下次打开时会先更新最新版本再打开。
启动时更新

小程序每次冷启动时，都会检查是否有更新版本，如果发现有新版本，将会异步下载新版本的代码包，并同时用客户端本地的包进行启动，即新版本的小程序需要等下一次冷启动才会应用上。
如果需要马上应用最新版本，可以使用 wx.getUpdateManager API 进行处理。
const updateManager = wx.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
})
使用分包

打包原则

* 声明 subpackages 后，将按 subpackages 配置路径进行打包，subpackages 配置路径外的目录将被打包到 app（主包） 中
* app（主包）也可以有自己的 pages（即最外层的 pages 字段）
* subpackage 的根目录不能是另外一个 subpackage 内的子目录
* tabBar 页面必须在 app（主包）内
引用原则

* packageA 无法 require packageB JS 文件，但可以 require app、自己 package 内的 JS 文件
* packageA 无法 import packageB 的 template，但可以 require app、自己 package 内的 template
* packageA 无法使用 packageB 的资源，但可以使用 app、自己 package 内的资源独立分包属于分包的一种。普通分包的所有限制都对独立分包有效。独立分包中插件、自定义组件的处理方式同普通分包。
* 此外，使用独立分包时要注意：
* 独立分包中不能依赖主包和其他分包中的内容，包括js文件、template、wxss、自定义组件、插件等。主包中的app.wxss对独立分包无效，应避免在独立分包页面中使用 app.wxss 中的样式；
* App 只能在主包内定义，独立分包中不能定义 App，会造成无法预期的行为；
* 独立分包中暂时不支持使用插件。
wx:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 input 中的输入内容，switch 的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。
wx:key 的值以两种形式提供
1. 字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
2. 保留关键字 *this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。
当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。
如不提供 wx:key，会报一个 warning， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。
form
使用内置 behaviors

对于 form 组件，目前可以自动识别下列内置 behaviors:
wx://form-field
wx://form-field-group
wx://form-field-button
使 form 组件可以识别到这个自定义组件内部的所有表单控件。 例如，页面的结构如下：
<form bindsubmit="submit">
  <custom-comp></custom-comp>
  <button form-type="submit">submit</button>
</form>
组件 custom-comp 自身结构如下：
<input name="name" />
<switch name="student" />
如果组件 custom-comp 配置有：
Component({
 behaviors: ['wx://form-field-group']
})
此时，表单的 submit 事件的 value 中将包含 name 和 student 两个字段。




下拉刷新方法：
1、enablePullDownRefresh 这个属性设置为true。就默认开启了下拉刷新。enablePullDownRefresh可以写在app.json 中 和页面的xxx.json，两者的区别是，app.json 是全局型的下拉刷新，而***.json 是单个页面的下拉刷新，只能设置window相关的配置项，以决定本页面的窗口表现，所以无需写window这个键。
2、另一种方法是，监听scroll-view,自定义下拉刷新，scroll-view里面有一个bindscrolltoupper属性，当滚动到顶部/左边，会触发 scrolltoupper 事件，所以我们可以利用这个属性，来实现下拉刷新功能。</div>`
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      data,
      content
    };
  },
})
</script>
<style lang="scss"  scoped>
  #components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #fff;
  /* color: #fff; */
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #fff;
  /* color: #fff; */
  line-height: 120px;
  border-right: 1px solid #e8e8e8;
}
#components-layout-demo-basic .ant-layout-content {
  background: #fff;
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
#components-layout-demo-basic .ant-layout-sider-children{
  border-right: 1px solid #e8e8e8;
}
.ant-list-bordered{
  border: none;
}
.ant-list-bordered .ant-list-item{
  border:none;
}
</style>