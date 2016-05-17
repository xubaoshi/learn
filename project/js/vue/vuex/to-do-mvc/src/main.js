'use strict'

import Vue from 'vue'
import store from './vuex/store'
import App from './components/app.vue'
import Router from 'vue-router'
import filters from './utils/filters'
import VueTouch from 'vue-touch'
import routerMap from './router'
import { sync } from 'vuex-router-sync'

Vue.use(VueTouch)
VueTouch.registerCustomEvent('doubletap', {
    type: 'tap',
    taps: 2
})
VueTouch.registerCustomEvent('tap', {
    type: '',
    taps: 1
})

Vue.use(Router)
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
var router = new Router()
routerMap(router)
sync(store, router)
router.start(App,'app')





