// Import System requirements
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import Auth from './auth/Auth'
import Toasted from 'vue-toasted'
import { ServerTable } from 'vue-tables-2'
// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'

// Import Views - Top level
import AppView from './components/App.vue'

// imprt modal component
import vmodal from 'vue-js-modal'

// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(ServerTable, {}, true)
Vue.use(vmodal)
Vue.use(Toasted, {
  duration: 3000
})
// Enable devtools
Vue.config.devtools = true

// Routing logic
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://192.168.0.15:3000'
Vue.http.options.xhr = {withCredentials: true}

Vue.http.interceptors.push(function (request, next) {
  const auth = new Auth(this.$resource)
  request.headers['Accept'] = 'application/json'
  request.headers['Content-Type'] = 'application/json'
  request.headers['Access-Control-Allow-Origin'] = '*'
  request.headers.set('Authorization', store.state.token)
  next(function (response) {
    auth.checkExpiredToken(response, request)
      .then(function (response) {
        return response
      })
  })
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.state.token) {
      next()
      return
    }
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

sync(store, router)

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(AppView)
})
