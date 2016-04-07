<template>
    <div class="h1 title">我的任务列表</div>
    <todo-header></todo-header>
    <todo-content></todo-content>
    <todo-footer></todo-footer>
    <a class="back-list" v-link="{path:'/'}">back to SB-APPS</a>
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
