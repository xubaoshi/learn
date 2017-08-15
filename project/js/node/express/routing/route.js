var express = require('express');
var app = express();

// 路径相同 请求方法不同
app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book');
    })
    .post(function (req, res) {
        res.send('Add a book');
    })
    .put(function (req, res) {
        res.send('Update this book');
    })

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
});