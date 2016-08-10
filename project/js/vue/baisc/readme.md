# Vue #
## Vue组件 ##
组件可扩展HTML元素，封装可重用的代码。在较高层面上，组件是自定义元素。在有些情况组件也可以是原生HTML元素形式，`is` 特性扩展。
### 使用组件 ###
可以用Vue.extend() 创建一个组件构造器：

	var MyComponent = Vue.extend({
		// options
	})
要把这个构造器用作组件，需要用 `Vue.component(tag,construtor)`
	
	// 全局注册组件，tag 为 my-component
	Vue.component('my-component',MyCoponent);

在注册之后，组件便可以用在父实例模块中，以自定义元素 `my-component` 的形式使用。
	
	// html
	<div id="example">
		<my-component></my-component>
	</div>
	
	// js
	var MyComponent = Vue.extend({
		template:'<div>A custom component</div>'
	});
	
	Vue.component('my-component',MyComponent);

	new Vue({
		el:'#example'
	})

### 组件局部注册 ###

	var Child = Vue.extend({
	
	})
	
	var Parent = Vue.extend({
		template:'',
		components:{
			'my-component':Child
		}
	})

### 注册语法糖 ###
可以直接传入选项对象而不是构造器给Vue.component() 和 component 选项。Vue.js 在背后自动调用Vue.extend();

	Vue.component('my-component',{
		template:'<div>A custom component</div>'
	})

	var Parent = Vue.extend({
		components:{
			'my-component':{
				template:'<div>A custom component</div>'	
			}
		}
	})

### 组件选项问题 ###

传入Vue构造器的多数选项也可以用在Vue.extend()中，不过有两个特例：data and el 。试想如果我们简单地把一个对象作为data选项传给Vue.extend():

	var data = {a:1}
	var MyComponent = Vue.extend({
		data:data
	})

这样做的问题是MyComponent所有的实例将共享同一个data对象,因此应使用一个函数作为data选项，函数返回一个新对象；

	var MyComponent = Vue.extend({
		data:function(){
			return {a:1}
		}
	})

同理 el选项用在Vue.extend()中时必须是一个函数。

### is特性 ###
一些HTML元素，如<table>,限制什么元素可以放在它里面。自定义元素不在白名单上，将被放在元素的外面，因而渲染不正确。可以使用 `is` 特性,指示它是一个自定义元素：
	
	<table>
		<tr is="my-component"></tr>
	</table>

## Props ##
### 使用props传递数据 ###
组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用props把数据传给子组件。
"props"是组件数据的一个字段，期望从父组件传下来。子组件需要显式地用`props`选项声明props：

	Vue.component('chlid',{
		props:['msg'],
		template:'<span>{{msg}}</span>'
	})

	<child msg="hello!"></child>
**camelCase(驼峰) vs kebab-case(短横线)**<br>
HTML 特性不区分大小写。名字形式为 camelCase的prop用作特性时，需要转换为kebab-case(短横线)：

	Vue.component('child',{
		props:['myMessage'],
		template:'<span>{{myMessage}}</span>'
	})

	<child my-message="hello!"></child>
### 动态props ###
类似绑定一个普通的特性到一个表达式，也可以用v-bind 绑定动态Props到父组件的数据。每当父组件的数据变化时，也会传导给子组件：

	<div>
		<input v-model="parentMsg">
		<br>
		<child v-bind:my-message="parentMsg"></child>
	</div>
	
	// 简写
	<child :my-message="parentMsg"></child>

### 字面量语法 vs. 动态语法 ###
初学者常犯的一个错误是使用字面量语法传递数值：
	
	// 传递一个字符串 "1"	
	<comp some-prop="1"></comp>

因为它是一个字面prop，它的值以字符串"1"而不是以实际的数字传下去。如果想传递一个实际的javascript数字，需要使用动态与法，从而将它的值当做javascript表达式进行计算：

	// 传递实际的数字
	<comp :some-prop="1"></comp>

### Prop绑定类型 ###
prop默认是单项绑定：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意修改了父组件的状态__这会让应用的数据流难以理解。不过，也可以使用 `.sync` 或 `.once` 绑定修饰符显式地强制双向或单次绑定：

	// 默认单项绑定
	<child :msg="parentMsg"></child>
	// 双向绑定
	<child :msg.sync="parentMsg"></child>
	// 单次绑定
	<child :msg:once="parentMsg">

