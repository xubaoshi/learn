// 断言
// 当 ts 不确定一个联合类型的变量到底是哪个类型的时候，只能访问联合类型所有类型共有的属性和方法’
function getLength(something: string | number): number {
  // 1.
  // return something.length  // error

  // 2.
  // if (something.length) {   // error
  //   return something.length
  // } else {
  //   retun something.toString().length
  // }

  // 3.
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}

// 类型断言不是类型转换 ，断言成一个联合类型不存在的类型是不允许的
// function toBoolean(something: string | number): boolean { // error
//   return <boolean>something
// }
