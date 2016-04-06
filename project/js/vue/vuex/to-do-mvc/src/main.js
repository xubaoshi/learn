'use strict'

import Vue from 'vue'
import store from './vuex/store'
import App from './components/app.vue'
import Router from 'vue-router'
import filters from './utils/filters'
import routerMap from './router'
import { sync } from 'vuex-router-sync'

Vue.use(Router)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
var router = new Router()
routerMap(router)
sync(store, router)
router.start(App,'app')





