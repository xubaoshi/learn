/**
  1. 基本类型的数据包括: undefined、Null、String、Number、Boolean
     基本类型是不可变的，因此是无法观察的，但有的时候希望当不属于对象属性的基本类型发生变化时候做出相应的反应，可以使用observable.box()
  2. observable.box(values) values 可是任何值， 如果 values 为引用类型时，其第二个参数 deep = false 是用方式同 object、array等
 */

import {observable,autorun} from 'mobx'

const cityName = observable.box('Vienna')
const cityArea = observable.box(200)
console.log(cityName.get())

cityName.observe((change) => {
  console.log('cityName:', change.oldValue,'->',change.newValue)
})

cityArea.observe((change) => {
  console.log('cityArea:', change.oldValue,'->',change.newValue)
})

autorun(() => {
  console.log('autorun=','cityName',cityName.get())
  console.log('autorun=','cityArea',cityArea.get())
})

cityName.set('Amsterdam')
cityArea.set(3000)