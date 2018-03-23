const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

app.use(async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./demos/template.html')
})

app.listen(4000)