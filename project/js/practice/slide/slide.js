/**
 * Created by xu on 2016/8/28.
 */
;(function($){
	var Slide = function(options){
		this.settings = {
			el : '',
			width : '1000',
			heigth : '270',
			wrapWidth : '640',
			wrapHeight : '270',
			autoPlay : true,
			container : '.container',
			wrap : '.wrap',
			item : '.item',
			prev : '.prev',
			next : '.next'
		};
		this.settings = $.extend(settings, options);

		this.$container = $(this.settings.container);
		this.$wrap = this.$container.find(this.settings.wrap);
		this.$item = this.$container.find(this.settings.item);

		this.init();
	}

	Slide.prototype = {
		_init : function(){
			this.$container.css({
				width : this.settings.width,
				height : this.settings.heigth
			});
			this.$wrap.css({
				width : this.settings.wrapWidth,
				height : this.settings.wrapHeight
			})
		}
	}


	// 导出 兼容commonjs amd cmd
	if(typeof module !== 'undefined' && typeof exports === 'object'){
		module.exports = Slide;
	} else if(typeof  define === 'function' && (define.cmd || define.amd)){
		define(function(){return Slide;});
	} else {
		this.Slide = Slide;
	}
})(jQuery);