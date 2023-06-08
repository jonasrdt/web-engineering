import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38ca7e5e = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _0b68e502 = () => interopDefault(import('../pages/erstifahrt.vue' /* webpackChunkName: "pages/erstifahrt" */))
const _7bd30feb = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _9ba92658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _38ca7e5e,
    name: "admin"
  }, {
    path: "/erstifahrt",
    component: _0b68e502,
    name: "erstifahrt"
  }, {
    path: "/login",
    component: _7bd30feb,
    name: "login"
  }, {
    path: "/",
    component: _9ba92658,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
