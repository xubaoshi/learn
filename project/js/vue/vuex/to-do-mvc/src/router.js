/**
 * Created by xu on 2016/4/4.
 */
'use strict'
export default function (router) {
    router.map({
        '/': {
            component: require('./components/todo/todo.vue')
        },
        '/todo': {
            component: require('./components/todo/todo.vue')
        }
    })
}
