/**
 * Created by zhang-j on 2016/9/9.
 */

//// 传统的回调方式
//function asyncCbFn(time, callback) {
//    setTimeout(function() {
//        callback("sleep time:" + time);
//    }, time);
//}
//
//// 回调金字塔
//asyncCbFn(1000, function(message) {
//    console.log(message);
//    asyncCbFn(2000, function(message) {
//        console.log(message);
//        asyncCbFn(3000, function(message) {
//            console.log(message);
//            asyncCbFn(4000, function(message) {
//                console.log(message);
//            });
//        });
//    });
//});
//
//// jquery的回调方式
//function syncJQCbFn(time) {
//    var deferred = $.Deferred();
//    setTimeout(function() {
//        deferred.resolve("sleep time:" + time);
//    }, time);
//    return deferred;
//}
//
//syncJQCbFn(5000).done(function(message) {
//    console.log(message);
//    syncJQCbFn(2000).done(function(message) {
//        console.log(message);
//        syncJQCbFn(1000).done(function(message) {
//            console.log(message);
//        });
//    });
//});

// generator配合promise
function delay(time) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("sleep time:" + time);
            resolve();
        }, time);
    });
}
function* myGenerator() {
    yield delay(1000);
    yield delay(2000);
    yield delay(3000);
}

var myObj = myGenerator();

myObj.next().value.then(function () {
    myObj.next().value.then(function () {
        myObj.next();
    });
});


async function myAsyncFn() {
    await delay(1000);
    await delay(2000);
    await delay(3000);
}
myAsyncFn();

// promise
