# 插件

> Nuxt 自动读取目录中的文件 plugins/并在创建 Vue 应用程序时加载它们。可以在文件名中使用.server 或.client 后缀来设置仅在服务器或客户端加载插件。

## 一、本项目中的插件案例

-   **hello.client.ts** 全局方法
-   **player.client.ts**：播放器插件
-   **sensors.client.js** 神策埋点

## 二、创建插件

```
export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  // 如果你想在应用中为该插件注册钩子，可以使用 useNuxtApp() 的provide方法注册全局辅助函数
  nuxtApp.provide('helloWorld', () => {
    console.log('%c自定义全局钩子，Hello World!', 'color: blue')
  })
  // 或者：
  return {
    provide : {
      [全局方法名]: 辅助函数
    }
  }
})
```

或者直接使用对象语法定义插件，如下：

```
export default defineNuxtPlugin({
  name: 'my-plugin',
  enforce: 'pre', // or 'post'
  async setup (nuxtApp) {
    // do something
  },
  hooks: {
    // 这里可以在应用的不同生命周期内执行一些操作，例如插件的初始化
    'app:created'() {
      const nuxtApp = useNuxtApp()
      // 如果你想在应用中为该插件注册钩子，可以使用 useNuxtApp() 的provide方法注册全局辅助函数
      nuxtApp.provide('helloWorld', () => {
        console.log('%c自定义全局钩子，Hello World!', 'color: blue')
      })
    }
  },
  env: {
    // 设置为false时，插件只会在client-only组件渲染时运行
    islands: true
  }
})

```

还可以注册自定义指令等:

```
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted (el) {
      el.focus()
    },
    getSSRProps (binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    }
  })
})

```

## 三、插件注册顺序

可以在文件名中加上编号前缀来控制插件等注册顺序，例如：

```
plugins/
 | - 01.myPlugin.ts
 | - 02.myOtherPlugin.ts
```

**如果某些插件间存在依赖关系，某个插件需要等待另一个插件才能运行，可以在插件中设置 dependsOn，如下：**

```
export default defineNuxtPlugin({
  name: 'depends-on-my-plugin',
  dependsOn: ['my-plugin'],
  async setup (nuxtApp) {
    // this plugin will wait for the end of `my-plugin`'s execution before it runs
  }
})
```
