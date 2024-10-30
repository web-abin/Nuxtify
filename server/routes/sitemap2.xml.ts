// server/routes/sitemap.xml.ts
export default defineEventHandler(async (event) => {
    const res = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        params: {
            _start: 1,
            _limit: 10
        }
    })
    let arr = []
    if (!!res?.length) {
        let date = new Date()
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDay()
        let lastmod = `${y}-${m >= 10 ? m : '0' + m}-${d >= 10 ? d : '0' + d}`
        const changefreq = 'monthly' // 更新频率  always hourly daily weekly monthly yearly never
        const priority = 0.8
        arr = res.map((item: any) => {
            const loc = `/detail/${item.id}`
            return `
              <url>
                <loc>https://taptale.ai${loc}</loc>
                <lastmod>${lastmod}</lastmod>
                <changefreq>${changefreq}</changefreq>
                <priority>${priority}</priority>
              </url>
            `
        })
    }

    const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://example.com/</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://example.com/about</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.80</priority>
      </url>
      ${arr.join('\n')}
    </urlset>
  `

    event.node.res.setHeader('Content-Type', 'application/xml')
    return sitemap
})
