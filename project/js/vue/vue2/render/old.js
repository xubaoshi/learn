(function(){
    Vue.component('anchored-heading',{
        template:'#anchored-heading-template',
        props: {
            level: {
                type: Number,
                required: true
            }
        }
    })

    new Vue({
        el:'#app'
    })
})();