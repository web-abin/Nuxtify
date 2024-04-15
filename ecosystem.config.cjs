// nginx部署启动服务
module.exports = {
  apps: [
    {
      name: 'nuxtify',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
