<template>
  <div>this is content</div>
  <!--<div class="all-resolve">-->
    <!--<input id="allResolve"  type="checkbox" @change="allResolve" v-model="checked"/>-->
    <!--<label for="allResolve">标记所有为已解决</label>-->
  <!--</div>-->
  <!--<div class="task-list js-task-list">-->
    <!--<template v-for="task in tasks">-->
      <!--<div data-index="" class="task-item js-task-item cf">-->
        <!--<div class="fl" >-->
          <!--<template v-if="task.isFinish">-->
            <!--<input type="checkbox" checked class="js-resolve"   id="{{$index}}"/>-->
            <!--<label for="{{$index}}" class="js-content finish" v-show="editTask!= task" @dblclick="editMode(task,$event)" >{{task.value}}</label>-->
            <!--<input type="text"-->
                    <!--v-model="task.value"-->
                    <!--v-todo-focus = "editTask == task"-->
                    <!--v-show="editTask == task"-->
                    <!--@blur="update(task,$event)"-->
                    <!--@keyup.13="update(task,$event)"-->
                    <!--@keyup.esc="cancelEdit(task)"/>-->
          <!--</template>-->

          <!--<template v-if="!task.isFinish">-->
            <!--<input type="checkbox" class="js-resolve"  id="{{$index}}"/>-->
            <!--<label  for="{{$index}}" class="js-content" v-show="editTask != task" @dblclick="editMode(task,$event)">{{task.value}}</label>-->

            <!--<input type="text"-->
                    <!--v-model="task.value"-->
                    <!--v-todo-focus = "editTask == task"-->
                    <!--v-show="editTask == task"-->
                    <!--@blur="update(task,$event)"-->
                    <!--@keyup.13="update(task,$event)"-->
                    <!--@keyup.esc="cancelEdit(task)"/>-->
          <!--</template>-->
        <!--</div>-->
        <!--<div class="fr">-->
          <!--<span class="addTime">{{task.addTime}}</span>-->
          <!--<a href="javascript:void(0);" class="remove js-remove"  @click="delete($index,$event)">&times;</a>-->
        <!--</div>-->
      <!--</div>-->
    <!--</template>-->
  <!--</div>-->
</template>
