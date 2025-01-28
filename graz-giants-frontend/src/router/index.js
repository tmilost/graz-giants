import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WordpressPage from '../views/WordpressPage.vue'
import Page404View from '../views/Page404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:wordpressPage',
      name: 'wordpressPage',
      component: WordpressPage,
    },
    {
      path: '/404',
      name: '404Page',
      component: Page404View,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
