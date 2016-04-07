<template>
    <div class="all-resolve">
        <input id="allResolve" type="checkbox" @click="allResolve" v-model="checked"/>
        <label for="allResolve">标记所有为已解决</label>
    </div>
    <div class="task-list js-task-list">
        <template v-for="task in tasks">
            <todo-item :task="task" :index="$index"></todo-item>
        </template>
    </div>
</template>
<script>
    import{
        allR
    }from '../../vuex/actions'
    import todoItem from './todoItem.vue'

    export default{
        vuex : {
            getters : {
                tasks : function(state){
                    return state.tasks
                }
            },
            actions : {
                allR
            }
        },
        components:{
            todoItem
        },
        computed : {
            checked () {
                var allChecked = true
                this.tasks.forEach(function(obj){
                    if(obj.isFinish == false){
                        allChecked = false
                        return false
                    }
                })
                return allChecked
            }
        },
        methods : {
            allResolve(){
                this.allR();
            }
        }
    }
</script>
