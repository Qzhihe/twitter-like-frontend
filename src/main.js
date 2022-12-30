import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/assets/font/font.css'
import '@/assets/css/global.css'

import store from '@/store'
import router from '@/router'
import axios from 'axios'

Vue.prototype.$axios = axios

new Vue({
  // 向应用中注入 router 和 store
  router,
  store,
  render: h => h(App),
}).$mount('#app')
