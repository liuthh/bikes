// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NavIndex from './components/NavIndex'
import Footer from './components/Footer'
import PageIndex from './components/PageIndex'
Vue.config.productionTip = false


Vue.component('nav-index',NavIndex);
Vue.component('nav-footer',Footer);
Vue.component('page-index',PageIndex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
