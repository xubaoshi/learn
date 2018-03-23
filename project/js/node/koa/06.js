const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const about = async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}
const main = async ctx => {
  ctx.response.body = 'Hello World'
}
app.use(route.get('/', main))
app.use(route.get('/about', about))

app.listen(3000)