<template>
  <span>todo</span>
  <todo-header></todo-header>
  <todo-content></todo-content>
  <todo-footer></todo-footer>
</template>

<script>
  import store from '../../vuex/store'
  import todoHeader from './todoHeader.vue'
  import todoContent from './todoContent.vue'
  import todoFooter  from './todoFooter.vue'
  export default{
      store,
      components:{todoHeader,todoContent,todoFooter}
  }
</script>
