/*
    Express定义了对应的路由方法
    get, post, put, head, delete, options, trace, 
    copy, lock, mkcol, move, purge, propfind, proppatch, 
    unlock, report, mkactivity, checkout, merge, m-search, 
    notify, subscribe, unsubscribe, patch, search,connect等

    如果存在某些方法中不符合js变量名的需要更换写法
 */
var express = require('express');
var app = express();

app['m-search']('/', function () {
    // ....
})

/*
    all是一个特殊的方法，不管使用http模块支持的请求，该对应的回调的都会执行
 */

app.all('/secret', function (req, res, next) {
    console.log('this is all request');
    next();
})

var server = app.listen(3000, '',function () {

})