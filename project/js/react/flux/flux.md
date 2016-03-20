# React+Flux #

## Flux简介 ##
Flux是Facebook用来构建客户端web应用的应用框架。它利用单向数据流的方式来组合React中的视图组件，它更像是一种模式而不是一个正式的框架。
## Flux的核心部分 ##
![](http://i.imgur.com/8YYOzyp.jpg)
### 1.dispatcher ###
事件调度中心，Flux模型的中心枢纽，管理Flux应用的所有数据流，它本质实在Store中注册回调函数，每个Store注册它自己并提供一个回调函数，当Dispatcher响应Action时，通过已注册的回调函数，将Action提供的数据负载发送给应用中的所有Store。应用层级单例。
### 2.store ###
负责封装应用的业务逻辑跟数据的交互<br>
- Store中包含应用的所有数据<br>
- Store是应用中唯一的数据发生变更的地方<br>
- Store中没有赋值接口，所有的数据变更都是由dispathcher发送到store，新的数据更随着Store触发的change事件传回view。Store对外值暴露getter,不允许提供setter!!禁止在任何地方直接操作Store。
### 3.view ###
- controller-view可以理解成MVC模型中的controller,它一般由应的厅层容器充当，负责从Store中获取数据并将数据传递到子组件中。简单的应用一般只有一个controller-view，复杂的应用中也可以有多个。controller-view是应用中唯一可以操作state的地方（setState()）;<br>
- view(UI组件)ui-component职责单一只允许调用action触发事件，数据从上层容器通过属性传递过来。
### 4.其他 ###
action creators作为dispatcher的辅助函数，通常可以认为是Flux中的第四部分。ActionCreators是相对独立的，它座位语法上的辅助函数以action的形式是的dispatcher传递数据更为便利。
![](http://i.imgur.com/Em1PpjA.jpg)
## Flux的优势 ##
### 1.数据状态变的稳定同时行为可预测 ###
因为angular双向绑定的原因无法知道数据在哪一时刻处于稳定状态,由于双向绑定的原因，行为的流向很难预测，虽然在angular可以通过一些手段依然可以使得数据变得稳定，只是说相对于flux双向邦定比较不稳定。
### 2.所有数据变更都发生在store中 ###
flux里view是不允许直接修改store的，view只能做的是触发action，然后action通过dispatcher的调度最后流向store，所有数据的修改全部都发生在组件的内部,store对外只暴露get接口,set行为都发生在内部,store包含所有相关的数据。
### 3.数据的渲染是自上而下的 ###
view的所有数据来源只应该从属性中传递过来,view的所有表现状态有上层的控制视图（controller-view）的状态决定，controller-view可以理解为容器组件，这个容器有若干细小的子组件。组件不同的状态对应不同的数据，子组件不能有自己的状态。也就是说数据由store传递到controller-view中之后，controller-view通过setState将数据通过属性的方式自上而下传递给各个子view。
### 4.view层变得很薄真正的组件化 ###
由于2、3原因，view自身需要做的事情就变得很少。业务逻辑呗store做了，状态被controller-view做了，
view自己需要做的事根据交互触发不同的action。只关注ui层的交互，大大提高了view组件的复用性。
### 5.dispatcher是个单例 ###
对单个引用而言dispatcher是单例的，最主要的是dispatcher是数据分发中心，所有数据都要流经dispatcher,dispatcher管理不同action与store之间的关系，所有的数据都要在dispatcher留下一笔，基于此我们可以做很多有趣的事情，各种debug工具、动作回滚、日志记录、甚至是权限拦截都可以的。
![](http://i.imgur.com/6WPJS3E.jpg)

