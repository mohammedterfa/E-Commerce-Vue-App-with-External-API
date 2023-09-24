import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue"
import ProdcutDetail from "@/views/ProductDetail.vue"
import Cart from "@/views/Cart.vue"

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
    {
      path: '/cart',
      name: 'CartView',
      component: Cart
    },
    
  ]
})

export default router
