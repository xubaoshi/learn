<template>
  <div data-index="" class="task-item js-task-item cf">
    <div class="fl">
      <template v-if="task.isFinish">
        <input type="checkbox" checked class="js-resolve" @click="setFinish(index,false)" id="{{index}}"/>
        <label class="js-content finish" v-show="editTask!= task" @dblclick="editMode(task,$event)">{{task.value}}</label>
        <input type="text" v-model="task.value" v-show="editTask == task" @blur="update(task,$event)" @keyup.13="updateTask(task,$event)" @keyup.esc="cancelEdit(task)" v-todo-focus = "editTask == task"/>
      </template>

      <template v-if="!task.isFinish">
        <input type="checkbox" class="js-resolve" id="{{index}}" @click="setFinish(index,true)"/>
        <label class="js-content" v-show="editTask != task" @dblclick="editMode(task,$event)">{{task.value}}</label>

        <input type="text" v-model="task.value" v-show="editTask == task" @blur="update(task,$event)" @keyup.13="updateTask(task,$event)" @keyup.esc="cancelEdit(task)" v-todo-focus = "editTask == task"/>
      </template>
      <!--v-todo-focus="editTask == task"-->
    </div>
    <div class="fr">
      <span class="addTime">{{task.addTime}}</span>
      <a href="javascript:void(0);" class="remove js-remove" @click="deleteTask(index,$event)">&times;</a>
    </div>
  </div>
</template>

<script>

  import{
          edit,
          update,
          deleteT,
          cancel,
          setF
  }from '../../vuex/actions'
  export default{
    props:{
      task:{
        type:Object
      },
      index:{
        type:Number
      }
    },
    vuex : {
      getters : {
        editTask : function(state){
          return state.editTask
        }
      },
      actions : {
        edit,
        update,
        cancel,
        deleteT,
        setF
      }
    },
    directives : {
      'todo-focus':function(value){
        if(!value){
          return
        }
        var el = this.el
        this.vm.$nextTick(function(){
          el.blur()
          el.focus()
        })
      }
    },
    methods : {
      editMode(task)
      {
        this.edit(task)
      },
      updateTask(task)
      {
        this.update(task)
      },
      cancelEdit(task)
      {
        this.cancel(task)
      },
      deleteTask(index)
      {
        this.deleteT(index)
      },
      setFinish(index, type){
        this.setF(index, type)
      }
    }
  }
</script>
