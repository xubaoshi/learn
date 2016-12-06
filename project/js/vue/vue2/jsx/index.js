import Vue from 'vue'
import AnchoredHeading from './AnchoredHeading.vue'

new Vue({
    el:'#app',
    render (h) {
        return (
            <AnchoredHeading level={1}><span>Hello</span> world!</AnchoredHeading>
        )
    }
})