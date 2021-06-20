import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import inscription from '../views/inscription.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inscription',
    name: 'inscription',
    component:inscription
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
