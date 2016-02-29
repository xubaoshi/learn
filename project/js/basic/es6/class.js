/**
 * Created by xu on 2016/2/29.
 */

// 类是基于原型的面向对象模式的语法糖

// eg:
class Animal {
    // 构造方法，实例化时将被调用，如果不指定，那么会有一个不带参数的默认构造函数
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // toString 是原型对象上的属性
    toString() {
        console.log('name:' + this.name + ',color' + this.color);
    }
}

var animal = new Animal('dog', 'white');
animal.toString();
console.log(animal.hasOwnProperty('name')); // true
console.log(animal.hasOwnProperty('toString'));// true
console.log(animal.__proto__.hasOwnProperty('toString')); // true


class Cat extends Animal {
    constructor(action) {
        super("cat","white");
        this.action = action;
    }

    toString() {
        console.log(super.toString());
    }
}

var cat = new Cat('catch');
cat.toString();
console.log(cat instanceof Cat); //true
console.log(cat instanceof Animal);// true

