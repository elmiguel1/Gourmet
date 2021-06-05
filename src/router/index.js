import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about/tipo',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tipo.vue')   
  },
  {
    path: '/about/panes',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Panes.vue')   
  },
  {
    path: '/about/tostadas',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tostadas.vue')   
  },
    {
    path: '/about/ensaladas',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ensaladas.vue')   
  },
  {
    path: '/about/sopas',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sopas.vue')   
  },
  {
    path: '/about/helados',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Helados.vue')   
  },
  {
    path: '/about/bebidas',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bebidas.vue')   
  },
  {
    path: '/ingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingles.vue')   
  },
  {
    path: '/ingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingles.vue')   
  },
  {
    path: '/ingles/tipoingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/TipoIngles.vue')   
  },
  {
    path: '/ingles/bagelingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/BagelIngles.vue')   
  },
    {
    path: '/ingles/tostadaingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/TostadaIngles.vue')   
  },
  {
    path: '/ingles/ensaladaingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Salads.vue')   
  },
  {
    path: '/ingles/sopaingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Soup.vue')   
  },
  {
    path: '/ingles/heladoingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/IceCream.vue')   
  },
  {
    path: '/ingles/bebidaingles',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Drinks.vue')   
  },
  {
    path: '/about/carrito',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Carrito.vue')   
  },
  {
    path: '/about/confirma',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Confirmar.vue')   
  },
  {
    path: '/about/pagar',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/TipoPago.vue')   
  },
    {
    path: '/about/seguir',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seguimiento.vue')   
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
