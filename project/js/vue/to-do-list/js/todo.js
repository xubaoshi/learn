/**
 * Created by xubaoshi on 2016/4/2.
 */


/**
 * 过滤器 过滤已完成未完成
 */
Vue.filter("finishState", function (value, isFinish) {
    var datas = [];
    if (isFinish) {
        value.forEach(function (n) {
            if (n.isFinish) {
                datas.push(n);
            }
        });
    }
    else {
        value.forEach(function (n) {
            if (!n.isFinish) {
                datas.push(n);
            }
        });
    }

    return datas.length;
});

var vm = new Vue({
    el: "#app",
    data: {
        tasks: [
            {id: "1", value: "xubaoshi", isFinish: true, addTime: "2016-04-02"},
            {id: "2", value: "xuning", isFinish: false, addTime: "2016-04-02"}
        ],
        editTask : {}
    },
    methods: {
        delete: function (index, event) {
            console.log(index);
            console.log(event.target);
            this.tasks.splice(index, 1);
        },
        submit: function (event) {
            event.stopPropagation();
            var target = event.target;
            if (!target.value) {
                return;
            }
            var data = {
                id: this.tasks.length,
                value: target.value,
                isFinish: false,
                addTime: moment().format("YYYY-MM-DD")
            };
            console.log(data);
            this.tasks.push(data);
        },
        allResolve: function () {
            if (this.checked) {
                this.tasks.forEach(function (n) {
                    n.isFinish = true;
                })
            } else {
                this.tasks.forEach(function (n) {
                    n.isFinish = false;
                })
            }
        },
        editMode: function (task) {
            this.hisRecord = task.value;
            this.editTask = task;
        },
        update: function (task, event) {
            if (!task.value) {
                this.tasks.$remove(task);
            } else {
                this.editTask = {};
            }
        },
        cancelEdit: function (task) {
            task.value = this.hisRecord;
        }
    },
    directives:{
        'todo-focus':function(value){
            if(!value){
                return
            }
            var el = this.el;
            Vue.nextTick(function(){
                el.blur();
                el.focus();
            })
        }
    }
});

