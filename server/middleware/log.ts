export default defineEventHandler((event) => {
    console.log(`Request made to: ${event.node.req.url}`)
})
