import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import DevelopmentPage from '@/pages/DevelopmentPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/development',
    name: 'development',
    component: DevelopmentPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
