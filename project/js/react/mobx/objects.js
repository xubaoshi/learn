import {observable,autorun,action,set,get} from 'mobx'

// 1.使用 observable 方法初始化对象，对象的属性是可观察的，后面添加的新属性也是可观察的。初始加载对象是可以被观察的，而后面没有通过 set/extendObservable 添加的属性是不会被观察的。
// 2. autorun 只会观察其内部所用到的对象属性，所用的对象属性发生变化才会触发其内部执行函数，而相同对象其他属性发生变化不是触发。
// 3.如果将 observable 第三个参数设置为 {deep:false} ,如果对象属性为引用类型的对象，则该属性内部发生了变化是不会观察的，除非使用 extendObservable 进行处理。

const person = {
  name:'John',
  age:42,
  showAge:false,
  get labelText() {
    return this.showAge ? `${this.name} (age:${this.age})` : this.name
  },
  setAge(age) {
    this.age = age
  }
}


// 1. 默认
const obPerson = observable(person,{setAge:action})
autorun(() => {
  console.log(obPerson.labelText)
})
autorun(() => {
  console.log(get(obPerson,'sex'))
})
obPerson.showAge = true  //  John (age:42)
obPerson.name = 'Dave'   //  Dave (age:42)
obPerson.setAge(21)      //  Dave (age:21)
obPerson.sex = 'a'       //  无效
obPerson['sex'] = 'a'    //  无效
obPerson['sex'] = 'b'    //  无效
set(obPerson,{sex:'d'})  //  d

// // 2. 引用类型 
// const personTwo = {
//   name:'John',
//   age:42,
//   education : [{
//     name:'BeiJingDaXue',
//     location:'beijing',
//   }]
// }

// deep = true
// const obPersonTwo = observable(personTwo)
// autorun(() => {
//   console.log('obPersonTwo',obPersonTwo.education[0].name)
//   console.log('obPersonTwo',obPersonTwo.education[0].location)
// })
// obPersonTwo.education[0].name = 'NanJingDaXue'  // obPersonTwo NanJingDaXue obPersonTwo beijing
// obPersonTwo.education[0].location = 'NanJing'   // obPersonTwo NanJingDaXue obPersonTwo NanJing

// // deep = false
// const obPersonDeep = observable(personTwo,{},{deep:false})
// autorun(() => {
//   console.log('obPersonDeep',obPersonDeep.education[0].name)
//   console.log('obPersonDeep',obPersonDeep.education[0].location)
// })
// obPersonDeep.education[0].name = 'ZheJiangDaXue' // 失效
// obPersonDeep.education[0].location = 'ZheJiang'  // 失效