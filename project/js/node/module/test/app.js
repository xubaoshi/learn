/**
 * Created by xubaoshi on 2016/8/17.
 */
var path = require('path');                   // 核心模块  http、fs、path等
var test1 = require('./test1.json');          // . 或 .. 开始的相对路径的文件模块
var test2 = require('../test2.json');
var test3 = require('bin');           // 以/开始的绝对路径
var walk = require('walk');             // 非路径形式的connect模块


console.log('path:' + path.isAbsolute('E:/code/learn/project/js/node/module/test/test3.json'));
console.log('test1:' + test1.name);
console.log('test2:' + test2.name);
console.log('test3:' + test3.name);
console.log('walk:' + walk);



