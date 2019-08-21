import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
//  导入icon.js
import './assets/icon/iconfont'
//  导入element-ui
import ElementUI from './assets/element_ui/elementConfig'
import './assets/element_ui/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
//  axios
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
