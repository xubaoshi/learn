// 任意值
// 通常一个普通类型在赋值过程中改变类型是不允许的 , any 是可以的
// let myFavoriteNum: string = 'seven'
// myFavoriteNum = 7  // error
var myFavoritNum1 = 'seven';
myFavoritNum1 = 7;
// any 可以访问任意属性
console.log(myFavoritNum1.name);
