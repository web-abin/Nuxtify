# SEO 相关

- 图片设置宽高，alt 属性
- 重要的页面都要单独设置 tdk（title、describe、keywords)
- 站内链接跳转不重要页面，例如关于我们、隐私政策等合理利用 rel="nofollow" 组织蜘蛛抓取信息
- 站外链接合理设置 rel="external"
- 合理使用 html 标签，html 标签语义化
- 设置 Canonical 规范化网址，例如: `<link rel="canonical" href="href="https://juejin.cn"/>`
- 网站根目录，即 public 目录下添加 sitemap 站点地图并提交收录。本脚手架使用@nuxt/seo 模块动态生成 sitemap 地图，详细可以看`public/sitemap.js`和`sever/api/sitemap.js`
- 网站根目录，即 public 目录下添加 robots 文件，阻止抓取不重要页面
