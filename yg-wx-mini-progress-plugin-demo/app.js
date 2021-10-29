// app.js
App({
  onLaunch() {
    //获取插件
    this.globalData.shPlugin = requirePlugin('yg-plugin');
    //初始化插件（参数为媒体id，必传，上线务必使用正式媒体id），返回值为boolean，表示是否初始化成功
    let initResut = this.globalData.shPlugin.init(6165);
    console.log('init plugin resut: ' + initResut);
  },
  globalData: {
    //插件对象
    shPlugin: {}
  }
})