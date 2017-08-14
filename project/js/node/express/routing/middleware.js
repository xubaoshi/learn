var express = require('express');
var app = express();

/*
    当匹配到路径后会执行相关的回调函数（可以是多个），行为类似与中心件
    但与其不同的是 
    
    1、如果执行 next('route')的话，则会跳过当前路由的其他中间件。
    2、如果中间件回调函数中 不执行next方法，请求会一直处于响应中
*/
// =============逗号分隔回调函数 及 next('route')==========================
// 1
app.get('/example/b', function (req, res, next) {
    console.log('response will be sent by the next function 1 ...');
    // next
    // next('route');
    next();
}, function (req, res, next) {
    console.log('response will be sent by the next function 2 ...');
    next();
}, function (req, res) {
    res.send('Hello from B1!');
});

// 2
app.get('/example/b', function (req, res) {
    res.send('Hello from B2!');
});

// =============回调函数数组==========================
var cb0 = function (req, res, next) {
    console.log('cb0');
    next();
};
var cb1 = function (req, res, next) {
    console.log('cb1');
    next();
};
var cb2 = function (req, res) {
    res.send('Hello from C!');
};

var cb3 = function (req, res) {
    res.send('Hello from D!');
};

app.get('/example/c', [cb0, cb1, cb2]);

// =============回调函数混合使用==========================
app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('this is custom middleware');
    next();
}, cb3);


var server = app.listen(3000, '', function (req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
});