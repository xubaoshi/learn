var http = require('http');
var server = http.createServer(function (req, res) {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        console.log(chunk);
        body += chunk;
    })
    req.on('end', function () {
        try {
            var data = JSON.parse(body);
            res.write(typeof data);
        } catch (er) {
            res.statusCode = 400;
            return res.end('has error!');
        }
    })
});
server.listen(8080)
console.log('listen on  8080')