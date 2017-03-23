const {Map, List, Seq} = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });

// 1、get and set
// const map2 = map1.set('b', 50)


// 2、copied
// const map2 = map1;
// map1.set('b',100);

// console.log(map1.get('b'));
// console.log(map2.get('b'));

// 3、list
// const list1 = List([1, 2]);
// const list2 = list1.push([3, 4, 5]);
// const list3 = list2.unshift(0);
// const list4 = list1.concat(list2, list3);
// console.log(list1.size);
// console.log(list2.size);
// console.log(list3.size);
// console.log(list4.size);
// console.log(list3.get(0));

// Map
// const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
// const alphaStr = alpha.map((v, k) => k.toUpperCase()).join();
// // console.log(alphaStr);
// const mapone = Map({ a: 1, b: 2, c: 3, d: 4 });
// const maptwo = Map({ c: 10, a: 20, t: 30 });
// const mapthree = { d: 100, o: 200, g: 300 };
// const obj = mapone.merge(maptwo, mapthree).toObject();
// console.log(obj);


// Seq
const myObject = { a: 1, b: 2, c: 3 };
const seqResult = Seq(myObject).map(x => x * x).toObject();
console.log(seqResult);

