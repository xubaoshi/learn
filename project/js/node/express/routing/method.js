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
    下面的的例子 先执行 all 后执行 get (all一定要放置到 get之前)
 */

// step 1
app.all('/secret', function (req, res, next) {
    console.log('this is all request  middle ' + req.method);
    next();
})

// step  2
app.get('/secret', function (req, res) {
    console.log('this is secret page');
})



var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`server listen on ${host} : ${port}`);
})