var cp = require('child_process');

// spawn
// cp.spawn('node', ['worker.js']);

// exec
// cp.exec('node worker.js', function (err, stdout, stderr) {
//     console.log('exec');
// })

// execFile
// cp.execFile('worker.js', function (err, stdout, stderr) {
//     console.log('execFile');
// })

// fork
cp.fork('./worker.js');