**prop是一个对象或数组，如果是按引用传递。在子组件内修改它会影响父组件的状态，不管是使用哪种绑定类型。**
### Prop验证 ###
组件可以为props指定验证要求。当组件给其他人使用时这很有用，因为这些验证要求构成了组件的api,确保他人正确使用组件。

	Vue.component('example',{
		props:{
			// 基础类型检测 （'null'意思是任何类型都可以）
			propA:Number
			// 必需且是字符串
			propB:{
				type:String,
				required:true
			},
			// 数字，有默认值
			propC:{
				type:Number,
				default:100
			}，
			// 对象/数组的默认值应当由一个函数返回
			propD:{
				type:Object,
				default:function(){
					return {msg:'hello'}
				}
			},
			// 指定这个prop为双向数据绑定
			// 如果绑定类型不对将抛出一条警告
			propE:{
				twoWay:true
			}
			// 自定义验证函数
			propF:{
				validator:function(value){
					return value > 10
				}				
			},
			// 转换函数 （1.0.12 新增）
			// 在设置值之前转换值
			propG:{
				coerce:function(val){
					return val + '' ； //将值转换为字符串
				}				
			},
			propH:{
				coerce:function(val){
					return JSON.parse(val); // 将JSON字符串转换成对象
				}
			}
			
		}
	})


`type`可以是下面原生构造器：<br>
**- String<br>
- Number<br>
- Boolean<br>
- Function<br>
- Object<br>
- Array<br>**

 type 也可以是一个自定义构造器，使用instanceof检测。
当prop验证失败了，Vue将拒绝在子组件上设置此值，如果使用的是开发版本会抛出一条警告信息。


## 父子组件通信 ##
### 父链 ###
子组件可以用`this.$parent`访问它的父组件。根实例的后代可用this.$root访问它。父组件有一个数组 this.$children,包含它所有的子元素。<br>
尽管可以访问父链上的任何实例，不过子组件应当避免直接依赖父组件的数据，尽量使用props传递数据。另外，在子组件中修改父组件的状态时非常的做法，因为:<br>
1.这让父组件与子组件紧密地耦合；<br>
2.只看父组件，很难理解父组件的状态。因为它可能被任意子组件修改！理想状态下只有组件自己能修改它的状态。
### 自定义事件 ###
Vue实例实现了一个自定义事件接口，用于组件树中的通信。这个事件系统独立于原生DOM事件，做法也不同。<br>
每个Vue实例都是事件触发器：<br>
使用 `$on()` 监听事件；<br>
使用 `$emit()` 在它上面触发事件；<br>
使用 `$dispatch()` 派发事件，事件沿着父链冒泡；<br>
使用 `$broadcast()` 广播事件，事件向下传到给所有的后代；<br>

**不同于DOM事件，Vue事件在冒泡过程中第一次触发回调之后自动停止冒泡,除非回调明确返回true。**<br>

	// html
	
	// 子组件模板
	<template>
		<input v-model="msg">
		<button v-on:click="notify">Dispatch Event</button>
	</template>

	// 父组件模板
	<div id="events-example">
		<p>Messages:{{messages|json}}</p>
		<child></child>
	</div>


	// js

	// 注册子组件
	Vue.component('child',{
		template:'#child-template',
		data:function(){
			return {msg:'hello'}
		},
		methods:{
			notify:function(){
				if(this.msg.trim()){
					this.$dispatch('child-msg',this.msg);
					this.msg='';
				}
			}
		}
	})

	// 启动父组件
	// 将收到消息时将事件推入一个数组
	var parent = new Vue({
		el:'#events-example',
		data:{
			messages:[]
		}
		// 在创建实例时 events 选项简单地调用 $on
		events:{
			'child-msg':function(msg){
				this.messages.push(msg);
			}
		}
	})

### 使用v-on绑定自定义事件 ###
	
	<child v-on:child-msg="handleIt"></child>

当子组件触发 `child-msg`事件，父组件的handleIt方法将被调用。所有影响父组件状态的代码放到父组件的handleIt中；子组件只关注触发事件。

### 子组件索引 ###
可以使用v-ref为子组件指定一个索引ID。

	<div id="parent">
		<user-profile v-ref:profile></user-profile>
	</div>
	
	var parent = new Vue({el:'#parent'});
	var child = parent.$refs.profile;

## 使用Slot分发内容 ##
	
	<app>
		<app-header></app-header>
		<app-footer></app-footer>
	</app>

1.<app>组件不知道它的挂载点会有什么内容，挂载点的内容由<app>的父组件决定的。<br>
2.<app>组件很可能有它自己的模板。<br>
### 编译作用域 ###

	Vue.component('child-component',{
		// 有效
		template:'<div v-show="somProp">Child</div>',
		data:function(){
			return {
				someProp:true
			}
		}	
	})	

