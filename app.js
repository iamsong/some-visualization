const Koa = require('koa')
const app = new Koa()

// app.use((ctx, next) => {
//     const start = new Date()
//     return next().then(() => {
//         const ms = new Date() - start
//         console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
//     })
// })

app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(ctx => {
    ctx.body = 'Hello Koa'
})

app.listen(3000)
