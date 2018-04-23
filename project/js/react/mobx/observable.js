import {observable,computed} from 'mobx'
const map = observable.map({key:'value'})

// map
map.set('key','new value')
console.log(map.get('key'))

// list
const list = observable([1,2,4])
list[0] = 3
console.log(list[0])

// object
const person = observable({
  firstName:'Clive Staples',
  lastName:'Lewis'
})
person.firstName = 'C.S.'
console.log(person.firstName)

// box
const temperature = observable.box(1)
temperature.set(25)
console.log(temperature.value)

// decorator
class OrderLine {
  @observable price = 0
  @observable amount = 1
  @computed get total() {
    return this.price * this.amount
  }
}
