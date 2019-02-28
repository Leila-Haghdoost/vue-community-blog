import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  //we register our router here
  router,
  data: {
    auth: {}
  },
  render: h => h(App),
}).$mount('#app')
