const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
  } else {
    ctx.response.body = 'Helo World'
  }
})
app.listen(3000)