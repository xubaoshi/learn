const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const serve = require('koa-static')
const main = serve(path.join(__dirname))
const app = new Koa()

app.use(main)
app.use(async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.readFileSync('./demos/template1.html')
})
app.listen(3000)