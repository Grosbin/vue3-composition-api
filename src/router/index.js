import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/CounterView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import('../views/SearchPokemonView.vue')
  },
  {
    path: '/pokemon-id/:id',
    name: 'pokemon-id',
    component: () => import('../views/PokemonView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
