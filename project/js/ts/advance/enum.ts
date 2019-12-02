// 枚举
// 枚举类型用于取值被限定在一定范围内的场景，如：一周只能有七天等

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

// 枚举成员会被赋值为从 0 开始递增的数字， 同时也会对枚举值到枚举名进行反向映射

enum Days1 {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Days1['Sun'] === 0) // true
console.log(Days1['Mon'] === 1) // true
console.log(Days1['Tue'] === 2) // true

console.log(Days1[0] === 'Sun') // true
console.log(Days1[1] === 'Mon') // true
console.log(Days1[2] === 'Tue') // true

// 编译后结果

// var Days
// ;(function(Days) {
//   Days[(Days['Sun'] = 0)] = 'Sun'
//   Days[(Days['Mon'] = 1)] = 'Mon'
//   Days[(Days['Tue'] = 2)] = 'Tue'
//   Days[(Days['Wed'] = 3)] = 'Wed'
//   Days[(Days['Thu'] = 4)] = 'Thu'
//   Days[(Days['Fri'] = 5)] = 'Fri'
//   Days[(Days['Sat'] = 6)] = 'Sat'
// })(Days || (Days = {}))

// 手动赋值
// 未手动赋值的枚举会接着上一个枚举项递增
enum Days2 {
  Sun = 7,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
// 如果手动赋值的枚举项与手动赋值的重复了 ， ts 是不会察觉到的
enum Days3 {
  Sun = 3,
  Mon = 1,
  Tue,
  Wed,
  Thu,
  Fri
}
console.log(Days3['Sun'] === 3) // true
console.log(Days3['Wed'] === 3) // true
console.log(Days3[3] === 'Sun') // false
console.log(Days3[3] === 'Wed') // true

// 当递增至 3 时 Wed 的值将 Sun 手动赋值的 3 覆盖了

// var Days;
// (function (Days) {
//   Days[Days["Sun"] = 3] = "Sun";
//   Days[Days["Mon"] = 1] = "Mon";
//   Days[Days["Tue"] = 2] = "Tue";
//   Days[Days["Wed"] = 3] = "Wed";
//   Days[Days["Thu"] = 4] = "Thu";
//   Days[Days["Fri"] = 5] = "Fri";
//   Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));

// 手动赋值可以不是数字，可以使用类型断言让 tsc 无视类型检查
enum Days4 {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat = <any>'S'
}

// var Days;
// (function (Days) {
//   Days[Days["Sun"] = 7] = "Sun";
//   Days[Days["Mon"] = 8] = "Mon";
//   Days[Days["Tue"] = 9] = "Tue";
//   Days[Days["Wed"] = 10] = "Wed";
//   Days[Days["Thu"] = 11] = "Thu";
//   Days[Days["Fri"] = 12] = "Fri";
//   Days[Days["Sat"] = "S"] = "Sat";
// })(Days || (Days = {}));

// 手动赋值的枚举项可以为小数或负数， 后续未手动赋值的增长值仍为 1
enum Days5 {
  Sun = 7,
  Mon = 1.5,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

console.log(Days5['Sun'] === 7) // true
console.log(Days5['Mon'] === 1.5) // true
console.log(Days5['Tue'] === 2.5) // true
console.log(Days5['Sat'] === 6.5) // true

// 常数项和计算所得项

// `blue.length` 就是一个计算所得项
enum Color {
  Red,
  Green,
  Blue = 'blue'.length
}
// 如果是计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
// enum Color1 {Red='red'.length , Green, Blue}
// index.ts(120,33): error TS1061: Enum member must have initialize

// 常数枚举
// 常数枚举是使用 `const enum` 来定义的枚举类型
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
]

// 常数枚举与普通枚举的区别是，常数枚举会在编译中删除，并且不能计算成员

// 编译结果
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */]

// 外部枚举
// 外部枚举是使用 `declare enum` 定义的枚举类型
declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}
let directions1 = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right
]
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除

// 编译结果
// var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// 同时使用 `declare` 与 `const`
declare const enum Directions2 {
  Up,
  Down,
  Left,
  Right
}
let directions2 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right]
// 编译结果
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */]