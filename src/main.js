import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'reset-css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/color.scss'
import './assets/font.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
