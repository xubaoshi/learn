// 类型推论
// 变量声明时 如果初始赋值 ts 会根据初始值进行类型推断

let myFavoriteNum = 'seven'
// myFavoriteNum = 7 // error

// 如果变量声明时没有初始赋值 类型则推断为 any
let myFavoriteNum1
myFavoriteNum1 = 'seven'
myFavoritNum1 = 7