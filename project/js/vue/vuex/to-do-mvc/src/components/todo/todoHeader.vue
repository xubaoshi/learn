<template>
    <div class="press-in">
        <input type="text" placeholder="增加我的任务" @keyup.13="submit" class="js-add"/>
    </div>
</template>

<script>
    import {
        create
    } from '../../vuex/actions'
    export default{
        vuex: {
            actions: {
                create
            }
        },
        methods : {
            submit(e){
                var text = e.target.value
                if(text.trim()){
                    this.create(text)
                }
                e.target.value = ''
            }
        }
    }
</script>
