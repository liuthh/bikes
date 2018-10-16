import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Luntan from '@/components/Luntan'
import Luntanxq from '@/components/Luntanxq'
import Regist from '@/components/Regist'
import Log from '@/components/Log'

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
      name: 'login',
      component: Luntan,children:[]
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
      path: '/log',
      name: 'lgo',
      component: Log
    },
  ]
})
