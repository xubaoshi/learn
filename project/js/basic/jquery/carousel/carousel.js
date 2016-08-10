/**
 * Created by xubaoshi on 2016/8/10.
 */
;(function($){
	var Carousel = function($poster){
		var self = this;
		this.$poster = $poster;                                            // 父容器
		this.$posterItemMain = $poster.find('.poster-list');               // ul 容器
		this.$prevBtn = $poster.find('.poster-prev-btn');                  // 上一个按钮
		this.$nextBtn = $poster.find('.poster-next-btn');                  // 下一个按钮
		this.$posterItems = $poster.find('.poster-item');                  // li集合
		if(this.$posterItems.length % 2 == 0){
			this.$posterItemMain.append(this.$posterItems.eq(0).clone());
			this.$posterItems = this.$posterItemMain.children();
		}
		this.$posterFirstItem = this.$posterItems.first();                 // 首个li
		this.$posterLastItem = this.$posterItems.last();                   // 最后一个li
		this.rotateFlag = true;                                            // 是否旋转

		this.setting = {                                                   // 默认配置
			"width" : 1000,                                                  // 幻灯片宽度
			"height" : 270,                                                  // 幻灯片高度
			"posterWidth" : 640,                                             // 第一帧宽度
			"posterHeight" : 270,                                            // 第一帧高度
			"scale" : 0.9,                                                   // 显示比例
			"speed" : 500,                                                   // 速度
			"autoPlay" : false,                                              // 是否自动播放
			"delay" : 5000,                                                  // 延时
			"verticalAlign" : "middle"                                       // 垂直对齐方式
		}

		$.extend(this.setting, this.getSetting());

		// 根据配置参数设置
		this.setSettingValue();
		this.setPosterPos();

		// 左旋转按钮
		this.$nextBtn.on('click', function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouseRotate('left');
			}
		});

		// 右旋转按钮
		this.$prevBtn.on('click', function(){
			if(self.rotateFlag){
				self.rotateFlag = false;
				self.carouseRotate('right');
			}
		});

		// 是否开启自动播放
		if(this.setting.autoPlay){
			this.autoPlay();
			this.$poster.hover(function(){
				window.clearInterval(self.timer);
			}, function(){
				self.autoPlay();
			});
		}
	};
	Carousel.prototype = {
		/**
		 * 自动播放
		 */
		autoPlay : function(){
			var self = this;
			this.timer = window.setInterval(function(){
				self.$nextBtn.click();
			}, this.setting.delay);
		},
		/**
		 * 滚动函数
		 * @param dir  方向
		 */
		carouseRotate : function(dir){
			var _this_ = this;
			var zIndexArr = [];
			this.$posterItems.each(function(){
				var self = $(this),
					$to = (dir == 'left')
						? (self.prev().get(0) ? self.prev() : _this_.$posterLastItem)
						: (self.next().get(0) ? self.next() : _this_.$posterFirstItem);
				width = $to.width(),
					height = $to.height(),
					zIndex = $to.css('zIndex'),
					opacity = $to.css('opacity'),
					left = $to.css('left'),
					topH = $to.css('top');
				zIndexArr.push(zIndex);
				self.animate({
					width : width,
					height : height,
					opacity : opacity,
					left : left,
					top : topH
				}, _this_.setting.speed, function(){
					_this_.rotateFlag = true;
				})
			})
			// 更换所有li的z-index
			this.$posterItems.each(function(i){
				$(this).css('zIndex', zIndexArr[i]);
			})
		},
		/**
		 * 获取自定配置信息
		 */
		getSetting : function(){
			var selfSetting = this.$poster.attr('data-setting');
			if(selfSetting && selfSetting != ''){
				return $.parseJSON(selfSetting);
			} else {
				return {};
			}
		},
		/**
		 * 根据配置设置DOM对象的css属性
		 */
		setSettingValue : function(){
			var w = (this.setting.width - this.setting.posterWidth) / 2;
			this.$poster.css({
				width : this.setting.width,
				heigth : this.setting.height
			});
			this.$posterItemMain.css({
				width : this.setting.width,
				heigth : this.setting.height
			})
			// 切换按钮设置
			var btnCssObj = {
				width : w,
				height : this.setting.height,
				zIndex : Math.ceil(this.$posterItems.length / 2)
			};
			this.$nextBtn.css(btnCssObj);
			this.$prevBtn.css(btnCssObj);
			this.$posterFirstItem.css({
				width : this.setting.posterWidth,
				height : this.setting.posterHeight,
				left : w,
				top : 0,
				zIndex : Math.floor(this.$posterItems.length / 2)
			});
		},
		/**
		 *  设置剩余帧的位置关系
		 */
		setPosterPos : function(){
			var self = this;
			var $sliceItems = this.$posterItems.slice(1),
				sliceSize = $sliceItems.length / 2,
				$rightSlice = $sliceItems.slice(0, sliceSize),
				level = Math.floor(this.$posterItems.length / 2),
				$leftSlice = $sliceItems.slice(sliceSize);

			// 设置右侧帧的位置关系、宽度、高度、top
			var rw = this.setting.posterWidth,
				rh = this.setting.posterHeight,
				gap = ((this.setting.width - this.setting.posterWidth) / 2) / level;
			var firstLeft = (this.setting.width - this.setting.posterWidth) / 2;
			var fixOffsetLeft = firstLeft + rw;
			$rightSlice.each(function(i){
				level--;
				rw = rw * self.setting.scale;
				rh = rh * self.setting.scale;
				var j = i;
				$(this).css({
					zIndex : level,
					width : rw,
					height : rh,
					opacity : 1 / (++j),
					left : fixOffsetLeft + (++i) * gap - rw,
					top : self.setVerticalAlign(rh)
				});
			});

			// 设置左侧帧位置关系、宽度、高度、top
			var lw = $rightSlice.last().width(),
				lh = $rightSlice.last().height(),
				oloop = Math.floor(this.$posterItems.length / 2);
			$leftSlice.each(function(i){
				$(this).css({
					zIndex : i,
					width : lw,
					height : lh,
					opacity : 1 / oloop,
					left : i * gap,
					top : self.setVerticalAlign(lh)
				});
				lw = lw / self.setting.scale;
				lh = lh / self.setting.scale;
				oloop--;
			});
		},
		/**
		 *  设置垂直对齐方式
		 */
		setVerticalAlign : function(height){
			var verticalType = this.setting.verticalAlign,
				top = 0;
			if(verticalType == 'middle'){
				top = (this.setting.height - height) / 2;
			} else if(verticalType == 'top'){
				top = 0;
			} else if(verticalType == 'bottom'){
				top = this.setting.height - height;
			} else {
				top = (this.setting.height - height) / 2;
			}
			return top;
		}
	};
	Carousel.init = function($posters){
		var _this_ = this;
		$posters.each(function(){
			new _this_($(this));
		})
	};
	window['Carousel'] = Carousel;
})(jQuery);
