import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    beforeEnter: (to, from, next) => {
      // 用浏览器中的 token 提交到 store 中，触发自动登录
      store.commit('setToken', localStorage.getItem('token'))
      next()
    }
  },
  {
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
    beforeEnter: (to, from, next) => {
      // 用浏览器中的 token 提交到 store 中，触发自动登录
      store.commit('setToken', localStorage.getItem('token'))
      next()
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
