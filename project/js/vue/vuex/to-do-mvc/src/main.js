'use strict'

import Vue from 'vue'
import store from './vuex/store'
import App from './components/app.vue'
import Router from 'vue-router'
import routerMap from './router'
import { sync } from 'vuex-router-sync'

Vue.use(Router)
var router = new Router()
routerMap(router)
sync(store, router)
router.start(App,'app')




