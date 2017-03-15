// buffer
//===================================
var str = "深入浅出node.js";
var buf = new Buffer(str,'utf-8');
console.log(buf);
var buf = new Buffer(100);
console.log(buf.length);
buf[11] = 100;
console.log(buf[11]);
buf[20] = 300;
console.log(buf[20])
buf[21] = -1;
console.log(buf[21]);