// 声明合并
// 如果定义了两个相同的名字的函数、接口或类，那么他会合并成一个类型

// 函数的合并
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

// 接口合并
// 接口的属性在合并时会简单的合并到一个接口中
interface Alarm {
  price: number
}
interface Alarm {
  weight: number
}

// 相当于
interface Alarm {
  price: number
  weight: number
}

// 合并的属性的类型必须是唯一的
interface Alarm {
  price: number
}
interface Alarm {
  price: number
  weight: number
}
// 以为 price 类型重复所以不会报错
interface Alarm {
  price: string
  weight: number
}
//  error TS2403: Subsequent variable declarations must have the same type.  Variable 'price' must be of type 'number', but here has type 'string'

// 接口中方法的合并与函数的合并一样
interface Alram {
  price: number
  alert(s: string): string
}
interface Alarm {
  weight: number
  alert(s: string, n: number): string
}

// 相当于
interface Alram {
  price: number
  alert(s: string): string
  weight: number
  alert(s: string, n: number): string
}

// 类的合并与接口合并一致