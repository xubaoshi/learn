/**
  1. javascript 中 Object 及 Map 都是键值对的集合 ，在 Object 中 String 和 Symbol 做为key值, 而 Map的键值可以是任意类型的，有的时候我们希望当键值发生变化时，我们也需要做出特定的反应，那么observable.map将会很有用。
  2. 除 Es6Map规范中提供的方法，在Mobx中可以使用的方法有：
    - toJS() 将 observable 映射转化成普通映射
    - toJSON() 
    - merge(values) 把提供对象的所有键值拷贝到映射中。 values 可以为普通对象、entries等
    - replace(values) 是 .clear.merge(values) 简写形式 
 */

 