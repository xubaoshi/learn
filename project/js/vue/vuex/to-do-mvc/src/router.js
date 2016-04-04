/**
 * Created by xu on 2016/4/4.
 */
'use strict'
export default function (router) {
    router.map({
        '/': { name: 'index',
            component: require('./components/hello.vue')
        },
        '/hi': { name: 'hi',
            component: function (resolve) {
                require(['./components/hi.vue'], resolve)
            }
        }
    })
}
