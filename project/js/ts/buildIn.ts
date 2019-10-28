// 内置对象

// ECMAScript
let b: Boolean = new Boolean(1)

// let b1:boolean = new Boolean(1) // error
let b2: boolean = true
let b3: boolean = Boolean(true)

let e: Error = new Error('Error occurred')
let d: Date = new Date()
let r: RegExp = /[a-z]/

// DOM & BOM
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {})

// 有些内置对象 ts 已经做了一些类型判断的工作了
// Math.pow(10, '2') // error

// TypeScript 核心库的定义 Math.pow 如下
// interface Math {
//   pow(x: number, y: number): number
// }

// DOM 内置对象
document.addEventListener('click', function(e) {
  // e 被推断成了 MouseEvent，而 MouseEvent 是没有 targetCurrent 属性的，所以报错
  // console.log(e.targetCurrent) // error
})
