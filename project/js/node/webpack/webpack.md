# webpack #

## babel ##
### babel-polyfill 与 babel-runtime 区别###
<p>
babel转译后的代码要实现源代码同样的功能需要借助一些函数
	
	
	{[name]:'JavaScript'}

	// babel转译后
	'use strict'
	function _defineProperty(obj,key,value){
		if(key in obj){
			Object.defineProperty(obj,key,{
				value:value,
				enumerable:true,
				configureable:true,
				writable:true
			});
		} else {
			obj[key] = value;
		}
	}

	var obj = _defineProperty({},'name','JavaScript')

类似上面`_defineProperty`可能会重复出现在一些模块里，导致编译后代码体积变大。Babel提供了单独的包 babel-runtime 供编译模块复用工具函数。

	// 使用babel-plugin-transform-runtime 使用babel-runtime转译后
	'use strict';
	// 之前的 _defineProperty 函数已经作为公共模块 `babel-runtime/helpers/defineProperty` 使用
	var _defineProperty2 = require('babel-runtime/helpers/defineProperty');
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	var obj = (0, _defineProperty3.default)({}, 'name', 'JavaScript');

</p>

<p>
Babel 默认只转换新的 JavaScript 语法，而不转换新的 API。例如，Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign）都不会转译。如果想使用这些新的对象和方法，必须使用 babel-polyfill，为当前环境提供一个垫片。
</p>