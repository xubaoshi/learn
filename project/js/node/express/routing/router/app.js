var express = require('express');
var app = express();

var birds = require('./birds');
var dogs = require('./dogs');

app.use('/birds', birds);
app.use('/dogs', dogs);

var server = app.listen(3000, '', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`listen on ${host} : ${port}`);
})