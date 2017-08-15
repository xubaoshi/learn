/*
    错误处理中间件
    定义错误处理中间件必须使用4个参数，格式如下：(err,req,res,next)
*/
var express = require('express');
var app = express();
var setLogger = require('./logger');

setLogger(app);

app.get('/user/:id', function (req, res) {
    console.log("a" + a);
});

app.get('/dog/:id', function (req, res) {
    res.send(`User${req.params.id}`);
});

app.use(function (err, req, res, next) {
    console.log(err.stack);
    next(err);
});

app.use(function (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({
            error: 'Something blew up!'
        });
    } else {
        next(err);
    }
});

app.use(function (err, req, res, next) {
    res.status(500);
    res.render('error', {
        title: 'error',
        error: err
    });
});

app.set('view engine', 'jade');


var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
});