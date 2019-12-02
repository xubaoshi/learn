// 接口

interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: "tom",
  age: 12
};

// 少一些属性 error
// let jerry: Person = {
//   name: 'jerry'
// }

// 多一些属性 error
// let marry: Person = {
//   name: 'marry',
//   age: 16,
//   sex: 0
// }

// 可选属性 可选的属性可以不存在 但依然不可以添加额外的属性
interface Person1 {
  name: string;
  age?: number;
}

// 任意属性

// 确定属性 name、可选属性（age）及任意属性都必须为 任意属性缩规定的子集
// error
interface Person7 {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom5: Person7 = {
  name: "tom2",
  age: 11,
  sex: "1"
};

// 只读属性
// 初始定义后不能在此地被赋值
interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom3: Person3 = {
  id: 1,
  name: "tom3",
  gender: 1
};

// error
// tom3.id = 2
