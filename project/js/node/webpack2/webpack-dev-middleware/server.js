var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config')

var app = express()
var compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler,{
    publicPath:"/"
}))

app.listen(3000,'',function () {
    console.log('listening on port 3000!')
})