import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WordpressPage from '../views/WordpressPage.vue'
import Page404View from '../views/Page404View.vue'
import SponsorsView from '../views/SponsorsView.vue'
import TicketsView from '@/views/TicketsView.vue'
import TeamsView from '@/views/TeamsView.vue'
import GameDayView from '@/views/GameDayView.vue'
import NewsPageView from '@/views/NewsPageView.vue'
import NewsPostView from '@/views/NewsPostView.vue'
import KampfmannschaftView from '@/views/KampfmannschaftView.vue'
import KampfmannschaftRosterView from '@/views/KampfmannschaftRosterView.vue'
import KampfmannschaftCoachingStaffView from '@/views/KampfmannschaftCoachingStaffView.vue'
import RegelwerkView from '@/views/RegelwerkView.vue'
import NachwuchsView from '@/views/NachwuchsView.vue'
import NachwuchsRosterView from '@/views/NachwuchsRosterView.vue'
import NachwuchsCoachingStaffView from '@/views/NachwuchsCoachingStaffView.vue'
import NachwuchsPhilosophieView from '@/views/NachwuchsPhilosophieView.vue'
import AcademyView from '@/views/AcademyView.vue'
import PowerliftingView from '@/views/PowerliftingView.vue'
import PowerliftingRosterView from '@/views/PowerliftingRosterView.vue'
import CheerView from '@/views/CheerView.vue'
import CheerRosterView from '@/views/CheerRosterView.vue'
import CheerCoachingStaffView from '@/views/CheerCoachingStaffView.vue'
import FlagFootballView from '@/views/FlagFootballView.vue'
import VereinView from '@/views/VereinView.vue'
import LeitbildView from '@/views/LeitbildView.vue'
import GymView from '@/views/GymView.vue'
import HallOfFameView from '@/views/HallOfFameView.vue'
import VereinsgeschichteView from '@/views/VereinsgeschichteView.vue'
import HelferVorstandView from '@/views/HelferVorstandView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
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
              'Experience the excitement of American Football in Graz with the Graz Giants! Discover team news, schedules, tickets, and join Austria’s premier football community.',
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
      path: '/sponsoring',
      name: 'sponsoring',
      component: SponsorsView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Support the Graz Giants and connect your brand with Austria’s leading American Football team. Discover sponsorship opportunities and join our winning partnership!',
          },
          {
            name: 'keywords',
            content:
              'Graz Giants Sponsoring, Sponsor Graz Giants, American Football Sponsorship Austria, Sports Sponsorship Graz, Brand Partnership Graz Giants, Austrian Football League Sponsor, Graz Sports Marketing, Team Sponsorship Austria, Corporate Sponsorship Graz, Graz Giants Partners, Business Networking Graz Giants, Support Graz Giants, Graz Giants Events, Graz Giants Brand Exposure, Graz Giants Business Club',
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
              'Get your tickets for Graz Giants American Football games! Secure your seat, check match schedules, and join the excitement at Austria’s premier football events in Graz.',
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
              'Meet all Graz Giants teams! Explore our American Football squads, cheerleaders, youth teams, and more. Discover rosters, achievements, and join the Giants family in Graz.',
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
      path: '/gameday',
      name: 'gameDay',
      component: GameDayView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Plan your Graz Giants Game Day! Find schedules, venue info, fan activities, and everything you need for an unforgettable American Football experience in Graz.',
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
      path: '/kampfmannschaft',
      name: 'kampfmannschaft',
      component: KampfmannschaftView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Kampfmannschaft! Meet our top American Football team, view player profiles, stats, and follow their journey in the Austrian Football League.',
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
              'Discover the Graz Giants Regelwerk! Learn about the rules, regulations, and guidelines that govern American Football in Austria and ensure fair play for all teams.',
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
              'Discover the Graz Giants Kampfmannschaft Roster! Meet our top American Football players, view their profiles, stats, and follow their journey in the Austrian Football League.',
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
              'Discover the Graz Giants Kampfmannschaft Coaching Staff! Meet the dedicated coaches behind our top American Football team, learn about their experience, and follow their journey in the Austrian Football League.',
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
      path: '/nachwuchs',
      name: 'Nachwuchs',
      component: NachwuchsView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Nachwuchs! Learn about our youth program, meet the upcoming talents, and follow their journey in the Austrian Football League.',
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
      path: '/nachwuchs/roster',
      name: 'NachwuchsRoster',
      component: NachwuchsRosterView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Nachwuchs Roster! Meet our upcoming American Football talents, view their profiles, stats, and follow their journey in the Austrian Football League.',
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
      path: '/nachwuchs/coaching-staff',
      name: 'nachwuchsCoachingStaff',
      component: NachwuchsCoachingStaffView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Nachwuchs Coaching Staff! Meet the dedicated coaches behind our youth program, learn about their experience, and follow their journey in the Austrian Football League.',
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
      path: '/nachwuchs/philosophie',
      name: 'NachwuchsPhilosophie',
      component: NachwuchsPhilosophieView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              "Discover the Graz Giants Nachwuchs Philosophie! Learn about our youth program's philosophy, values, and approach to developing future American Football talents in Austria.",
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
      path: '/academy',
      name: 'Academy',
      component: AcademyView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Academy! Learn about our training programs, facilities, and how we develop future American Football talents in Austria.',
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
      path: '/powerlifting',
      name: 'Powerlifting',
      component: PowerliftingView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Powerlifting Team! Learn about our strength and conditioning programs, meet our dedicated athletes, and follow their journey in the Austrian Football League.',
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
      path: '/powerlifting/roster',
      name: 'PowerliftingRoster',
      component: PowerliftingRosterView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Powerlifting Roster! Meet our dedicated athletes, view their profiles, stats, and follow their journey in the Austrian Football League.',
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
      path: '/cheer',
      name: 'Cheer',
      component: CheerView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Cheer Team! Learn about our cheerleading programs, meet our dedicated athletes, and follow their journey in the Austrian Football League.',
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
      path: '/cheer/roster',
      name: 'CheerRoster',
      component: CheerRosterView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Cheer Roster! Meet our dedicated athletes, view their profiles, stats, and follow their journey in the Austrian Football League.',
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
      path: '/cheer/coaching-staff',
      name: 'CheerCoachingStaff',
      component: CheerCoachingStaffView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Cheer Coaching Staff! Meet the dedicated coaches behind our cheerleading program, learn about their experience, and follow their journey in the Austrian Football League.',
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
      path: '/flag-football',
      name: 'FlagFootball',
      component: FlagFootballView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Flag Football Team! Learn about our flag football programs, meet our dedicated athletes, and follow their journey in the Austrian Football League.',
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
      path: '/verein',
      name: 'Verein',
      component: VereinView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Club! Learn about our history, mission, and values, and see how we contribute to the Austrian American Football community.',
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
      path: '/leitbild',
      name: 'Leitbild',
      component: LeitbildView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Mission! Learn about our vision, values, and goals, and see how we strive to make a positive impact in the Austrian American Football community.',
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
      path: '/gym',
      name: 'Gym',
      component: GymView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the Graz Giants Gym! Learn about our training programs, meet our dedicated athletes, and follow their journey in the Austrian Football League.',
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
      path: '/hall-of-fame',
      name: 'HallOfFame',
      component: HallOfFameView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Explore the Graz Giants Hall of Fame! Celebrate the legends, players, and coaches who shaped the history of American Football in Graz and Austria.',
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
      path: '/vereinsgeschichte',
      name: 'Vereinsgeschichte',
      component: VereinsgeschichteView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Discover the history of the Graz Giants! Learn about our journey, milestones, and the legacy we are building in Austrian American Football.',
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
      path: '/helfer-vorstand',
      name: 'HelferVorstand',
      component: HelferVorstandView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Meet the dedicated helpers and board members of the Graz Giants! Learn about their roles, contributions, and how they support the team both on and off the field.',
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
      path: '/news',
      name: 'News',
      component: NewsPageView,
      meta: {
        title: 'Graz Giants',
        metaTags: [
          {
            name: 'description',
            content:
              'Stay updated with the latest news from the Graz Giants! Get insights, match reports, and announcements about our team and events.',
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
              'Read detailed news articles about the Graz Giants! Stay informed with match reports, player updates, and team announcements.',
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
              '404 – Page not found. The page you are looking for does not exist. Return to the Graz Giants homepage or explore our American Football content.',
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
