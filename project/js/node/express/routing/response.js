var express = require('express');
var app = express();

// res.download 下载 提示下载文件
app.get('/download', function (req, res) {
    res.download('./basic.js');
});

// res.end() 终结响应处理
app.get('/end', function (req, res) {
    res.status(404).end();
});

// res.json() 发送json响应格式
app.get('/json', function (req, res) {
    res.json({
        content: 'json'
    });
});

// res.jsonp 发送一个支持 JSONP 的 JSON 格式的响应
app.get('/jsonp', function (req, res) {
    res.jsonp({
        content: 'jsonp'
    });
});

// res.render() 渲染视图模板
app.set('view engine', 'jade');
app.get('/render', function (req, res) {
    res.render('index', {
        title: 'render',
        'message': 'Hello World'
    });
})

// redirect 重定向请求
app.get('/redirect', function (req, res) {
    res.redirect('/render');
});

// send 终结响应处理流程
app.get('/send', function (req, res) {
    res.send('it is send');
});

// sendStatus 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
// res.sendStatus(200); // equivalent to res.status(200).send('OK')
// res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
// res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
// res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
app.get('/sendStatus', function (req, res) {
    res.sendStatus(500);
});

// sendFile 以八位字节流的形式发送文件。
app.get('/file/:name', function (req, res) {
    var options = {
        root: __dirname,
        headers: {
            'Content-type': 'text/html;charset=utf-8'
        }
    }
    var name = req.params.name;
    res.sendFile(name, options, function (err) {
        if (err) {
            console.log(err);
            console.log(err.status);
            res.status(err.status).end();
        } else {
            console.log('Sent: ', name);
        }
    });
});

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
})