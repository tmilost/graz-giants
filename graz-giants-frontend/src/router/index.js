import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WordpressPage from '../views/WordpressPage.vue'
import Page404View from '../views/Page404View.vue'
import SponsorsView from '../views/SponsorsView.vue'
import TicketsView from '@/views/TicketsView.vue'
import TeamsView from '@/views/TeamsView.vue'
import GameDayView from '@/views/GameDayView.vue'
import AssociationView from '@/views/AssociationView.vue'
import NewsPostView from '@/views/NewsPostView.vue'
import KampfmannschaftView from '@/views/KampfmannschaftView.vue'
import KampfmannschaftRosterView from '@/views/KampfmannschaftRosterView.vue'
import KampfmannschaftCoachingStaffView from '@/views/KampfmannschaftCoachingStaffView.vue'
import RegelwerkView from '@/views/RegelwerkView.vue'

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
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsView,
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
      path: '/tickets',
      name: 'tickets',
      component: TicketsView,
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
      path: '/teams',
      name: 'teams',
      component: TeamsView,
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
      path: '/GameDay',
      name: 'gameDay',
      component: GameDayView,
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
      path: '/association',
      name: 'association',
      component: AssociationView,
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
      path: '/kampfmannschaft',
      name: 'kampfmannschaft',
      component: KampfmannschaftView,
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
      path: '/regelwerk',
      name: 'regelwerk',
      component: RegelwerkView,
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
      path: '/kampfmannschaft/roster',
      name: 'kampfmannschaftRoster',
      component: KampfmannschaftRosterView,
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
      path: '/kampfmannschaft/coaching-staff',
      name: 'kampfmannschaftCoachingStaff',
      component: KampfmannschaftCoachingStaffView,
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
      path: '/news/:postSlug',
      props: true,
      name: 'newsPost',
      component: NewsPostView,
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
