import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const { prefix } = require('~/config').route

export function createRouter (store) {
  let router = new Router({
    mode: 'history',
    base: `${prefix}/`,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
      name: 'index',
      path: '/',
      component: r => require.ensure([], () => r(require('src/views/index.vue')), 'index'),
      redirect: { name: 'home' },
      children: [{
        path: '/',
        name: 'home',
        component: r => require.ensure([], () => r(require('src/views/home/home.vue')), 'home')
      }, {
        path: '/passage',
        name: 'passage',
        component: r => require.ensure([], () => r(require('src/views/home/passage.vue')), 'passage')
      }, {
        path: '/load',
        name: 'load',
        component: r => require.ensure([], () => r(require('src/views/home/load.vue')), 'load')
      }]
    }]
  })
  router.beforeEach((to, from, next) => {
    Object.assign(to.params, { store })
    next()
  })
  return router
}
