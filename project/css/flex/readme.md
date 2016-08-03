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
![](http://i.imgur.com/cZbilVZ.jpg)
	
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
![](http://i.imgur.com/X9wIjdQ.jpg)
- row(默认值)：主轴为水平方向，起点在左端。
- row-reverse:主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse:主轴为垂直方向，起点在下沿。
### flex-wrap ###
默认情况下，项目都排在一条线上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

	.box{
		flex-wrap:nowrap | wrap | wrap-reverse;
	}

- no-wrap(默认)：不换行。 <br>
 ![](http://i.imgur.com/3JwAcO5.jpg)
- wrap：换行，第一行在上方。 <br>
 ![](http://i.imgur.com/WWyrrtR.jpg)
- wrap-reverse:换行，第一行在下方。<br>
 ![](http://i.imgur.com/5bfw21b.jpg)

### flex-flow ###
flex-flow属性是flex-direction和flex-wrap属性的简写形式。默认值为 row nowrap.
### justify-content ###

	.box{
		justify-content:flex-start | flex-end | center | space-between | space-around;
	}

![](http://i.imgur.com/RpICXfo.jpg)

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items ###
定义项目在交叉轴上如何对齐。
	
	.box{
		align-items:flex-start | flex-end |center | baseline | stretch;
	}

![](http://i.imgur.com/xZQru3q.jpg)

- flex-start:交叉轴的起点对齐。
- flex-end:交叉轴的终点对齐。
- center:交叉轴的中点对齐。
- baseline:项目的第一行文字的基线对齐。
- stretch:如果项目没有设置高度或设为auoto，将占满整个容器的高度。

### align-content ###
定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
	
	.box{
		align-content:flex-start | flex-end | center space-between | space-around | stretch;
	}

![](http://i.imgur.com/V2utMkR.jpg)

- flex-start:与交叉轴的起点对齐。
- flex-end:与交叉轴的终点对齐。
- center:与交叉轴的中点对齐。
- space-between:交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around:每根轴线两侧的间隔都相等。轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch(默认值)：轴线占满整个交叉轴。


## 项目属性 ##

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

### order ###
定义项目的排列顺序。数值越小，排列越靠前，默认为0。
	
	.item{
		order:<integer>
	}

![](http://i.imgur.com/6XvSz4C.jpg)
### flex-grow ###
定义项目的放大比例，默认为0，如果存在剩余空间，也不放大。

	.item{
		flex-grow:<number>; /*default 0*/
	}

![](http://i.imgur.com/JZ1Ogdo.jpg)

如果flex-grow属性都为1则他们将等分剩余空间，如果一个项目为2，其他的都为1则实际中此项目比其它的大一倍。

### flex-shrink ###
flex-shrink定义了项目的缩放比例，默认为1，如果空间不足，该项目将缩小。如果一个项目flex-shrink为0，其他项目为1，当空间变小时，其他项目缩小，该项目不缩小。

![](http://i.imgur.com/j4YITGS.jpg)

### flex-basis ###
flex-basis定义了在分配多余空间之前，项目占据的主轴的空间，浏览器根据当前的这个属性，计算主轴是否有多余的空间。默认值为auto,即项目本身的大小。

	.item{
		flex-basis:<length> | auto; /*default auto*/	
	}

它可以设为跟width及heigth相同的值，这样项目将占有固定空间。
### flex ###
flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。

	.item{
		flex:none | [<'flex-grow'> <'flex-shrink'> ? || <'flex-basis'>]
	}

该属性有两个快捷值：auto(1,1,auto) 和 none(0,0,auto).
### align-self ###
align-self 允许单个项目与其他项目不一样的对齐方式，可覆盖align-items的属性。默认值为auto,表示继承父align-items的属性，如果没有父元素等同于strech.

	.item{
		align-self:auto | flex-start | flex-end | center | baseline | stretch; 
	}

![](http://i.imgur.com/M4fry7d.jpg)


### flex练习地址 ###
[http://flexboxfroggy.com/?utm_source=jsgroup](http://flexboxfroggy.com/?utm_source=jsgroup)