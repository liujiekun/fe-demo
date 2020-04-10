import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import root from './router'
import { beforeEach } from '@/util/router.each'
import './assets/css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/app.css'
import './assets/iconfont/iconfont.css'

let router = new VueRouter({
  routes: [...root]
})

beforeEach(router)

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
