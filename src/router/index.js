import Vue from 'vue'
import Router from 'vue-router'
import user from '@/components/user'
import empty from '@/components/empty'

import phone from '@/components/phone/phone'
import iphone from '@/components/phone/iphone/iphone'
import huawei from '@/components/phone/huawei/huawei'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: empty
    },
    {
      path: '/user/:id/:user',
      component: user
    },
    {
      path: '/phone',
      component: phone,
      children:[
        {path:'iphone',name:'iphone',component: iphone},
        {path:'huawei',name:'huawei',component: huawei},

      ]
    }
  ]
})
