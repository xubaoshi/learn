/**
 * Created by xubaoshi on 2015/12/15.
 */
(function ($) {
    var TODOLIST = function (settings) {
        this.storeKey = settings.storeKey;
        this.tasks = {};
        this.taskList = $(".js-task-list");
        this.init();
    };
    $.extend(TODOLIST.prototype, {
        init: function () {
            this.tasks = this.getStore(this.storeKey);
            if(this.tasks && this.tasks.length > 0){

            }
        },
        bindEvent: function () {

        },
        createItem: function () {

        },
        insertItems:function(items){

        },
        deleteItem: function () {

        },
        updateCount: function () {

        },
        setItemFinish: function () {

        },
        setAllFinish: function () {

        },
        getStore: function (key) {
            return localStorage.getItem(key);
        },
        setStore: function (key, value) {
            localStorage.setItem(key, value);
            return null;
        }
    });

    $.fn.toDoList = function (options) {
        var settings = {
            storeKey: "toDoList"
        };
        settings = $.extend(settings, options);
        var toDoList = new TODOLIST(settings);
    }

})(jQuery);