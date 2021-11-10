// app.js
App({
  onLaunch() {
    //获取扬歌插件
    this.globalData.ygPlugin = requirePlugin('yg-plugin');
    //初始化扬歌插件（参数为媒体id，必传，上线务必使用正式媒体id），返回值为boolean，表示是否初始化成功
    let initResult = this.globalData.ygPlugin.init(6165);
    //打印扬歌插件初始化结果（非必须）
    console.log('init plugin result: ' + initResult);
  },
  globalData: {
    //定义全局扬歌插件JS对象
    ygPlugin: {}
  }
})