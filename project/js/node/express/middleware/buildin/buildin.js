/**
    4.x 版本 Express已经不再依赖Connect，除了express.static,Express以前内置的中间件现在已经全部单独作为模块安装使用。
    express.static 是Express唯一内置的中间件，用于托管静态资源
    
    // root提供静态资源的根目录
    使用方法： express.static(root,[options])
    options属性如下：
        - dotfiles      是否对外输出文件名以(.)开头的文件 默认值：'ignore'， 其他可选值：'allow'、'deny'
        - etag          是否启用etag生成 默认值：true
        - extensions    设置扩展名备份选项 默认值：[]
        - index         发送目录索引文件，设置为false禁用  默认值："index.html"
        - lastModified  设置Last-Modified 头文件在操作系统上的最后修改日期   默认值：true
        - maxAge        以毫秒或者其字符串格式设置 Cache-Control头的max-age属性  默认值：0
        - redirect      当路径为目录时，重定向至"/"
        - setHeaders    设置HTTP头已提供文件的函数

    ## 静态资源的强缓存及协商缓存 ##
    ### 强缓存 200-from-cache ###
    强缓存是利用Expires或者Cache-Control实现的，它们都表示资源在客户端缓存的有效时间
    Expires是http1.0提出的一个表示资源过期时间的header，描述的是一个绝对时间由服务器返回，GMT格式的字符串表示，
    如：Expires:Thu, 31 Dec 2037 23:55:55 GMT，当浏览器对某个资源的请求命中了强缓存时，返回的http状态200,chrome f12查看network
    中size会显示为 from cache。

    ![][]

    ### Expires与Cache-Control 区别###
    
    其缓存原理是：

    ### 协商缓存 200-not-modified ###
    当浏览器对某个资源的请求没有命中强缓存，就就发一个请求到服务器，验证协商缓存是否命中，如果协商缓存命中，响应返回的http状态码304
    并且会显示一个Not Modified的字符串。

    协商缓存是利用的是 【Last-Modified,If-Modified-Since】和 【ETag，If-None-Match】这两对Header来管理的。
        
*/

var express = require('express');
var app = express();

app.get('/cache-p', function (req, res) {
    res.sendFile(__dirname + '/cache.html')
});

app.get('/etag-p', function (req, res) {
    res.sendFile(__dirname + '/etag.html')
});

app.get('/modified-p', function (req, res) {
    res.sendFile(__dirname + '/modified.html')
});

app.get('/expires-p', function (req, res) {
    res.sendFile(__dirname + '/expires.html')
});

app.use(express.static('expires', {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'htm', 'css', 'png', 'gif', 'jpg', 'js', 'tpl'],
    index: 'index.html',
    lastModified: false,
    maxAge: 0,
    redirect: true,
    setHeaders: function (res,path,stat) {
        res.setHeader('Expires', new Date(Date.now() + 345600000).toUTCString());
    }
}));

app.use(express.static('cache-control', {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'htm', 'css', 'png', 'gif', 'jpg', 'js', 'tpl'],
    index: 'index.html',
    lastModified: false,
    maxAge: '10000',
    redirect: true
}));

app.use(express.static('etag', {
    dotfiles: 'ignore',
    etag: true,
    extensions: ['html', 'htm', 'css', 'png', 'gif', 'jpg', 'js', 'tpl'],
    index: 'index.html',
    lastModified: false,
    maxAge: 0,
    redirect: true
}));

app.use(express.static('modified', {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['html', 'htm', 'css', 'png', 'gif', 'jpg', 'js', 'tpl'],
    index: 'index.html',
    lastModified: true,
    maxAge: 0,
    redirect: false
}));

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
});