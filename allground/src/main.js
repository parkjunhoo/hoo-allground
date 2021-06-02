import 'babel-polyfill'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// import 'es6-promise/auto'
import 'jodit/build/jodit.min.css'
import Vue from 'vue'
import JoditVue from 'jodit-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AOS from 'aos';
import "aos/dist/aos.css";
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(JoditVue)
Vue.use(VueAnalytics, {
  id: 'G-W03KTZG3B7',
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
})
new Vue({
  created(){
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
