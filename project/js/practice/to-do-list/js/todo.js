/**
 * Created by xubaoshi on 2015/12/15.
 */
(function ($) {
    var TODOLIST = function (settings) {
        this.storeKey = settings.storeKey;
        this.tasks = [];
        this.taskList = $(".js-task-list");
        this.init();
    };
    $.extend(TODOLIST.prototype, {
        init: function () {
            var _this = this;
            _this.tasks = _this.getStore(_this.storeKey);
            if (_this.tasks && _this.tasks.length > 0) {
                var result = _this.generateItems(_this.tasks);
                _this.insertItems(result);
                _this.updateIndex();
                _this.updateCount();
            }
            _this.bindEvent(_this);

        },
        bindEvent: function (_this) {
            $("#allResolve").on("click", function () {
                _this.setAllFinish(_this, $(this));
            });
            _this.taskList.on("click", ".js-resolve", function () {
                _this.setItemFinish(_this, null, $(this));
            });
            _this.taskList.on("click", ".js-remove", function () {
                _this.deleteItem($(this), _this);
            });
            $(".press-in").keydown(function (e) {
                if (e.which == 13 && e.target.className.indexOf("js-add") != -1) {
                    _this.createItem(_this);
                }
            });
        },
        createItem: function (_this) {
            var $add = $(".js-add");
            var task = {
                id: moment().format("YYYYMMDDhhmmss"),
                addTime: moment().format("YYYY-MM-DD hh:mm:ss"),
                isFinish: false,
                value: $add.val()
            };
            _this.tasks = this.getStore(this.storeKey) || [];
            _this.tasks.push(task);
            _this.setStore(this.storeKey, this.tasks);
            _this.insertItems(this.generateItems([task]));
            _this.updateIndex();
            _this.updateCount();
            $add.val("");
        },
        generateItems: function (tasks) {
            var _taskTemplate = _.template($("#taskItemTemplate").html());
            return _taskTemplate({tasks: tasks})
        },
        insertItems: function (result) {
            this.taskList.append(result);
        },
        deleteItem: function (target, _this) {
            var $taskItem = $(target).parents(".js-task-item");
            var index = $taskItem.attr("data-index");
            _this.tasks = _this.getStore(_this.storeKey);
            _this.tasks.splice(index, 1);
            _this.setStore(_this.storeKey, _this.tasks);
            $taskItem.remove();
            _this.updateIndex();
            _this.updateCount();
        },
        updateCount: function () {
            var $total = this.taskList.find("input:checkbox");
            var $finish = this.taskList.find("input:checkbox:checked");
            var unFinishNum = $total.length - $finish.length;
            $(".js-unfinish").text(unFinishNum);
            $(".js-finish").text($finish.length);
            $(".js-total").text($total.length);
            if ($total.length > 0 && $finish.length == $total.length) {
                $("#allResolve").prop("checked", true);
            } else if ($total.length > 0 && unFinishNum == $total.length) {
                $("#allResolve").prop("checked", false);
            }
        },
        updateIndex: function () {
            this.taskList.find(".js-task-item").each(function (i) {
                $(this).attr("data-index", i);
            })
        },
        setItemFinish: function (_this, $taskItem, target) {
            _this.tasks = _this.getStore(_this.storeKey);
            $taskItem = $taskItem || $(target).parents(".js-task-item");
            var index = $taskItem.attr("data-index");
            if ($(target).prop("checked")) {
                $taskItem.find(".js-content").addClass("finish");
                _this.tasks[index].isFinish = true;
            } else {
                $taskItem.find(".js-content").removeClass("finish");
                _this.tasks[index].isFinish = false;
            }
            _this.setStore(_this.storeKey, _this.tasks);
            _this.updateCount();
        },
        setAllFinish: function (_this, target) {
            if ($(target).prop("checked")) {
                this.taskList.find(".js-task-item").each(function () {
                    var $cb = $(this).find("input:checkbox").prop("checked", true);
                    _this.setItemFinish(_this, $(this), $cb);
                });
            } else {
                this.taskList.find(".js-task-item").each(function () {
                    var $cb = $(this).find("input:checkbox").prop("checked", false);
                    _this.setItemFinish(_this, $(this), $cb);
                });
            }
            _this.updateCount();
        },
        getStore: function (key) {
            var obj;
            var json = localStorage.getItem(key);
            if (json && json != "") {
                obj = JSON.parse(json) || [];
                return obj;
            }
        },
        setStore: function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
            return null;
        }
    });

    $.toDoList = function (options) {
        var settings = {
            storeKey: "toDoList"
        };
        settings = $.extend(settings, options);
        var toDoList = new TODOLIST(settings);
    }

})(jQuery);