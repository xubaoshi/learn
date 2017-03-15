var dgram = require('dgram');
var message = new Buffer('深入浅出nodejs!');
var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 8080, 'localhost', function (err, bytes) {
    client.close();
})