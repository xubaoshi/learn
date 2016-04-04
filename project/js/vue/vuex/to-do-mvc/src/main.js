'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import routerMap from './router'

Vue.use(Router)
const router = new Router()
routerMap(router)
router.start(App, 'app')

