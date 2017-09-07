import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
//const Hello = () => import('@/views/Hello');
const ReservedParking = () => import('@/views/reserved-parking/ReservedParking');
const MyParking = () => import('@/views/my-parking/MyParking');
const UserCenter = () => import('@/views/user-center/UserCenter');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReservedParking',
      component: ReservedParking
    },
    {
      path: '/my-parking',
      name: 'MyParking',
      component: MyParking
    },
    {
      path: '/user',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      //重定向
      path: '*',
      redirect: '/'
    }
  ]
})
