export default defineNuxtPlugin({
  name: 'hello',
  enforce: 'pre', // or 'post'
  async setup(nuxtApp) {
    console.log('%c-----插件setup', 'color:red')
  },
  hooks: {
    // 您可以在此处直接注册Nuxt应用程序运行时挂钩
    'app:created'(app) {
      const nuxtApp = useNuxtApp()

      app.config.globalProperties.$helloAbin = () => {
        console.log('%c自定义全局钩子，Hello Abin!', 'color: blue')
      }

      nuxtApp.provide('helloWorld', () => {
        console.log('%c自定义全局钩子，Hello World!', 'color: blue')
      })
    },
    'page:finish'(Component) {
      console.log('%c插件【my-plugin】page:finish', 'color:orange')
    }
  },
  env: {
    // 设置为false时，插件只会在client-only组件渲染时运行
    islands: true
  }
})
