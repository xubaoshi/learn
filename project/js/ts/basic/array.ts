// 数组

// 定义 [类型+方括号]
let fibobacci: number[] = [1, 2, 3, 4]

// 不允许其他类型出现
let fiboacci1: number[] = [1, '2', 3] // error
fibobacci.push('3') // error

// 数组泛型
let fiboacci2: Array<number> = [1, 2, 3, 4]

// 用接口表示数组
interface NumberArray {
  [index: number]: number
}
let fiboacci3: NumberArray = [1, 2, 3]

// 类数组
function sum() {
  // 函数内部 arguments 不是数组类型 类数组
  let args: number[] = arguments; // error

  // tyep 1
  let args1: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
  // type2 (IArguments 是 ts 内部定义好的（内置对象）， 实际上就是 type1 的声明方式)
  let args2: IArguments = arguments
}

// 任意类型 any
let list: any[] = [1, '2', { name: '3' }]