### 单个slot ###
父组件内容将被抛弃，除非子组件模板包含<slot>。如果只有一个没有特性的slot，整个内容将被插到所在的地方，替换slot。
	
	// my-component 组件模板
	<div>
		<h1>This is my component</h1>
		<slot>
			This will be replaced.
		<slot>
	</div>

	// 父组件模板
	<my-component>
		<p>p1</p>
		<p>p2</p>	
	</my-component>

	// 渲染结果
	<div>
		<h1>This is my component</h1>
		<p>p1</p>
		<p>p2</p>	
	</div>
### 命名slot ###
<slot>元素有一个特殊的属性 name，用于配置分发内容。多个slot可以有不同的名字。命名slot将匹配所有对应slot特性的内容判断。也可以是一个未命名slot,它是默认slot，作为找不到匹配内容的回退插槽。如果没有默认的slot，不匹配内容将被抛弃。

	// muti-insertion 组件摸板
	<div>
		<slot name="one"></slot>
		<slot></slot>
		<slot name="two"></slot>
	</div>

	// 父组件模板
	<multi-insertion>
		<p slot="one">one</p>
		<p slot="two">two</p>
		<p>Default A</p>
	</multi-insertion>

	// 渲染结果
	<div>
		<p slot="one">one</p>
		<p>Default A</p>
		<p slot=two">two</p>
	</div>


## 动态组件 ##
	
多个组件可以使用同一个挂载点，然后动态地在它们之间切换。使用`<component>`元素，动态地绑定到它的`is`特性：

	new Vue(
		el:'body',
		data:{
			currentView:'home'
		},
		components:{
			home:{},
			posts:{},
			archive:{}
		}
	)

	
	<component :is="currentView">
		// 组件在vm.currentview变化时改变
	</component>


### keep-alive ###
如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个keep-alive 指令参数：

	<component :is="currentView" keep-alive>
		// 非活动组件将被缓存
	</component>

### activate 钩子 ###
在切换组件时，切入组件在切入前可以需要进行一些异步操作。为了控制组件切换时长，给切入组件添加activate钩子：

	Vue.component('activate-example',{
		activate:function(done){
			var self = this;		
		}
		loadDataSync(function(data){
			self.someData = data;
			done()
		})
	})
注意activate钩子只作用于动态组件切换或静态组件初始化中，不作用于使用实例方法手工插入过程。

### transition-mode ###
transition-mode 特性用于指定两个动态组件之间如何过度。
在默认情况下，进入与离开平滑地过度。这个特性可以指定另外两种模式:<br>

`in-out`:新组件先过度进入，等它过渡完成之后当前组件过度出去。
`out-in`:当前组件先过度出去，等它的过度完成之后新组件过度进入。

	// 先淡出再淡入
	<component :is="view" transition="fade" transition-mode="out-in">
	</component>

	// style
	.fade-transition {
  		transition: opacity .3s ease;
		}
	.fade-enter, .fade-leave {
 		 opacity: 0;
	}

### 组件和v-for ###
自定义组件可以像普通元素一样直接使用`v-for`:

	<my-component v-for="item in items"></my-component>

不能传递数据给组件，因为组件的作用域是孤立的。为了传递数据给组件，应当使用props:

	<my-component
		v-for = "item in items"
		:item="item"
		:index="$index">
	</my-component>

不自动把item注入组件的原因是组件跟当前 v-for紧密耦合。显示声明数据来自哪里可以让数据复用在其他地方。
### 编写可复用组件 ###
Vue.js组件API来自三部分--prop,事件和slot：
prop允许外部环境传递数据给组件；
事件允许组件触发外部环境的action；
slot允许外部环境插入内容到组件结构内。
使用 v-bind 和v-on的简写语法，模板的缩进清楚且简洁：

	<my-component
		:foo="baz"
		:bar="qux"
		@event-a="doThis"
		@event-b="doThat">
		<img slot="icon" src="...">
		<p slot="main-text">Hello!</p>
	<my-component>
### 异步组件 ###
在大型应用中，我们可能需要将应用拆分为小块，只在需要时才从服务器中下载。为了让事情更简单，Vue.js将组件定义为一个工厂函数，动态地解析组件的定义。Vue.js只在组件需要渲染时触发工厂函数，并且把结果缓存起来。

	Vue.component('async-example',function(resolve,reject){
		setTimeout(function(){
			resolve({
				template:'<div>I am async!</div>'
			})

		},1000)
	})


	// webpack
	Vue.component('async-webpack-example',function(resolve){
		require(['./my-async-component'],resolve)
	})
### 资源命名约定 ###
资源名通常使用kebab-case而不是camelCase形式。

	// camelCase js
	components:{
		myComponent:{}
	}

	// html
	<my-component></my-component>