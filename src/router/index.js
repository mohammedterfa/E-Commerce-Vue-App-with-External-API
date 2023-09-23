import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue"
import ProdcutDetail from "@/views/ProductDetail.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },

    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProdcutDetail
    },
    
  ]
})

export default router
