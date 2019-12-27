import Vue from 'vue'
import Router from 'vue-router'
import BuriedPoint from '@/behaviors/BuriedPoint'
import HelloWorld from '@/components/HelloWorld'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'

Vue.use(Router)

let enterTime = (new Date()).getTime();

let routers = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/pageone',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/pagetwo',
    name: 'PageTwo',
    component: PageTwo
  },
]

let router = new Router({
  routes: routers
})

router.beforeEach((to, from, next) => {
  let endTime = (new Date()).getTime();

  if (from.name) {
    BuriedPoint.recordTime({ pageName: from.name, time: endTime - enterTime })
  }

  next();
})

export default router
