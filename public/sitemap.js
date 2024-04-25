const sitemap = {
  autoLastmod: true,
  cacheMaxAgeSeconds: 3600, //缓存时间-1hour
  gzip: true,
  // generate: false,
  routes: async () => {
    //     // 静态路由
    let routes = [
      // 首页
      {
        url: `/`,
        changefred: 'yearly',
        lastmod: new Date(),
        priority: 1
      }
    ]
    return routes
  },
  sources: ['/api/sitemap'],
  exclude: ['/error', '/keepalived', '/user', '/detail'],
  // 自定义用户界面
  xslColumns: [
    { label: 'URL', width: '40%' },
    { label: 'Last Modified', select: 'sitemap:lastmod', width: '30%' },
    { label: 'Change Frequency', select: 'sitemap:changefreq', width: '15%' },
    { label: 'Priority', select: 'sitemap:priority', width: '15%' }
  ]
}
export default sitemap
