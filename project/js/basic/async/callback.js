var step1 = function(){
    var sum = 0;
    for(var i=0 ;i < 1000000000000; i++ ){
        sum+=i;
    }
    return sum;
}

var step2 = function(a){
    console.log(a);
}

// 异步模式
step1 = function(callback){
    setTimeout(function(){
        var sum = 0;
        for(var i=0 ;i < 1000000000; i++ ){
            sum+=i;
        }
    callback(sum);
    },0);
}

// 异步模式
// var a = step1();
// step2(a);
// step1(step2);
console.log('执行完毕！');

// 回调金字塔
function asyncCbFn(time, callback) {
   setTimeout(function() {
       callback("sleep time:" + time);
   }, time);
}
asyncCbFn(1000, function(message) {
   console.log(message);
   asyncCbFn(2000, function(message) {
       console.log(message);
       asyncCbFn(3000, function(message) {
           console.log(message);
           asyncCbFn(4000, function(message) {
               console.log(message);
           });
       });
   });
});



