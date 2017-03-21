var fork = require('child_process').fork;
var cpus = require('os').cpus();
var server = require('net').createServer();
server.listen(8080);

var workers = {};
var createWorker = function () {
    var worker = fork(__dirname + '/auto_start_worker.js');
    worker.on('message', function (message) {
        if (message.act === 'suicide') {
            createWorker();
        }
    })
    worker.on('exit', function () {
        console.log('Worker ' + worker.pid + 'exited');
        delete workers[worker.pid];
        createWorker();
    })
    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log('create worker ' + worker.pid);
}

for (var i = 0; i < cpus.length; i++) {
    createWorker();
}

process.on('exit', function () {
    for (var pid in workers) {
        workers[pid].kill();
    }
})