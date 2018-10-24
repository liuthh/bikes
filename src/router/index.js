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
import Personal from '@/components/personal/Personal'
import Myinfo from '@/components/personal/Myinfo'
import Mypwd from '@/components/personal/Mypwd'
import Myorder from '@/components/personal/Myorder'
import Myaddress from '@/components/personal/Myaddress'
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
    {
      path: '/personal',
      name: 'personal',
      component: Personal,children:[
        {path:'',name:'myinfo',component:Myinfo},
        {path:'mypwd',name:'mypwd',component:Mypwd},
        {path:'myorder',name:'myorder',component:Myorder},
        {path:'myaddress',name:'myaddress',component:Myaddress},
      ]
    },
    {
      path: '/myinfo',
      name: 'myinfo',
      component: Myinfo
    },
  ]
})
