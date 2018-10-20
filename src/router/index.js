import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Luntan from '@/components/Luntan'
import Luntanxq from '@/components/Luntanxq'
import Regist from '@/components/Regist'
import Search from '@/components/Search'
import Dindan from '@/components/Dindan'
import Luntans from '@/components/tiezi/Luntans'
import Buycar from '@/components/Buycar'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: Index

    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/luntan',
      name: 'luntan',
      component: Luntan,children:[
        {path: '', name: 'luntan', component: Luntan},
      ]
    },
    {
      path: '/luntanxq',
      name: 'luntanxq',
      component: Luntanxq
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/dindan',
      name: 'dindan',
      component: Dindan
    },
    {
      path: '/luntans',
      name: 'luntans',
      component: Luntans
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: Buycar
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
  ]
})
