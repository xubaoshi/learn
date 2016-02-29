/**
 * Created by xu on 2016/2/29.
 */
// => 是function的简写形式，支持expression及statement两种形式，同时它拥有词法作用域的this值

// eg:
([param], [,param])=> {
    statements
};
param=>expression;

const arr = [1, 2, 3];
var temp = [];
// 1
arr.map(item=>item + 1);
arr.map((item, index)=>item + 1);

// 2
arr.foreach(item=> {
    if (item === 1) {
        temp.push(item);
    }
});

// 3
var bob = {
    name: 'kevin',
    friends: ['liLy', 'Mary'],
    print: function () {
        this.friends.forEach((item, index)=> {
            console.log(this.name + 'konows' + item);
        })
    }
};