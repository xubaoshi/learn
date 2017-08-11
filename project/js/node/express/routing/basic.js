/*
    路由是用来定义应用的端点及如何相应用户的请求
    路由的结构如下：
        app.METHOD(path,[callback...],callback)

    app是express对象的一个实例，METHOD是一个HTTP请求方法，
    path是服务器上的路径，callback是当匹配路由时要执行的函数。
*/
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
})
var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host}:${port}`);
})