import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import login from '../components/login.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
