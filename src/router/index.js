import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import store from '../store/index.js'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  void nextTick(() => {
    if (requiresAuth && !store.state.auth) {
      next('/auth')
    } else if (requiresAdmin && !store.state.isAdmin) {
      next('/auth')
    } else {
      next()
    }
  })
})

export default router
