<template>
  <span>todo</span>
  <todoHeader></todoHeader>
  <todoContent></todoContent>
  <todoFooter></todoFooter>
</template>

<script>
  import store from '../../vuex/store'
  import todoHeader from './todoHeader'
  import todoContent from './todoContent'
  import todoFooter  from './todoFooter'
  export default{
      store,
      components:{toDoHeader,toDoContent,toDoFooter}
  }
</script>
