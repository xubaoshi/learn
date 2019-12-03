/**
 * 类
 *
 * javascript 通过构造函数实现类的概念，通过原型链实现继承， ts 除了实现了所有 es6 中的功能外，并添加了一些新的功能
 *
 * 类的概念
 * 1.类（Class）：定义了一个事件特点，包含它的属性和方法
 * 2.对象：       类的实例通过 new 生成
 *
 * 3.面向对象编程的三大特性： 封装、继承、多态
 * 4.封装：       将对数据的操作细节隐藏起来,只暴露对外的接口。使用端不需要知道实现细节，使用端无法任意更改对象内部数据
 * 5.继承：       子类继承父类。子类除了拥有父类的所有特性外，还有一些具体的属性
 * 6.多态：       由继承产生的相关的不同的类。 如： Cat、Dog 类， 继承自 Animal 类， 但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法
 *
 * 7.存取器：     用以改变属性的读取和赋值行为
 * 8.修饰符：     使用一些关键字限定成员或类型的性质，如 public 等
 * 9.抽象类：     抽象类是供其他类继承的基类，抽象类不允许被实例化，抽象类中抽象方法必须在子类中实现
 * 10.接口：      不同类之间公有的属性或方法可以抽象成一个接口。接口可以被类实现。一个类智能继承另一个类，但是可以实现多个接口。
 */

// protected 构造函数也可以被标记为protected。这意味着这个类不能再包含它的类外被实例化，但是能被继承，也就是可以在派生类中被super执行, 可以在子类中fa访问他。不能在实现对象中fa访问
// private 能在这个类中进行在这个属性的访问。在子类和类的实现的对象中都不能访问。在子类可以通过调用使用这个属性的方法来间接使用这个属性

// =========== es6 语法 ================
// 定义类
class Animal {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    return `my name is ${this.name}`
  }
}
let a = new Animal('jack')
console.log(a.sayHi())

// 类的继承
// 使用 extends 关键字实现继承， 子类中使用 super 关键字来调用父类的构造函数和方法
class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  sayHi() {
    return `Meow， ${super.sayHi()}`
  }
}

// 存取器
class Animal1 {
  constructor(name) {
    this.name = name
  }
  get name() {
    return 'jack'
  }
  set name(value) {
    console.log('setter: ' + value)
  }
}
let a = new Animal1('kitty') // setter: Kitty
a.name = 'Tom' // setter: Tom
console.log(a.name) // Jack

// 静态方法
// static 修饰符修饰的方法为静态方法，他们不需要进行实例化，而是直接通过类来调用
class Animal2 {
  constructor(name) {
    this.name = name
  }
  static isAnimal(a) {
    return a instanceof Animal2
  }
}
let b = new Animal2('jack')
Animal2.isAnimal(a) // true
a.isAnimal(a) // TypeError: a.isAnimal is not a function

// es6 实现 class 原理 (es5)
// =========== es6 语法 ================
