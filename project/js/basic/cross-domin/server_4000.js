var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/jsonp', function (req, res) {
    if (req.query && req.query.hasError) {
        res.jsonp({
            result: 'error',
            message: 'jsonp get error'  
        });
    } else {
        res.jsonp({
            result: 'success',
            message: 'jsonp get suceess'
        });
    }

});

// 理论上是请求不到的
app.get('/json', function (req, res) {
    res.json({
        result: 'success',
        message: 'json get suceess'
    });
});

app.get('/', function (req, res) {
    res.send('this is port 8081');
});


var server = app.listen(8081, '', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});