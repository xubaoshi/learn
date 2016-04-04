/**
 * Created by xu on 2016/4/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import headers from './modules/headers'
import createLogger from 'vuex/logger'

Vue.use(Vuex);
Vue.config.debug = true

const debug = process.env.NODE_ENV !== "production"
export default new Vuex.Store({
    modules:{
        headers
    },
    strict:debug,
    middlewares: debug ? [createLogger()] : []
})

