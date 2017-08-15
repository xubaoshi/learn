/*
    路由级的中间件绑定的对象为Express.Router()

*/

var express = require('express');
var app = express();
var router = express.Router();

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// 任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// 处理指向 /user/:id 的 GET 请求
router.get('/user/:id', function (req, res, next) {
    if (req.params.id == 1) {
        next('route')
    } else {
        next();
    }
}, function (req, res, next) {
    res.send('regular');
});

router.get('/user/:id', function (req, res, next) {
    res.send('special');
});

app.use('/', router);

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
});