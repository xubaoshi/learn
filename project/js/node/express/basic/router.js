var express = require('express');
var app = express();

// 可以使用curl测试rest服务

// get
// curl localhost:3000/
app.get('/', function (req, res) {
    res.send('hello world');
})

// post
// curl "" "localhost:3000/"
app.post('/', function (req, res) {
    res.send('Got a Post request');
})

// user 节点接受 PUT 请求
// curl -X PUT localhost:3000/user
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
})

// curl -X DELETE localhost:3000/user
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listen on' + host + '  port: ' + port);
})