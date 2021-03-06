import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

const state = {
    tasks : [
        {id : "1", value : "xubaoshi", isFinish : true, addTime : "2016-04-02"},
        {id : "2", value : "xuning", isFinish : false, addTime : "2016-04-02"}
    ],
    editTask : {}
}
const mutations = {
    CREATE (state, text){
        state.tasks.push({
            id : state.tasks.length,
            value : text,
            isFinish : false,
            addTime : "2016-04-05"
        })
        console.log(state)
    },
    EDIT(state, task){
        state.editTask = task
        console.log(state)
    },
    UPDATE(state, task){
        if(!task.value){
            state.tasks.$remove(task)
        } else {
            state.editTask = {}
        }
    },
    DELETET(state, index){
        state.tasks.splice(index, 1);
    },
    SETF(state, index, type){
        state.tasks[index].isFinish = type;
    },
    ALLR(state, index, type){
        var isAllFinsh = true
        state.tasks.forEach(function(n){
            if(n.isFinish == false){
                isAllFinsh = false;
            }
        })
        if(isAllFinsh){
            state.tasks.forEach(function(n){
                n.isFinish = false;
            })
        } else {
            state.tasks.forEach(function(n){
                n.isFinish = true;
            })
        }
    }
}


export default new Vuex.Store({
    state,
    mutations
})
