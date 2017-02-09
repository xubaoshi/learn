import bar from './bar'
import cache from './cache'
bar()
console.log(cache.a)
console.log(cache.b)
console.log(cache.a())
console.log(cache.b())