/*
    中间件（Middleware）是一个函数，可以访问请求对象(req),响应对象（res），
    和Web应用中处于请求-响应事件循环中的中间件（next）

    中间件功能：
    - 执行任何代码
    - 修改请求和响应对象
    - 终结请求-响应循环
    - 调用堆栈中的下一个中间件
    ps： 如果当前没有终结请求-响应循环，则必须调用next()方法将控制权交给下一个中间件，否则请求就会挂起。
 
    Express 中可以使用以下几种中间件
    - 应用级中间件
    - 路由级中间件
    - 错误处理中间件
    - 内置中间件
    - 第三方中间件
 */

/*
    ** 应用级中间件 **
    应用级中间件绑定到app对象上。
*/

var express = require('express');
var app = express();

//====================================================
// 所有的请求都会经过此中间件
app.use(function (req, res, next) {
    console.log('all requets: ', Date.now());
    next();
});

// /user/:id 任何请求类型都会经过此中间件
app.use('/user/:id', function (req, res, next) {
    console.log('/user/id requets url', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('/user/id requets method', req.method);
    next();
});

// /user/:id get请求会经过次此中间件
app.get('/user/:id', function (req, res, next) {
    console.log('/user/id get method', req.params.id);
    next();
});

app.get('/user/:id', function (req, res, next) {
    // 终止请求响应循环
    res.send('USER' + req.params.id);
});

// ====================================================
// 如果终止了请求响应循环，后面的中间件函数将不会执行
app.get('/dog/:id', function (req, res, next) {
    console.log('dog id:', req.params.id);
    next();
}, function (req, res, next) {
    res.send('dog info');
});

app.get('/dog/:id', function (req, res, next) {
    res.end(req.params.id);
});

// ====================================================
// 如果不希望继续执行当前路由匹配的中间件集合，
// 可以使用next('route')跳转执行下一个匹配的路由的中间件的集合
app.get('/cat/:id', function (req, res, next) {
    console.log('cat id:', req.params.id);
    if (req.params.id == 1) {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {
    res.send('cat info');
});

app.get('/cat/:id', function (req, res, next) {
    res.end(req.params.id);
});




var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
})