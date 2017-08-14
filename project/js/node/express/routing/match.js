var express = require('express');
var app = express();

/*
    Express 使用 [https://www.npmjs.com/package/path-to-regexp](https://www.npmjs.com/package/path-to-regexp)方式进行路由匹配
    可以使用 [http://forbeslindesay.github.io/express-route-tester/](http://forbeslindesay.github.io/express-route-tester/) 测试基本路由的工具，但不支持模式匹配
*/

// ==================基本路由路径======================
// 匹配根路径请求
app.get('/', function (req, res) {
    res.send('root');
});

// 匹配 /about
app.get('/about', function (req, res) {
    res.send('about');
});

// 匹配 /random.text 路径的请求
app.get('/random.txt', function (req, res) {
    res.semnd('random.txt');
});




// ==================字符串模式的路由路径======================
// 匹配acd 和 abcd
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});
// 匹配abcd abbcd abbbcd...
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd');
});
// 匹配 abcd、abxcd、abRABDOMcd、ab123cd...
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd');
});
// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e');
});

// ps: "-"和"."在基友字符串路径中按照字面值解释

// ==================使用正则表达式的路由路径======================
// 任何含有a的路径
app.get(/a/, function (req, res) {
    res.send('/a/');
});
// 匹配 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/');
});

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
})