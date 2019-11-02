// 声明
// 当使用第三方库时，需要引入第三方文件，才能获得对应的代码补全,接口提示等

// 声明语句
declare var JQuery: (selector: string) => any
JQuery('#foo')

// 声明文件 *.d.ts
// 1.ts 会解析项目中所有的 *.ts 文件，包括 *.d.ts
// 2.确保 tsconfig.json 中的 file、include、exclude 确保包含 *.d.ts 文件

// 使用第三方声明文件
// npm install @types/jquery --save-dev

// 书写声明文件(以下代码在 *.d.ts 文件下声明)
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
let cat  = new Animal('Tom')
// 4. declare enum 声明全局枚举类型
// 5. declare namespace 声明全局对象（含有子属性）
// 6. interface 和 type 声明全局类型
