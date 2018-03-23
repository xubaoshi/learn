const fs = require('fs.promised')
const Koa = require('koa')
const app = new Koa()
const main = async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./demos/template.html', 'utf-8')
}
app.use(main)
app.listen(3000)
