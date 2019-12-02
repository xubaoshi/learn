// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {}
// right
handleEvent(document.getElementById('hello'), 'scroll')
// error
// handleEvent(document.getElementById('world'), 'dbclick')
// index.ts(10,47): error TS2345: Argument of type '"dbclick"' is not assignable to parameter of type 'EventNames'.

// ps: 类型别名与字符串字面量类型都是使用 type 进行定义