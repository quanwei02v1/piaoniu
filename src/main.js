import Vue from 'vue'
import App from './App.vue'
import router from 'router/router.js'
import store from 'store/store.js'
import VueTouch from 'vue-touch'
import "common/components/index.js" 
Vue.config.productionTip = false
Vue.use(VueTouch,{name:'v-touch'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
