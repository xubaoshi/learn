/**
  
  1. Array.isArray(observable([])) 都将返回 false ,可以使用 observable([]).slice() 将其转化为原生数组进行使用。
  2. 使用observable.array(values,{deep:false}) 或 observable(values,{deep:false}) 时 如果数组子元素为引用类型，设置 deep 为false将不会子元素的属性进行观察。
 */

import {observable,autorun} from 'mobx'

// basic
// var todos = observable([
//   {title:'Spoil tea',completed:true},
//   {title:'Make coffee',completed:false}
// ])

// autorun(() => {
//   console.log('Remaining:',todos
//     .filter(todo => !todo.completed)
//     .map(todo => todo.title)
//     .join(',')
//   )
// })

// todos[0].completed = false
// todos[2] = {title:'Take a nap',completed:false}
// todos.shift()

// // deep = true
// var todosDeepTrue = observable([
//   {title:'Spoil tea',completed:true,source:['tea','water']},
//   {title:'Make coffee',completed:false,source:['coffee','water']}
// ])
// autorun(() => {
//   console.log('Remaining:',todosDeepTrue
//     .filter(todo => !todo.completed)
//     .map( todo => `
//     ${todo.title} : ${todo.source.join(',')}`)
//     .join('')
//   )
// })
// todosDeepTrue[0].completed = false
// todosDeepTrue[1].source.push('cup')

// deep = false
var todosDeepFalse = observable([
  {title:'Spoil tea',completed:true,source:['tea','water']},
  {title:'Make coffee',completed:false,source:['coffee','water']}
],{deep:false})
autorun(() => {
  console.log('Remaining:',todosDeepFalse
    .filter(todo => !todo.completed)
    .map( todo => `
    ${todo.title} : ${todo.source.join(',')}`)
    .join('')
  )
})
todosDeepFalse[0].completed = false
todosDeepFalse[1].source.push('cup')
