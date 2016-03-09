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
**method**：验证方法，指的是校验的逻辑。</br>
**eg：**比如email方法，检查输入的文本是否符合email的规则；</br>
**method**：验证规则，指的是元素和验证方法的关联。</br>
**eg：**比如页面存在一个name为email的文本框，需要带有email的验证方法；</br>
**validate()**：是Validation插件的核心方法，定义了基本的校验规则和一些有用的配置项,参考上面代码</br>
**required:**</br>
**remote:** <br>
1. ajax 方式进行验证<br>
2. 返回：true：通过验证 false：没有通过验证<br>
3. 默认发送get请求，可以通过type属性配置<br>
4. 默认会提交当前验证的值到远程地址，如果需要提交其他的值，可以使用 data 选项<br>

	//get
	remote: "remote.json"

	// post 
	remote: {
	    url: "remote.json",
	    type: "post",
	    dataType: "json",
	    data: {
	        time1:111,
	        test: function () {
	            return $("[name='email']").val();
	        }
	    }
	
	}
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
**valid:** 检查表单或表单元素是否有效，返回true/false<br>

	// 表单校验
	$("#commentForm").valid();
	// 表单元素校验
	$("[name='userName']").valid();
**rules:**针对表单元素的方法<br>
1. rules() 获取表单元素的校验规则<br>
2. rules("add",rules) 向表单元素添加校验规则<br>
3. rules("remove",rules) 删除表单元素校验规则<br>

		// 1.rules()
        console.log($userName.rules());
        // 2.rules("add",rules)
        $userName.rules("add",{
           number:true
        });
        console.log($userName.rules());
        // 3.rules("remove",rules)
        $userName.rules("remove",{
            number:true
        })
### Validator对象 ###
**validate()：**方法返回的对象，Validator对象有很多有用的方法：<br>
	
	var validator = $("#commentForm").validate();
**Validator.form()：**验证表单是否有效，返回true/false<br>
**Validator.element(element)：**验证某个元素是否有效 返回true/false<br>
**Validator.resetForm()：**将表单恢复到验证前原来的状态<br>
**Validator.showErrors(errors)：**针对某个元素显示特定的错误信息<br>
**Validator.numberOfInvalids()：** 返回无效的表单元素数量<br><br>
**Validator对象静态方法:**<br>
**jQuery.validator.addMethod(name,method[,message]):** 增加自定义方法
**jQuery.validator.format(template,argument,argumentN...):**格式化字符串，用参数代替模板中的{n}，主要用作验证规则的提示语。<br>
**jQuery.validator.setDefaults(options):**修改插件默认配置 如：debug：true<br>
**jQuery.validator.addClassRules(name,rules):**为某些名为name的class增加组合验证类型<br>
### Validate方法配置项 ###
**submitHandler：**通过验证后运行的函数，可以加上表单提交的方法<br>
**invalidHandler：**无效表单提交后运行的函数<br>
**ignore：** 对某些元素不进行验证<br>
**rules:**定义校验规则<br>
**messages:**定义提示信息<br>
**groups:**对一组元素的验证，用一个错误提示，用errorPlacement控制把错误信息放在哪里<br>
**onsubmit:**是否在提交时验证<br>
**onfocusout:**是否在获取焦点时验证<br>
**onkeyup:**是否在敲击键盘时验证<br>
**onclick:**是否在鼠标点击时验证，一般用于checkbox或者radio<br>
**focusInvalid：**提交表单后，未通过验证的表单（第一个或提交之前获得焦点的未通过验证的表单）是否会获得焦点<br>
**focusCleanup:** 当未通过验证的元素获得焦点时，是否移除错误提示<br>
**errorClass:**指定错误提示的css类名，可以自定义错误提示的样式<br>
**validClass:**指定验证通过的css类名<br>
**errorElement:**使用什么标签标记错误<br>
**wrapper:**使用什么标签将errorElement包起来<br>
**errorLabelContainer:**把错误信息统一放在一个容器里面<br>
**errorContainer:** 显示或隐藏验证信息，可以自动实现有错误出现时把容器变为显示，无错误时隐藏<br>
**showErrors:**可以显示总共有多少个未通过验证的元素<br>
**errorPlacement:**自定义错误信息放到哪里<br>
**success:**要验证的信息验证通过的动作<br>
**highlight:**可以给未通过验证的元素添加效果<br>
**unhighlight:**去除未通过验证的元素的效果，一般和highlight一起使用<br>

### 选择器扩展 ###
**:blank:** 选择所有值为空的元素 （trim除全角空格）
**:filled:** 选择所有值不为空的元素 (trim后)
**:unchecked:**选择所有没有被选中的元素 (checkbox radio)

## 自定义 ##
## 常见类型的验证代码 ##
### form表单添加novalidate ###
### validate debug属性 ###
