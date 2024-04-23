export default defineSitemapEventHandler(async (e) => {
  const res = await $fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    params: {
      _start: 1,
      _limit: 8
    }
  })

  return res.map((item) => {
    return {
      loc: 'post' + item.id,
      lastmod: new Date(),
      changefred: 'yearly',
      priority: 0.8
    }
  })
})
