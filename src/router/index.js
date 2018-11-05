import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import LoginA from '@/components/LoginA'
import Luntanxq from '@/components/Luntanxq'
import Regist from '@/components/Regist'
import Search from '@/components/Search'
import SearchCar from '@/components/SearchCar'
import Dindan from '@/components/Dindan'
import Dindans from '@/components/Dindans'
import Luntans from '@/components/tiezi/Luntans'
import Buycar from '@/components/Buycar'
import Detail from '@/components/Detail'
import Personal from '@/components/personals/Personal'
import Myinfo from '@/components/personals/Myinfo'
import Myinfos from '@/components/personals/Myinfos'
import Mypwd from '@/components/personals/Mypwd'
import Myorder from '@/components/personals/Myorder'
import Myaddress from '@/components/personals/Myaddress'
import Collect from '@/components/personals/Collect'
import Myimg from '@/components/personals/Myimg'
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
      path: '/search/',
      name: 'search',
      component: Search
    },
    {
      path: '/searchcar/:name,:goodT_index,:type',
      name: 'searchcar',
      component: SearchCar
    },
    {
      path: '/dindan/:bikes_id,:numb',
      name: 'dindan',
      component: Dindan
    },
    {
      path: '/dindans',
      name: 'dindans',
      component: Dindans
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
      path: '/detail/:bikes_id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,children:[
        {path:'/',name:'myinfos',component:Myinfos},
        {path:'myinfo',name:'myinfo',component:Myinfo},
        {path:'mypwd',name:'mypwd',component:Mypwd},
        {path:'myorder',name:'myorder',component:Myorder},
        {path:'myaddress',name:'myaddress',component:Myaddress},
        {path:'collect',name:'collect',component:Collect},
        {path:'myimg',name:'myimg',component:Myimg},
      ]
    },
  ]
})
