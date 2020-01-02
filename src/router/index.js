import Vue from 'vue'
import Router from 'vue-router'
import BuriedPoint from '@/behaviors/BuriedPoint'
import Login from '@/views/Login'
import Home from '@/views/Home'

import user from './user'

Vue.use(Router)

let enterTime = (new Date()).getTime();

let routers = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      ...user
    ]
  }
]

let router = new Router({
  routes: routers
})

//页面浏览时间统计
router.beforeEach((to, from, next) => {
  let endTime = (new Date()).getTime();

  if (from.name) {
    BuriedPoint.recordTime({ pageName: from.name, time: endTime - enterTime })
  }

  next();
})

export default router
