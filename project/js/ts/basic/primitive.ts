// 基础类型

// boolean
let isDone: boolean = false

// 构造函数 new Boolean 创建的不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1)  // 此种声明方式是错误的

// 在 ts 中 new Boolean() 返回的是 Boolean 类型的对象
let createdByNewBoolean: Boolean = new Boolean(1)

let createdByBoolean: boolean = Boolean(1)

// number
let decLiteral: number = 6
// es6 中的二进制及八进制均会编译成十进制的数字

// string
let myName: string = 'Tom'
let myAge: number = 25
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`

// 空值
// 在 ts 中 可以用 void 表示没有任何返回值的函数
function alertName(): void {
  alert('name')
}

// let u1: void  // error
// let num2: string = u1 // error
// void 声明的变量不能赋值给其他对象

// null undefined
let num: number = undefined
let u: undefined
let num1: number = u
