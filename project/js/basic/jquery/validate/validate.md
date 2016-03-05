# jQuery Validation #
jQuery Validation插件jQuery最常见的插件之一。
## 优点 ##
1.可以减少服务器的压力</BR>

2.缩短用户等待时间和提升用户体验
## 基本用法 ##
### 引入jQuery Validation###
	
	<script src="jquery.js"></script>
	<script src="jquery.validate.js"></script>
	
	// html code
	<form id="commentForm" class="col-md-4 col-md-offset-4" novalidate="novalidate">
	    <div class="form-group">
	        <label>UserName</label>
	        <input type="text" class="form-control" name="userName" placeholder="UserName">
	    </div>
	    <div class="form-group">
	        <label>Password</label>
	        <input type="password" class="form-control" name="password" placeholder="Password">
	    </div>
    	<button type="submit" class="btn btn-default">Submit</button>
	</form>

	// js code
	$(function () {
        $("#commentForm").validate({
            rules: {
                userName: {
                    required:true,
                    minlength:2,
                    maxlength:10
                },
                password: {
                    required:true,
                    minlength:2,
                    maxlength:16
                }
            },
            messages: {
                userName: {
                    required:"此项为必填项！",
                    minlength:"用户名最小为2位",
                    maxlength:"用户名最大为10位"
                },
                password: {
                    required:"此项为必填项！",
                    minlength:"用户名最小为2位",
                    maxlength:"用户名最大为16位"
                }
            }
        });
    });
####ps:####
1. rules及messages 中的userName、password对应input表单的name属性</br>
2. 如果messages属性没有配置错误提示信息，将使用默认的提示信息 

### 基本API ###
method：验证方法，指的是校验的逻辑。</br>
eg：比如email方法，检查输入的文本是否符合email的规则；</br>
method：验证规则，指的是元素和验证方法的关联。</br>
eg：比如页面存在一个name为email的文本框，需要带有email的验证方法；
</br>
</br>
</br>
validate()：是Validation插件的核心方法，定义了基本的校验规则和一些有用的配置项</br>
</br>
</br>
**required:**</br>
**remote:** <br>
1. ajax 方式进行验证<br>
2. 返回：true：通过验证 false：没有通过验证<br>
3. 默认发送get请求，可以通过type属性配置<br>
4. 默认会提交当前验证的值到远程地址，如果需要提交其他的值，可以使用 data 选项<br>
**minlength:** 字符数量的范围</br> 
**maxlength:** 字符数量的范围</br>
**rangelength:** 字符数量的范围</br>
**minlength:** 值大小的范围</br>
**maxlength:** 值大小的范围</br>
**rangelength:** 值大小的范围</br>
**email:** <br>
**url:** <br>
**date:** 将使用new Date()方法将传入参数进行转换如果转换失败提示报错,有效性较宽泛<br>
**dateISO:**ISO标准格式日期校验<br>
**number:** 数字<br>
**digits:** 非负整数<br>
**url:** <br>
## API说明 ##
## 自定义 ##
## 常见类型的验证代码 ##
### form表单添加novalidate ###
### validate debug属性 ###
