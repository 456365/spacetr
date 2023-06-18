import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')//懒加载 用户不点击不加载
    },
    {
      path: '/img',
      name: 'img',
      component: () => import('../views/HomeView.vue')//懒加载 用户不点击不加载
    },
    {
      path: '/mylink',
      name: 'mylink',
      component: () => import('../views/MyView.vue')//懒加载 用户不点击不加载
    },
    {
      path: '/auto',
      name: 'auto',
      component: () => import('../views/AutoView.vue'),//懒加载 用户不点击不加载
      alias:"/car"
    },
    {
      path: '/qiche',
      name: 'qiche',
      redirect:"/auto" //路由重定向
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: () => import('../views/ErrorView.vue')//懒加载 用户不点击不加载
    }
  ]
})

export default router
