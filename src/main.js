import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'reset-css'
import './assets/editor.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './assets/color.scss'
import './assets/font.css'
import './assets/hljs.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
