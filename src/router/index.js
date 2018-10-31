import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import LoginA from '@/components/LoginA'
import Luntan from '@/components/Luntan'
import Luntanxq from '@/components/Luntanxq'
import Regist from '@/components/Regist'
import Search from '@/components/Search'
import Dindan from '@/components/Dindan'
import Luntans from '@/components/tiezi/Luntans'
import Buycar from '@/components/Buycar'
import Details from '@/components/Details'
import Personal from '@/components/personals/Personal'
import Myinfo from '@/components/personals/Myinfo'
import Mypwd from '@/components/personals/Mypwd'
import Myorder from '@/components/personals/Myorder'
import Myaddress from '@/components/personals/Myaddress'
import Collect from '@/components/personals/Collect'
Vue.use(Router);

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
      path: '/logina',
      name: 'logina',
      component: LoginA
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
      path: '/dindan/:bikes_id,:numb',
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
      path: '/details/:bikes_id',
      name: 'details',
      component: Details
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,children:[
        {path:'/',name:'myinfo',component:Myinfo},
        {path:'mypwd',name:'mypwd',component:Mypwd},
        {path:'myorder',name:'myorder',component:Myorder},
        {path:'myaddress',name:'myaddress',component:Myaddress},
        {path:'collect',name:'collect',component:Collect},
      ]
    },
  ]
})
