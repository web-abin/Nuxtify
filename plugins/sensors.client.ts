import sensors from 'sa-sdk-javascript'

export default defineNuxtPlugin((nuxtApp) => {
    const {
        public: { env, sensorsProject }
    } = useRuntimeConfig()

    sensors.init({
        server_url: 'https://xxxxxxxxx/sa?project=' + sensorsProject,
        is_track_single_page: true, // 单页面配置，默认开启，若页面中有锚点设计，需要将该配置删除，否则触发锚点会多触发 $pageview 事件
        use_client_time: true,
        show_log: env !== 'production', // 是否显示埋点输出
        send_type: 'ajax',
        heatmap: {
            //是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
            clickmap: 'not_collect',
            //是否开启触达图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
            scroll_notice_map: 'default'
        }
    })

    // 开启全埋点
    sensors.quick('autoTrack')
    // 注册公共属性
    sensors.registerPage({
        systemName: sensorsProject
    })

    let anonymousID
    sensors.quick('isReady', function () {
        anonymousID = sensors.quick('getAnonymousID')
        localStorage.setItem('anonymousID', anonymousID)
    })
    // 在app实例上提供hook
    return {
        provide: {
            sensors: sensors
        }
    }
})
