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
 * 5.继承：       子类继承父类。子类除了拥有父类的特性外，还有一些具体的属性
 * 6.多态：       由继承产生的相关的不同的类。 如： Cat、Dog 类， 继承自 Animal 类， 但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法
 *
 * 7.存取器：     用以改变属性的读取和赋值行为
 * 8.修饰符：     使用一些关键字限定成员或类型的性质，如 public 等
 * 9.抽象类：     抽象类是供其他类继承的基类，抽象类不允许被实例化，抽象类中抽象方法必须在子类中实现
 * 10.接口：      不同类之间公有的属性或方法可以抽象成一个接口。接口可以被类实现。一个类智能继承另一个类，但是可以实现多个接口。
 */

// protected 构造函数也可以被标记为protected。这意味着这个类不能再包含它的类外被实例化，但是能被继承，也就是可以在派生类中被super执行, 可以在子类中访问他。不能在实现对象中访问
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
Animal2.isAnimal(b) // true
b.isAnimal(b) // TypeError: a.isAnimal is not a function

// es6 继承 实现 class 原理 (es5)
// class的构造函数必须使用new进行调用，普通构造函数不用new也可执行。
// class不存在变量提升，es5中的function存在变量提升。
// class内部定义的方法不可枚举，es5在prototype上定义的方法可以枚举
// =========== es6 语法 ================
function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype, {
    constructor: {
      enumerable: false,
      configurable: true,
      writable: true,
      value: subType
    }
  })
  Object.setPrototypeOf(subType, superType)
}
// Object.setPrototypeOf 方法的作用与 `__proto__` 相同，用来设置一个对象的 prototype 对象，返回参数对象本身。该方法等同于下面的方法
function (obj, proto) {
  obj.__proto__ = proto
  return obj
}

// es7 中类的用法

// 实例属性
// es6中属性使用 this.xxx 定义 es7 中可以直接在类里进行定义
class Animal4 {
  name = 'Jack'
  constructor() {
    // ...
  }
}
// 静态类型
class Animal5 {
  static num = 42
  constructor() {
    // ...
  }
}
// 修饰符 public、private、protected
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性都是 public
// private 修饰的属性和方式是私有的，不能在声明它的类的外部访问（包括子类中）
// protected 修饰的属性和方法是受保护的，它和 private 类似区别是它在子类中是允许被访问的但是无法在实例中访问

// public
class Animal6 {
  public name
  public constructor(name) {
    this.name = name
  }
}
let a6 = new Animal6('Tom')
console.log(a6.name) // Tom
a6.name ='Jack'

// private
class Animal7 {
  private name
  public constructor(name) {
    this.name = name
  }
}
let a7 = new Animal7('Tom')
console.log(a7.name)
// error TS2341: Property 'name' is private and only accessible within class 'Animal7'.
a7.name = 'Jack'
// error TS2341: Property 'name' is private and only accessible within class 'Animal7'.

// private 在子类中也是不允许访问的
class Cat7 extends Animal7 {
  constructor(name) {
    super(name)
    console.log(this.name)
    // error TS2341: Property 'name' is private and only accessible within class 'Animal7'.
  }
}

// 当构造函数被修饰为 private 时，它既不能被继承也不能被实例化
class Animal8 {
  public name
  private constructor(name) {
    this.name = name
  }
}
class Cat8 extends Animal8 {
  constructor(name) {
    super(name)
  }
}
// TS2675: Cannot extend a class 'Animal8'.Class constructor is marked as private.
let a8 = new Animal8('Tom')
// TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.

// protected
class Animal9 {
  protected name
  public constructor(name) {
    this.name = name
  }
}
class Cat9 extends Animal9 {
  constructor(name) {
    super(name)
    // protected 允许在子类中访问
    console.log(this.name)
  }
}

// 当构造函数被修饰为 protected 时，它既只能被继承也不能被实例化
class Animal10 {
  public name
  protected constructor(name) {
    this.name =name
  }
}
class Cat10 extends Animal10 {
  constructor(name) {
    super(name)
  }
}
let a10 = new Animal10()
// TS2674: Constructor of class 'Animal10' is protected and only accessible within the class declaration.

// 修饰符也可以使用在构造函数的参数中
class Animal11 {
  public constructor(public name) {
    this.name = name
  }
}

// readonly 只读属性关键字，只允许出现在属性声明或索引签名中
class Animal12 {
  readonly name
  public constructor(name) {
    this.name = name
  }
}
let a12 = new Animal12('Tom')
console.log(a12.name)// Tom
a12.name = 'Jack'
// TS2540: Cannot assign to 'name' because it is a read-only property.

// 如果 readonly 与其他的访问修饰符同时存在的话 需要写在后面
class Animal13 {
  // public readonly name
  public constructor(public readonly name) {
    this.name =  name
  }
}

// 抽象类（abstract）
// abstract 用于定义抽象类和其中的抽象方法
// 抽象类不允许被实例化
abstract class Animal14 {
  public name
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi()
}
let a14 = new Animal14('Tom')
// error TS2511: Cannot create an instance of the abstract class 'Animal14'

// 抽象类中的方法必须被子类实现
class Cat14 extends Animal14 {
  public eat() {
    console.log(`${this.name} is eating.`)
  }
}
// error TS2515: Non - abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal14'.
class Cat141 extends Animal14 {
  public sayHi() {
    console.log(`${this.name} hello.`)
  }
}
let cat14 =  new Cat141('Tom')

// 类的类型
class Animal15 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `My name is ${this.name}`
  }
}
let a15:Animal15 = new Animal15('Tom')
console.log(a15.sayHi()) 