// 函数

// ts 对函数的输入输出均作有约束
function sum(x: number, y: number): number {
  return x * y
}

// 不允许输入多余的参数
// sum(1, 2, 3) // error

// 不允许少输入参数
// sum(1) // error

// 函数表达式

// 只对右侧的匿名函数进行定义 左侧的只是赋值操作进行的类型推断
let mySum = function(x: number, y: number): number {
  return x + y
}

// 定义右侧的类型
let mySum1: (x: number, y: number) => number = function(x: number, y: number) {
  return x + y
}

// 用接口定义函数
interface SearchFunc {
  (source: string, substring: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, substring: string) {
  return source.search(substring) !== -1
}

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
let tomcat = buildName('Tom', 'Cat')
let tom2 = buildName('tom')

//  参数默认值
function buildName1(firstName: string, lastName: string = 'cat') {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
let tom4 = buildName1('tom3')

// 剩余参数
function push(array, ...items) {
  items.forEach(function(item) {
    array.push(item)
  })
}
let a = []
push(a, 1, 2, 3)

// 重载
// 我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  } else if (typeof x === 'string') {
    return x
      .split('')
      .reverse()
      .join('')
  }
}
