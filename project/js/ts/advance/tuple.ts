// 元祖
// 数组合并了相同类型的对象，而元祖 （Turple） 合并了不同类型的对象

// 定义一对值分别为 string 和 number 的元祖
let tom: [string, number] = ['Tom', 25]

// 赋值与访问
let tom1: [string, number]
tom1[0] = 'Tom'
tom1[1] = 25

// 可以只赋值其中一项
let tom2: [string, number]
tom2[0] = 'Tom'

// 但是直接对元祖类型初始化或直接赋值时，需要提供所有元祖类型中指定的项

let tom3: [string,number]
// tom3 = ['Tom']
// Property '1' is missing in type '[string]' but required in type '[string, number]'.

// 越界的元素
// 当添加越界的元素时，它的类型会被限制为元祖中类型
let tom4: [string, number]
tom4 = ['Tom', 25]
tom4.push('male')
tom4.push(355)
// tom4.push(true)
// Argument of type 'true' is not assignable to parameter of type 'string | number'.
