// 类与接口
// 类实现接口
// 实现是面向对象中的一个重要概念。一般讲一个类只能继承另一个类，有时候不同类之间可以有一些公有的特性，就可以把特性提取成接口，用 implements 关键字来实现，可以大大提高灵活性。

interface Alarm {
  alert()
}
class Door {}
class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert')
  }
}
class Car implements Alarm {
  alert() {
    console.log('Car alert')
  }
}

// 一个类可以实现多个接口
interface Alarm {
  alert()
}
interface Light {
  lightOn()
  lightOff()
}
class Car1 implements Alarm, Light {
  alert() {
    console.log('car alert')
  }
  lightOn() {
    console.log('car light on')
  }
  lightOff() {
    console.log('car light off')
  }
}

// 接口继承接口
interface LightableAlarm extends Alarm {
  lightOn()
  lightOff()
}

// 接口继承类
class Point {
  x: number
  y: number
}
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = { x: 1, y: 2, z: 3 }

// 混合类型
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}
// 有时候一个函数还可以有自己的属性和方法
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interval = 123
  counter.reset = function() {}
  return counter
}
let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
