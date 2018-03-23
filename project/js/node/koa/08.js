const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

const main = async ctx => {
  ctx.response.body = 'Hello World'
}
const redirect = async ctx => {
  ctx.response.redirect('/')
}
app.use(route.get('/', main))
app.use(route.get('/redirect', redirect))
app.listen(3000)