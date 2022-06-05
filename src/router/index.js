import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
    children:[
      {
        path:"/member",
        name:"Member",
        component: () => import('../views/member/Member.vue')
      },
      {
        path:"/datas",
        name:"Datas",
        component: () => import('../views/datas/Datas.vue')
      },
      {
        path:"/product",
        name:"Product",
        component: () => import('../views/product/Product.vue')
      },
      {
        path:"/classify",
        name:"Classify",
        component: () => import('../views/classify/Classify.vue')
      },
      {
        path:"/order",
        name:"Order",
        component: () => import('../views/order/Order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
