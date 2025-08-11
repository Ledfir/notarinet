import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Documentos from '../views/Documentos.vue'
import Firma from '../views/Firma.vue'
import Cuenta from '../views/Cuenta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/documentos',
      name: 'documentos',
      component: Documentos
    },
    {
      path: '/firma',
      name: 'firma',
      component: Firma
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: Cuenta
    }
  ],
})

export default router
