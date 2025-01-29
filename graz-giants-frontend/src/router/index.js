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
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Experience the thrill of American Football in Graz! Follow the Graz Giants, a top Austrian team, and cheer them on to victory.',
          },
          {
            name: 'keywords',
            content:
              'Graz Giants, Austrian American Football, AFL Austria, American Football Austria, Graz Sports, Sports Graz, Football Graz, Team Graz, Austrian Football League, Football Games Austria, American Football Tickets Austria, Graz Giants Schedule, Graz Giants Results, Graz Giants News, Join Graz Giants, Become a Graz Giant, Support Graz Giants',
          },
        ],
      },
    },
    {
      path: '/:wordpressPage',
      name: 'wordpressPage',
      component: WordpressPage,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Experience the thrill of American Football in Graz! Follow the Graz Giants, a top Austrian team, and cheer them on to victory.',
          },
          {
            name: 'keywords',
            content:
              'Graz Giants, Austrian American Football, AFL Austria, American Football Austria, Graz Sports, Sports Graz, Football Graz, Team Graz, Austrian Football League, Football Games Austria, American Football Tickets Austria, Graz Giants Schedule, Graz Giants Results, Graz Giants News, Join Graz Giants, Become a Graz Giant, Support Graz Giants',
          },
        ],
      },
    },
    {
      path: '/404',
      name: '404Page',
      component: Page404View,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Experience the thrill of American Football in Graz! Follow the Graz Giants, a top Austrian team, and cheer them on to victory.',
          },
          {
            name: 'keywords',
            content:
              'Graz Giants, Austrian American Football, AFL Austria, American Football Austria, Graz Sports, Sports Graz, Football Graz, Team Graz, Austrian Football League, Football Games Austria, American Football Tickets Austria, Graz Giants Schedule, Graz Giants Results, Graz Giants News, Join Graz Giants, Become a Graz Giant, Support Graz Giants',
          },
        ],
      },
    },
  ],
})

router.beforeResolve((to) => {
  document.title = to.meta.title || 'my default title'
  // eslint-disable-next-line
  if (to.meta.hasOwnProperty('metaTags')) {
    for (let x = 0; x < to.meta.metaTags.length; x++) {
      let oldMeta = document.getElementsByTagName('meta')
      for (let m = 0; m < oldMeta.length; m++) {
        if (oldMeta[m].name == to.meta.metaTags[x].name) {
          oldMeta[m].remove()
        }
      }
      let meta = document.createElement('meta')
      // eslint-disable-next-line
      if (to.meta.metaTags[x] && to.meta.metaTags[x].hasOwnProperty('name')) {
        meta.name = to.meta.metaTags[x].name
        meta.content = to.meta.metaTags[x].content
      }
      // eslint-disable-next-line
      if (to.meta.metaTags[x].hasOwnProperty('property')) {
        meta.property = to.meta.metaTags[x].name
        meta.content = to.meta.metaTags[x].content
      }
      document.head.appendChild(meta)
    }
  }
  // next()
})

export default router
