# Nuxt3

## 依赖

- Typescript
- 状态管理 `pinia` + `pinia-plugin-persistedstate`持久化
- 样式库 ~~`tailwindcss`~~ 切换为 unocss
- 工具库 `lodash` `vueuse`
- 代码风格 `eslint` `@antfu/eslint-config`
- 动画 `lottie-web`
- UI 库 arco `@arco-design/web-vue` + 自动引入 `unplugin-vue-components`
- 视频播放器 `DPlayer`
- GZIP 压缩 `vite-plugin-compression`

## 全局状态管理 pinia

`stores/user.store.ts`

示例使用 setup 语法. 持久化插件,默认使用 cookie,不然服务端使用 token 认证会出问题.

## api 封装

`composables/useHttp.ts`

简单封装 fetch,使用拦截器请求添加 token 认证,错误拦截处理,使用 hook 方式导出

⚠️nuxt3.10 之后直接使用 useFetch 封装会出现警告,建议使用$fetch 封装,useFetch 和 useAsyncData 只在 setup 顶层使用.
`[nuxt] [useFetch] Component is already mounted, please use $fetch instead. See https://nuxt.com/docs/getting-started/data-fetching`

## ArcoUI 库按需导入

注意：这种方法并不会处理用户在 script 中手动导入的组件，比如 Message 组件，用户仍需要手动导入组件对应的样式文件，例如 @arco-design/web-vue/es/message/style/css.js

手动导入的组件在 app.vue 里导入样式,已导入`message` `notification`

## 已知问题

- ~~设置页面切换动画之后,页面之间快速点击跳转页面报错,~~在 app.vue 里使用`composables/useFixApp.ts`hook 临时修复,~~ 在 plugins/router.ts 修复~~3.10 之后测试已经修复,删除 plugins/router.ts
- ~~⚠️ ArcoUI 组件库日期选择组件在 nuxt3 里面报错,目前无法解决.~~
- ~~示例里添加第三方日期选择组件临时替代~~

## 部署

```
 yarn global add pm2

 pm2 start ecosystem.config.cjs
```

```
// ~/ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '8866',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}

```


## pinia
https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html