<h1>JavaScript 异步方案</h1>
<h2>同步模式与异步模式</h2>
<p>JavaScript中异步的概念很重要，特别是在ajax提出之后，它给web带来了很大的影响。</p>
<p>所谓同步模式便是程序按照顺序一步一步的执行，优点在于代码书写简单，一目了然，执行环境较为单纯。缺点在于只要一个任务执行时间过长，其它的任务都需要排队等候，拖延整个程序的运行时间。如：有的时候会因为一段js代码执行时间过长造成浏览器页面假死的状态。</p>
<p>异步模式，一个程序可以拆解成一个个的任务，同步模式下每一个任务都会按照顺序执行，前一个任务执行完毕后才会去执行下一个任务，而异步模式中，后一个任务不需要等待前一个任务执行结束后就可以执行。每一个任务都对应有一个或多个回调函数，前一个任务执行完毕时，不会执行下一个任务而是执行当前任务对应的回调函数。<br></p>
<p>在浏览器如果一个任务耗时过长的话异步执行会显得尤为重要，可以避免浏览器失去响应。服务端（nodejs）如果所有的请求（http）都是同步的，长时间会导致服务器性能急剧下降。</p>
<h2>传统异步调用</h2>	
setTimeout与setInterval是在书写js代码中经常用的方法，这两个函数都是在一段时间间隔内执行某一段代码，如下面的例子中的setTimeout函数设置间隔timeout，执行`console.log('1')`,虽然规定时间，但事实上会有一点延迟的，js认为当前线程中没有同步的代码执行后才会执行异步代码。

	// setTimeout 与 setInterval
	var timeout = 0;
	setTimeout(function() {
	    console.log('1');
	}, timeout);
	console.log('2');

	// result
	2
	1

	var t = true;
	setTimeout(function(){
	    console.log('1');
	},timeout)
	
	console.log('死循环开始！');
	while(t){}
	
	console.log('2');
	
	// result
	死循环开始！

<h2>Promise</h2>
<h2>Generator 函数</h2>
<h2>async/await</h2>
<h2>RxJS</h2>