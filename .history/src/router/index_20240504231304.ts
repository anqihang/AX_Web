/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-04-09 22:28:56
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/HomeView.vue')
      },
      {
        path: 'game',
        name: 'game',
        component: () => import('@/views/Game/GameView.vue'),
        children: [
          {
            path: 'noRestForTheWicked',
            name: 'noRestForTheWicked',
            component: () => import('@/views/Game/NoRestForTheWicked/NoRestForTheWickedView.vue')
          }
        ]
      },
      {
        path: 'noRestForTheWicked',
        name: 'noRestForTheWicked',
        component: () => import('@/views/Game/NoRestForTheWicked/NoRestForTheWickedView.vue')
      },
      {
        path: 'tool',
        name: 'tool',
        component: () => import('@/views/NavTool/NavToolView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
