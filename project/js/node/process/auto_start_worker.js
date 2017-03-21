var http = require('http');
var port = Math.round((1 + Math.random()) * 1000);
var server = http.createServer(function (req, res) {
    res.writeHead('200', { 'Content-Type': 'text/plain' })
    res.end('handled by child, pid is ' + process.pid + '\n');
    throw new Error('throw Exception!')
}).listen(port, '127.0.0.1')
console.log('child-port:   ' + port);
var worker;
process.on('message', function (m, tcp) {
    if (m == 'server') {
        worker = tcp;
        worker.on('connection', function (socket) {
            server.emit('connection', socket);
        })
    }
});
process.on('uncaughtException', function () {
    console.log('suicide trigger!');
    process.send({ act: 'suicide' });
    worker.close(function () {
        process.exit(1);
    })
})