<template>
<todo-header></todo-header>
<todo-content></todo-content>
<todo-footer></todo-footer>
<a v-link="{path:'/'}">跳回list</a>
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
