// 泛型
// 泛型是指在定义函数。接口或类时，不预先指定类型，而是在使用时再指定

// 创建一个指定长度的数组同时每一项添加一个默认值
function createArray(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
// Array<any> 允许数组的每一项为任何值，但是预期的是数组的每一项都应是输入的 value 值

// 使用泛型实现
function createArray1<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray1<string>(3, 'x') // ['x', 'x', 'x']

// T 用来指代任意输入的类型， 后面的参数类型 value:T 和 Array<T> 才可以使用

// 上述  createArray1<string>(3, 'x') 也可以不指定  <string> 可以使用 ts 类型推断自动推断出来
createArray1(3, 'x') // ['x', 'x', 'x']

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
swap([7, 'seven']) // ['seven', 7]

// 泛型约束
// 由于不知道是哪种类型，所以不能随意操作它的属性和方法
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length)
  return arg
}
// error TS2339: Property 'length' does not exist on type 'T'.

// 通过接口可以对泛型进行约束，只允许掺入包含某个属性如上例中 length 属性的变量
interface Lengthwise {
  length: number
}
function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity1(7)
// error TS2345: Argument of type '7' is not assignable to parameter of type 'Lengthwise'.

// 多个类型参数之间的相互约束
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}
let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })

// 泛型接口
// 接口方式定义函数形状
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}
// 含有泛型的接口定义
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}
let createArray2: CreateArrayFunc
createArray2 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray2(3, 'x') // ['x','x','x']

// 进一步优化
interface CreateArrayFunc1<T> {
  (length: number, value: T): Array<T>
}
let createArray3: CreateArrayFunc1<any>
createArray3 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray3(3, 'x')

// 泛型类
// 与接口类似
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}
// 泛型参数的默认类型
// 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用
function createArray4<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
