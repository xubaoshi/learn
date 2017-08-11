var express = require('express');
var app = new express();

// 所有文件的路径都是相对于存放目录的，
// 因此，存放静态文件的目录名不会出现在URL中
app.use(express.static('public'));

// 可以将静态资源存在在多个目录下,
// 同时express会根据添加顺序查找文件
app.use(express.static('pub'));
app.use(express.static('sub'));

// 希望挂载的静态文件路径是虚拟
app.use('/static', express.static('public'));

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`app is listen on ${host}: ${port}`);
})