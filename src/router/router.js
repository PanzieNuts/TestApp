import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/login.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token')
//   if (to.name !== 'login' && !token) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router
