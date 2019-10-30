// 任意值

// 通常一个普通类型在赋值过程中改变类型是不允许的 , any 是可以的
// let myFavoriteNum: string = 'seven'
// myFavoriteNum = 7  // error

let myFavoritNum1: any = 'seven'
myFavoritNum1 = 7

// any 可以访问任意属性、使用任意方法
let anyThing: any = 'hello'
console.log(anyThing.name)
console.log(anyThing.name.name)
anyThing.setName()

// 未声明的变量均是 any 类型
let any1
console.log(any1.name)
console.log(any1.name.name)
any1.setName()
