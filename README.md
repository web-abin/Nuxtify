# <img src="https://www.nuxtify.site/favicon.ico" alt="无标题-2024-02-23-1141.png"  width="20px"/> Nuxtify

> 最好的 nuxt3 脚手架 💯  
> 帮助你快速搭建 nuxt3 SSR 项目  
> 预览：[https://www.nuxtify.site](https://www.nuxtify.site)  
> 如果对你有帮助，请点个 ⭐ 支持一下，谢谢

## 特性

- 环境变量配置 runtimeConfig
- $fetch 请求封装，注册组合项 API: `useHttp`
- 状态管理 `pinia` + `pinia-plugin-persistedstate`持久化
- 插件初始化示例：神策`sensors`
- 原子化 css `unocss`
- 工具库 `lodash` `vueuse`
- 文档模块 `@nuxt/content`
- 代码风格 `eslint` `@antfu/eslint-config`
- 动画 `lottie-web`
- UI 库 arco `@arco-design/web-vue` + 自动引入 `unplugin-vue-components`
- 视频播放器 `DPlayer`
- GZIP 压缩 `vite-plugin-compression`
- 动态生成`sitemap`站点地图：`@nuxtjs/sitemap`

## 启动

```
yarn 或者 npm i

npm run dev
```

## 部署

执行 `npm run build` 编译打包，启动服务可以`直接 node 启动`或者用 `pm2 启动`：


### 1. node 启动

```
node .output/server/index.mjs
```

因为 package.json 配置了启动命令，所以也可以执行

```
npm run start
```

### 2. pm2 启动

安装 pm2  
根目录新建`ecosystem.config.cjs`

```
yarn global add pm2

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
pm2 启动配置文件

```
 pm2 start ecosystem.config.cjs

 // 重新启动
 pm2 restart ecosystem.config.cjs
```
