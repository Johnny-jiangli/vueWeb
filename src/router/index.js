import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../view/index'
import Index2 from '../view/index2'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test',
      name:"Index",
      component:Index
    },{
    path:'/test2',
      name:'Index2',
      component:Index2
    }

  ]
})
