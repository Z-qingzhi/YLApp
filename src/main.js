import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import './assets/css/base.css'
import './assets/css/MaterialIcons.css'
import './assets/js/jquery-2.2.0.js'

import VueRouter from 'vue-router'
import routes from './router.js'


Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
