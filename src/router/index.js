import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
//const Hello = () => import('@/views/Hello');
const ReservedParking = () => import('@/views/reserved-parking/ReservedParking');
const MyParking = () => import('@/views/my-parking/MyParking');
const UserCenter = () => import('@/views/user-center/UserCenter');
const BindPhoneNum = () => import('@/views/user-center/BindPhoneNum');
const PersonalInfo = () => import('@/views/user-center/PersonalInfo');

Vue.use(Router)

export default new Router({
  routes: [
    {//预约停车
      path: '/',
      name: 'ReservedParking',
      component: ReservedParking
    },
    {//我的车位
      path: '/my-parking',
      name: 'MyParking',
      component: MyParking
    },
    {//用户中心
      path: '/user',
      name: 'UserCenter',
      component: UserCenter
    },
    {//绑定手机号
      path: '/user/bind-phone',
      name: 'BindPhoneNum',
      component: BindPhoneNum
    },
    {//个人中心
      path: '/user/personal-info',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      //重定向
      path: '*',
      redirect: '/'
    }
  ]
})
