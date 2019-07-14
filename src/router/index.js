import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DefaultPage from '@/layout/default.vue'
import BlankPage from '@/layout/blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DefaultPage',
      component: DefaultPage,
      redirect:'/index',
      children: [
        {
          path: '/index',
          name:'index',
          component:()=> import ('@/page/index.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'PlankPage',
      component: BlankPage
    }
  ]
})
