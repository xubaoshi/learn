import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

const state = {
    tasks:[
        {id: "1", value: "xubaoshi", isFinish: true, addTime: "2016-04-02"},
        {id: "2", value: "xuning", isFinish: false, addTime: "2016-04-02"}
    ]
}
const mutations = {
    CREATE (state,text){
        alert("hahaha!!!!")
        state.tasks.push({
            id: state.tasks.length,
            value: text,
            isFinish: false,
            addTime: "2016-04-05"
        })
        console.log(state.tasks)
    }
}


export default new Vuex.Store({
    state,
    mutations
})
