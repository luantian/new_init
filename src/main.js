// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Browser from '@/behaviors/Browser'
import BaseException from '@/exception/Base'

import 'normalize.css';
import './scss/global.scss'
import './theme/element-#FF4C5B/index.css'
import { Container, Main, Button, Select, Option, Pagination } from 'element-ui';

Vue.use(Container)
Vue.use(Main)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)

Vue.config.productionTip = false

window.addEventListener('beforeunload', e => {
  Browser.close();
})

/**
 * vue组件内的同步异常捕获
 */
Vue.config.errorHandler = BaseException.vueError;

/**
 * promise异常捕获
 */
window.addEventListener("unhandledrejection", BaseException.promiseError);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
