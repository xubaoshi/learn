## Proxy ##

Proxy用于修改某些操作的默认行为，等同于语言层面做出修改，即对编程语言进行编程。可以理解成在目标对象之前假设一层拦截，外界对该对象的访问必须先经过这一层，对外界的访问进行过滤和改写。

	var obj = new Proxy({},{
		get: function(target,key,recevier){
			console.log(`getting $(key)!`);
			return Reflect.get(target,key,recevier);
		},
		set: function(){
			console.log(`setting $(key)!`);
			return Reflect.set(target,key,value,recevier);
		}		
	})

	object.count = 1;  // setting count!
	++object.count;    // 1. getting count! 2.setting count! 3.2

上述例子是Proxy重载了点运算符，即用自己的定义覆盖了语义的原始定义。

	var proxy = new Proxy(target,handler);

new Proxy() 表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handlee参数也是一个对象，用来定制拦截行为.

	var proxy = new Proxy({}, {
		get : function(target, property){
			return 35;
		}
	})
	
	console.log('time' + proxy.time);     // 35
	console.log('name' + proxy.name);     // 35
	console.log('title' + proxy.title);   // 35

上述代码拦截目标对象的访问请求

	var target = {};
	var handler = {};
	var proxy = new Proxy(target,handler);
	proxy.a = 'b';
	target.a;       // b

上述代码handler是一个空对象没有起到任何的拦截效果。<br>

**技巧:将Proxy设置到object.proxy,可以在object对象上调用**

	var object = {proxy: new Proxy(target,handler)};

Proxy实例也可以作为其他对象的原型对象。

	var proxy = new Proxy({
		get: function(target,property){
			return 35;
		}
	});

	let obj = Object.create(proxy);
	obj.time; // 35



## Reflect ##

Reflect 对象与proxy对象一样，也是es6为了操作对象提供的api。

