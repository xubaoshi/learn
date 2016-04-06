<template>
  <div>this is content</div>
  <!--<div class="all-resolve">-->
  <!--<input id="allResolve" type="checkbox" @change="allResolve" v-model="checked"/>-->
  <!--<label for="allResolve">标记所有为已解决</label>-->
  <!--</div>-->
  <div class="task-list js-task-list">
    <template v-for="task in tasks">
      <div data-index="" class="task-item js-task-item cf">
        <div class="fl">
          <template v-if="task.isFinish">
            <input type="checkbox" checked class="js-resolve" id="{{$index}}"/>
            <label for="{{$index}}" class="js-content finish" v-show="editTask!= task" @dblclick="editMode(task,$event)">{{task.value}}</label>
            <input type="text" v-model="task.value" v-show="editTask == task" @blur="update(task,$event)" @keyup.13="updateTask(task,$event)" @keyup.esc="cancelEdit(task)"/>
          </template>

          <template v-if="!task.isFinish">
            <input type="checkbox" class="js-resolve" id="{{$index}}"/>
            <label for="{{$index}}" class="js-content" v-show="editTask != task" @dblclick="editMode(task,$event)">{{task.value}}</label>

            <input type="text" v-model="task.value" v-show="editTask == task" @blur="update(task,$event)" @keyup.13="updateTask(task,$event)" @keyup.esc="cancelEdit(task)"/>
          </template>
          <!--v-todo-focus="editTask == task"-->
        </div>
        <div class="fr">
          <span class="addTime">{{task.addTime}}</span>
          <a href="javascript:void(0);" class="remove js-remove" @click="deleteTask($index,$event)">&times;</a>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import{
    edit,
    update,
    cancel,
    deleteT
  }from '../../vuex/actions'
  export default{
    vuex : {
      getters : {
        tasks : function(state){
          return state.tasks
        }
      },
      actions : {
        edit,
        update,
        cancel,
        deleteT
      }
  }
  ,
  methods:{
    editMode(task)
    {
      this.edit(task)
    }
  ,
    updateTask(task)
    {
      this.update(task)
    }
  ,
    cancelEdit(task)
    {
      this.cancel(task)
    }
  ,
    deleteTask(index)
    {
      this.deleteT(index)
    }
  }
  }
</script>
