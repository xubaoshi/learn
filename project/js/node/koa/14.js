const Koa = require('koa')
const route = require('koa-route')
const koaBody = require('koa-body')
const fs = require('fs.promised')
const path = require('path')
const serve = require('koa-static')
const os = require('os')
const main = serve(path.join(__dirname))

const app = new Koa()
app.use(main)
app.use(koaBody({ multipart: true }))
const index = async ctx => {
  ctx.response.body = 'this is index'
}
const addPage = async ctx => {
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./demos/14.html', 'utf-8')
}
const add = async ctx => {
  const body = ctx.request.body
  console.log(body)
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./demos/template1.html', 'utf-8')
}
const upload = async ctx => {
  try {
    const files = ctx.request.body.files
    const tmpdir = path.join(__dirname, 'upload')
    const filePaths = []
    for (let key in files) {
      const file = files[key]
      const filePath = path.join(tmpdir, file.name)
      const reader = fs.createReadStream(file.path)
      const writer = fs.createWriteStream(filePath)
      reader.pipe(writer)
      filePaths.push(filePath)
    }
    ctx.response.type = 'json'
    ctx.response.body = { status: 'success', result: filePaths }
  } catch (err) {
    ctx.response.type = 'json'
    ctx.response.body = { status: 'error' }
    ctx.app.emit('error', err, ctx)
  }
}

app.on('error', err => {
  console.log('logging error', err.message)
  console.log(err)
})

app.use(route.get('/', index))
app.use(route.get('/add', addPage))
app.use(route.post('/add', add))
app.use(route.post('/upload', upload))

app.listen(3000)