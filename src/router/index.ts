import Home from '@/views/Home.vue'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curriculo',
    name: 'Curriculo',
    component: () => import('@/views/Curriculo.vue')
  },
  {
    path: '/tecnologias',
    name: 'Tecnologias',
    component: () => import('@/views/Tecnologias.vue')
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: () => import('@/views/Projetos.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('@/views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
