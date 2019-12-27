// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Browser from '@/behaviors/Browser'

Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  console.log('err', err)
  console.log('vm', vm)
  console.log('info', info)
}

window.addEventListener('beforeunload', e => {
  Browser.close();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
