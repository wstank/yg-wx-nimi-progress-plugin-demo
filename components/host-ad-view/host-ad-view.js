Component({

    properties: {
        //宿主广告类型
        hostAdType: {
            type: String
        },
        //宿主广告位id
        hostAdId: {
            type: String
        },
        //宿主扩展数据
        hostExtData: {
            type: Object
        }
    },

    methods: {
        //广告加载回调
        onAdLoad() {
            this.triggerEvent('adshow');
        },
        //广告错误回调
        onAdError(error) {
            this.triggerEvent('aderror', error);
        },
        //广告关闭回调
        onAdClose() {
            this.triggerEvent('adclose');
        }
    }
})