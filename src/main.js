import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
const eventBus = new Vue()
Vue.prototype.$eventBus = eventBus

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
