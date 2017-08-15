var logger = require('morgan');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');

function setLogger(app) {
    var logDic = __dirname + '/logs';
    var accessLog = FileStreamRotator.getStream({
        filename: logDic + '/access-%DATE%.log',
        frequency: 'test',
        verbose: false
    });
    app.use(logger('combined', {
        stream: accessLog
    }));
    fs.existsSync(logDic) || fs.mkdirSync(logDic);
}
module.exports = setLogger;