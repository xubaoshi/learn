// 异步编程事件待修改

var fn1 = function(){
    setTimeout(function(){
        console.log('begin!');
        $(document).trigger('done');
    },1000)
};

var fn2 = function(){
    console.log('done');
}

$(document).on('done',fn2)

fn1();