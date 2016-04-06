/**
 * Created by xu on 2016/4/6.
 */
exports.finishState = (datas, isFinish) =>{
    var objs = [];
    if (isFinish) {
        datas.forEach(function (n) {
            if (n.isFinish) {
                objs.push(n);
            }
        });
    }
    else {
        datas.forEach(function (n) {
            if (!n.isFinish) {
                objs.push(n);
            }
        });
    }

    return objs.length;
}