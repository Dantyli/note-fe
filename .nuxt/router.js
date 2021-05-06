import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f4e7cf7c = () => interopDefault(import('../pages/articlelist.vue' /* webpackChunkName: "pages/articlelist" */))
const _1caa4694 = () => interopDefault(import('../pages/blogpreview.vue' /* webpackChunkName: "pages/blogpreview" */))
const _bb6db0da = () => interopDefault(import('../pages/detail.vue' /* webpackChunkName: "pages/detail" */))
const _09f19260 = () => interopDefault(import('../pages/index0.vue' /* webpackChunkName: "pages/index0" */))
const _09125afe = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _41ea536c = () => interopDefault(import('../pages/sendblog.vue' /* webpackChunkName: "pages/sendblog" */))
const _52e6e800 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _a9e22b30 = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articlelist",
    component: _f4e7cf7c,
    name: "articlelist"
  }, {
    path: "/blogpreview",
    component: _1caa4694,
    name: "blogpreview"
  }, {
    path: "/detail",
    component: _bb6db0da,
    name: "detail"
  }, {
    path: "/index0",
    component: _09f19260,
    name: "index0"
  }, {
    path: "/posts",
    component: _09125afe,
    name: "posts"
  }, {
    path: "/sendblog",
    component: _41ea536c,
    name: "sendblog"
  }, {
    path: "/",
    component: _52e6e800,
    name: "index"
  }, {
    path: "/:id",
    component: _a9e22b30,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
