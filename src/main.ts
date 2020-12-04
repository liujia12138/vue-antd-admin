import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/scss/index.scss'
import './mock/index'
// quill
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Echarts from 'echarts'


import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = Echarts;

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
