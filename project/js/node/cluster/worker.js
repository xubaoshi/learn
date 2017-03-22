// basic
var http = require('http');
var port = Math.round((1 + Math.random()) * 1000);
console.log('listen on  ' + port);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, '127.0.0.1')