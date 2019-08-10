import Vue from 'vue'
import App from './App.vue'
import store from "store"
import router from "router"
import "./reset.css"
import VueTouch from 'vue-touch'
Vue.config.productionTip = false
import "common/cpmponents"
Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  VueTouch,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
