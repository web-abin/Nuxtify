# Nuxtify

## 特性

- $fetch 请求封装，注册组合项 API: useHttp
- 状态管理 `pinia` + `pinia-plugin-persistedstate`持久化
- 原子化 css `unocss`
- 工具库 `lodash` `vueuse`
- 代码风格 `eslint` `@antfu/eslint-config`
- 动画 `lottie-web`
- UI 库 arco `@arco-design/web-vue` + 自动引入 `unplugin-vue-components`
- 视频播放器 `DPlayer`
- GZIP 压缩 `vite-plugin-compression`

## 部署

执行 `npm run build` 编译打包，然后启动服务，可以直接 node 启动或者用 pm2 启动：

1. node 启动

```
node .output/server/index.mjs
```

因为 package.json 设置了启动命令，所以也可以执行

```
npm run start
```

2. pm2 启动

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
```
