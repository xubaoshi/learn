/**
    express 可以使用多种模板引擎如：
    - jade 
    - ejs
    - handlebar
    - swig
 */
var express = require('express');
var app = express();

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
})