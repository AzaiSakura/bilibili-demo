import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/Vedio/:id', component: () => import('@/views/Vedio/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
