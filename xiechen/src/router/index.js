import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Stroke from '@/pages/stroke/Stroke'
import Photo from '@/pages/photo/photo'
import Service from '@/pages/service/Service'
import User from '@/pages/user/User'
import Good from '@/pages/home/components/tab-components/Good'
import Flower from '@/pages/home/components/tab-components/Flower'
import Sea from '@/pages/home/components/tab-components/Sea'
import Family from '@/pages/home/components/tab-components/Family'
import Love from '@/pages/home/components/tab-components/Love'
import Natural from '@/pages/home/components/tab-components/Natural'
import Play from '@/pages/home/components/tab-components/Play'
import History from '@/pages/home/components/tab-components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/good',
      children: [
        {
          path: '/good',
          component: Good
        },
        {
          path: '/flower',
          component: Flower
        },
        {
          path: '/sea',
          component: Sea
        },
        {
          path: '/family',
          component: Family
        },
        {
          path: '/love',
          component: Love
        },
        {
          path: '/natural',
          component: Natural
        },
        {
          path: '/play',
          component: Play
        },
        {
          path: '/history',
          component: History
        }
      ]
    },
    {
      path: '/stroke',
      name: 'Stroke',
      component: Stroke
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
