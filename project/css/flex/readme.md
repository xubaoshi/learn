# flex #

	.box{
		display:flex;
	}
	// 行内元素
	.box{
		display:inline-flex;
	}
	// webkit 内核的浏览器 必须加上-webkit前缀
	.box{
		display:-webkit-flex
		display:flex
	}

设置Flex布局后，子元素的float、clear和vertical-align属性将失效。

	
## 容器属性 ##
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### flex-direction ###
决定主轴的方向（即项目的排列方向）。

	.box{
		flex-direction:row | row-reverse | column | column-reverse;
	}

- row(默认值)：主轴为水平方向，起点在左端。
- row-reverse:主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse:主轴为垂直方向，起点在下沿。
### flex-wrap ###
默认情况下，项目都排在一条线上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

	.box{
		flex-wrap:nowrap | wrap | wrap-reverse;
	}

- no-wrap(默认)：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse:换行，第一行在下方。
- 
### flex-flow ###
flex-flow属性是flex-direction和flex-wrap属性的简写形式。默认值为 row nowrap.
### justify-content ###

	.box{
		justify-content:flex-start | flex-end | center | space-between | space-around;
	}

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。