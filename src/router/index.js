import Vue from 'vue'
import Router from 'vue-router'

import DeployDefence from '../view/protectionManagement/deployDefence'
import Device from '../view/protectionManagement/device'
import IdentificationLibrary from '../view/protectionManagement/identificationLibrary'
import PushSetting from '../view/protectionManagement/pushSetting'
import Test from '../view/test'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/',
      name:'DeployDefence',
      component:DeployDefence,
    },
    {
      path:'/test2',
      name:"Device",
      component:Device
    },
    {
      path:'/PushSetting',
      name:'PushSetting',
      component:PushSetting
    },
    {
      path:'/test3',
      name:'IdentificationLibrary',
      component:IdentificationLibrary
    },
    {
      path:'/test',
      name:'test',
      component:Test
    }

  ]
})
