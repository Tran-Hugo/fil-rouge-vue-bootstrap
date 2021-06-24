import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import inscription from '../views/inscription.vue'
import connexion from '../views/connexion.vue'
import boutique from '../views/boutique.vue'

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
  },
  {
    path: '/connexion',
    name: 'connexion',
    component:connexion
  },
  {
    path: '/boutique',
    name: 'boutique',
    component:boutique,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
