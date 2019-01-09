import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import moment from 'vue-moment'
import VueLodash from 'vue-lodash'
import Vuetify from 'vuetify'

Vue.use(VueLodash)
Vue.use(moment)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
