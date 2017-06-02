const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
var fs = require('fs')

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: fs.readFileSync('./index.template.html', 'utf-8')
    })
    const context = {
        title: 'ssr'
    }

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error!')
            return
        }
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head><title>Hello</title></head>
                <body>
                    ${(html)}
                </body>
            </html>
        `)
        console.log(html)
    })
})

server.listen('8080', '', function () {
    console.log('listen on port 8080')
})