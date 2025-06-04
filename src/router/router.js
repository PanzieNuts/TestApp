import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/login.vue'
import axios from 'axios'

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
  {
    path: '/auth/callback',
    name: 'AuthCallback',
    component: {
      template: `<div>Logging in...</div>`,
      async created() {
        try {
          await axios.get("http://localhost:8080/api/protected", { withCredentials: true })
          this.$router.push('/home')
        } catch (err) {
          this.$router.push('/login')
        }
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
