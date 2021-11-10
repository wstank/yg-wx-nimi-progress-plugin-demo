Page({
  data: {
    //设置扩展数据
    ygExtData: {
      //小程序图标地址（网络地址）
      appIcon: 'https://img0.baidu.com/it/u=157449498,3253226716&fm=26&fmt=auto',
      // 小程序名称
      appName: '测试小程序',
      //广告（banner、原生模板）自动刷新间隔时间（秒，不设置或小于等于0s表示不自动刷新，大于0s表示具体间隔时间，但最小刷新时间不低于30s）
      adDuration: 0,
      //视频广告主题样式：提供黑白两种主题样式，取值white, black
      videoAdTheme: 'white'
    },

    //是否展示插屏广告
    showInterstitialAd: false,

    //是否展示激励视频广告
    showRewardVideoAd: false
  },
  onLoad() {

  },

  /**
   * 请求插屏广告
   */
  requestInterstitialAd() {
    this.setData({
      showInterstitialAd: true
    });
  },

  /**
   * 请求激励视频广告
   */
  requestRewardVideoAd() {
    this.setData({
      showRewardVideoAd: true
    });
  },

  onAdLoad(event) {
    console.log('------------------ on ad[' + event.detail.adId + '] load ---------------------');
  },

  onAdShow(event) {
    console.log('------------------ on ad[' + event.detail.adId + '] show ---------------------');
  },

  onAdClick(event) {
    console.log('------------------ on ad[' + event.detail.adId + '] click ---------------------');
  },

  onAdClose(event) {
    console.log('------------------ on ad[' + event.detail.adId + '] close ---------------------' + JSON.stringify(event.detail));
  },

  onAdError(event) {
    console.log('------------------ on ad[' + event.detail.adId + '] error --------------------->' + JSON.stringify(event.detail));
  }

})