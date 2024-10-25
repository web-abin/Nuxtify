export default defineSitemapEventHandler(async (e) => {
    const res = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        params: {
            _start: 1,
            _limit: 10
        }
    })

    return res.map((item) => {
        return {
            loc: 'detail/' + item.id,
            lastmod: new Date(),
            changefred: 'monthly', // 更新频率  always hourly daily weekly monthly yearly never
            priority: 0.8
        }
    })
})
