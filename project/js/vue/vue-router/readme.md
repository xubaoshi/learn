# vue-router #
**vue-router是vue的一个插件，用来创建单页应用**。<br>

在使用vue-router，有必要了解什么是单页应用及HTML5 History API。

## 一、单页应用 ##
单页应用顾名思义，即web前端只有一个页面，页面切换时，并没有刷新页面而是通过js代码渲染新页面。
### 控制浏览器刷新 ###
1.正常情况下，当页面发生变化时，浏览器会根据新的URL发送请求，页面随之刷新。<br>
2.通过URL.HASH可以解决此问题，即URL中包含#号，#号后面就是URL的HASH，当#号前面的部分不变，后面的部分发生变化时页面既不会发送请求也不会刷新页面。
### 页面无刷新切换 ###
**修改URL**<br>
修改方式:1、直接修改浏览器URL；2、通过链接的点击形式 3.非链接的DOM形式<br>
### 页面与URL对应 ###
页面不刷新，就要求每个页面都有对应的URL，javascript通过判断不同的URL，渲染不同的页面，如果该页面的展示依赖服务器中的数据源，在切换时会发出ajax请求将服务端数据取到，然后会根据此数据源进行页面的渲染。
### 浏览器回退 ###
当通过修改 URL.HASH 的方式来达到URL变化目的时，虽然点击浏览器回退，URL也会变化，但是因为 # 号的缘故，浏览器会不自动刷新到对应的页面。此时需要通过 javascript 来变通实现，定义window的hashchange事件，当URL变化时，会触发这个事件，然后在这个事件中执行新页面渲染。

	window.addEventListener("hashchange",locationHashChanged,false);
	function locationHashChanged(){
		if(loaction.hash  === '#some'){
			//  do ajax	
		}
	}

### 2、HTML5 History API###
#### history.pushState() ####

	window.history.pushState(stateObject, title, url)
**stateObject：** 状态对象，可以理解为拿来存储自定义数据的元素，与url关联在一起;<br>
**title：**标题，目前各类浏览器都会忽略它，可以忽略，目前传空字符串；<br>
**url：**URL地址， 新的历史记录的地址。新的URL不一定是绝对路径；如果是相对路径，它将以当前URL为基准；传入的URL与当前URL应该是同源的，否则，pushState()会抛出异常。该参数是可选的；不指定的话则为文档当前URL。<br>
调用pushState()方法将新生成一条历史记录，方便用浏览器的“后退”和“前进”来导航
#### history.replaceState() ####

	window.history.replaceState(stateObject, title, url)
与history.pushState()方法基本相同，区别只有一点，history.replaceState()不会新生成历史记录，而是将当前历史记录替换掉。
#### window.onpopstate ####
点击浏览器的“前进”、“后退”，或者是由JavaScript调用的history.back()等方法，同时切换前后的两条历史记录都属于同一个网页文档，才会触onpopstate。

## 三、基本使用方法 ##
参见 1.html
## 四、API介绍 ##
### 路由嵌套 ###
**使用场景：**<br>
![](http://i.imgur.com/cR23SzE.png) ![](http://i.imgur.com/66rDXu0.png)<br>
参见 2.html

### 1、API ###
