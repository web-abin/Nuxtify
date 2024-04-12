// nginx部署启动服务
module.exports = {
  apps: [
    {
      name: 'xmate',
      port: '6886',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
