// 声明
// 当使用第三方库时，需要引入第三方文件，才能获得对应的代码补全,接口提示等

// 声明语句
declare var JQuery: (selector: string) => any

// 声明文件 *.d.ts
// 1.ts 会解析项目中所有的 *.ts 文件，包括 *.d.ts
// 2.确保 tsconfig.json 中的 file、include、exclude 确保包含 *.d.ts 文件

// 使用第三方声明文件
// npm install @types/jquery --save-dev

// ============ 全局变量 书写声明文件(以下代码在 *.d.ts 文件下声明 )===================
// 1. declare var 声明全局变量
declare let jQ: (selector: string) => any
// 2. declare function 声明全局方法(支持重载)
declare function jq(selector: string): any
declare function jq(callback: () => any): any
// 3. declare class 声明全局类
declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}
// 4. declare enum 声明全局枚举类型
declare enum Directtions {
  Up,
  Down,
  Left,
  Right
}
// 5. declare namespace 声明全局对象（含有子属性）
// namespace 是 ts 早期时为了解决模块化而创造的关键字， 当 es6 的模块方案退出后 namespace 逐渐被淘汰， 但在声明文件中依然比较常用
declare namespace JQuery1 {
  function ajax(url: string, settings?: any): void
}
// ps: 在 namespace 中在定义声明函数 function ajax 时 ，使用 function ajax 而不是使用  declare function ajax, 也可以使用  const、class、enum
declare namespace JQuery2 {
  function ajax(url: string, settings?: any): void
  const version: number
  class Event {
    blur(eventType: EventType): void
  }
  enum EventType {
    CustomClick
  }
}
// 嵌套 namespace
declare namespace JQuery3 {
  function ajax(url: string, settings: any): void
  namespace fn {
    function extend(Object: any): void
  }
}
// 如果 Jquery4 只有 fn 没有 ajax 情况下可以这样定义
declare namespace JQuery4.fn {
  function extend(Object: any): void
}
// 6. interface 和 type 声明全局类型
interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any
}
declare namespace JQuery5 {
  function ajax(url: string, settings?: AjaxSettings): void
}
// 防止命名冲突 最好放置在 namespace 下
declare namespace JQuery6 {
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any
  }
  function ajax(url: string, settings?: AjaxSettings): void
}
// 声明合并
declare function JQuery7(selector: string): any
declare namespace JQuery7 {；
  function ajax(url: string, settings?: any): void
}

// ========================== npm 包 ==================================
/** 
    1. 一般我们通过如 import foo from 'foo' 引入
    2.尝试给 npm 包创建对应的声明文件前需确认他的声明文件是否存在。如果存在一般会在两个地方
      2.1. 与 npm 包绑定在一起， 判断依据是在 npm 包 package.json 中有 types 字段，或者 index.d.ts
      2.2. 放置在 types 中
      2.3. 如果没有找到需要自己书写声明文件
    3. npm 包创建声明文件两种方式 (如 foo)
      3.1. 创建一个文件 index.d.ts ， 放置在 node_modules/@types/foo，由于 node_modules 不稳定这种方式不建议使用
      3.2. 项目目录下创建 types 文件夹，将 foo 对应的声明文件放置在  types/foo/index.d.ts， 需要配置 tsconfig.json
*/
// 1.export 导出变量
// npm 包的声明文件与全局变量的声明有很大区别， npm 包中使用 declare 不会再声明一个全局变量只会生成一个局部变量， 使用是需要配合 export import 一起使用

// index.d.ts
export const name: string
export function getName(): string
export class Animal1 {
  constructor(name: string)
  sayHi(): string
}
export enum Directtions1 {
  Up,
  Down,
  Left,
  Right
}
export interface Options {
  data: any
}

// index.ts
// import { name, getName, Animal1, Directtions1, Options} from 'foo'

// 混用 declare 和 export
declare const name1: string
declare function getName1(): string
declare class Animal2 {
  constructor(name: string)
  sayHi(): string
}
declare enum Directtions2 {
  Up,
  Down,
  Left,
  Right
}
interface Options1 {
  data: any
}
export {name1, getName1, Animal2, Directtions2, Options1}


// 2.export namespace 导出（含有子属性的）对象

export namespace foo2 {
  const name: string
  namespace bar1 {
    function baz():string
  }
}

// 3.export default   es6 默认导出
// es6 中 export default 可以导出一个默认值， 使用时可以同 import foo from 'foo' 而不是 import { foo } from 'foo'
export default function foo(): string
// import foo from 'foo'

// ps：只有 function、class 和 interface 可以默认导出，其他的变量需要先定义出来再导出  

// 4.export = commonjs 导出模块

// commonjs
// 整体导出
// module.exports = foo
// 单个导出
// exports.bar = bar

// ts 导入方式1
// 整个体导入
// const foo = require('foo')
// 单个导入
// const bar = require('foo').bar

// ts 导入方式2
// 整个体导入
// import * as foo from  'foo'
// 单个导入
// import { bar } from  'foo'

// ts 导入方式3
// 整个体导入
// import foo = require('foo')
// 单个导入
// import bar = foo.bar

// 如果针对使用 commonjs 的库，如果需要写类型声明文件的话
// export = foo3
// declare function foo3(): string
// declare namespace foo3 {
//   const bar: number
// }
// ps： 上例中使用了 export = 之后，就不能再单个导出 export { bar } 了。所以我们通过声明合并，使用 declare namespace foo 来将 bar 合并到 foo 里


// ========================== UMD 库 ==================================

// UMD 库既可以通过  script 标签引入也可以通过 import 引入，ts 提供了一个新的方法 export as namespace
// export as namespace foo
// export = foo
// // 或 export default foo

// declare function foo(): string
// declare namespace foo {
//   const bar: number
// }

// ========================== 直接扩展全局变量 ==================================

// 有的第三方库扩展了一个全局变量，但全局变量的类型却没有更新，会导致 ts 编译错误，此时需要扩展全局变量的类型
// interface String {
//   prependHello(): string
// }
// 'foo'.prependHello()

// ========================== 在 npm 包或者 UMD 库中扩展全局变量 ==================================

// npm 包或者 UMD 库只有 export 导出的类型才能被导入，对此如果导入此库会扩展全局变量，则需要使用另一种语法在声明文件中扩展全局变量类型
declare global {
  interface String {
    prependHello(): string
  }
}
export {}
// ps： 即使此声明文件不需要导出任何东西但还需要导出一个空对象， 用来告诉编译器这是一个模块的声明文件而不是全局变量的声明文件

// ========================== 模块插件 ==================================

// ts 提供一个 declare module 语法，可以扩展原有模块的类型

// import * as moment from  'moment'
// declare module 'moment' {
//   export function foo(): moment.CalendarKey
// }

// 也可以用于一个文件中声明多个模块的类型
declare module 'foo' {
  export interface Foo {
    foo: string
  }
}

declare module 'bar' {
  export function bar(): string
}

// ========================== 声明文件中依赖 ==================================
// ========================== 自动生成声明文件 ==================================
