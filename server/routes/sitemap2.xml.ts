// server/routes/sitemap.xml.ts
export default defineEventHandler((event) => {
  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://example.com/</loc>
        <lastmod>2024-01-01</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://example.com/about</loc>
        <lastmod>2024-01-01</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>
  `

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})
