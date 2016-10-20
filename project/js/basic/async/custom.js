var timeout = 0;

// 1
// =======================================

// setTimeout(function() {
//     console.log('1')
// }, timeout)
// setInterval(function() {
//     console.log('1')
//}, timeout);

// 2
// =======================================
var t = true;
setTimeout(function(){
    console.log('1');
},timeout)

console.log('死循环开始！');
while(t){}

console.log('2');
console.log('3');
console.log('4');

