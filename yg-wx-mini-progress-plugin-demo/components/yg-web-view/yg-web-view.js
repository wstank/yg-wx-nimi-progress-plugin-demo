//自定义控件
Component({

    properties: {
        //加载地址
        url: {
            type: String
        }
    },

    data: {

    },

    methods: {

        /**
         * 网页加载错误
         * @param {Object} error 错误信息
         */
        loadError(error) {
            getApp().globalData.shPlugin.reportError('load-ad-page', 'load page[' + this.properties.url + '] error:' + error.detail.errMsg);
        },
    }
})