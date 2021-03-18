
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: '홈',
        path: '/',
        icon: 'home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: 'My서비스',
        path: '/Service',
        icon: 'person',
        component: () => import('pages/Service.vue')
      },
      {
        name: '오늘의건강',
        path: '/todayhealth',
        icon: 'spa',
        component: () => import('pages/AboutPage.vue')
      },
      {
        name: 'About',
        path: '/about',
        icon: 'help',
        component: () => import('pages/AboutPage.vue')
      },
      {
        name: 'Credits',
        path: '/credits',
        icon: 'copyright',
        component: () => import('pages/CreditsPage.vue')
      },
      {
        name: 'Astro',
        path: '/astronomy',
        icon: 'nights_stay',
        component: () => import('pages/AstronomyPage.vue')
      },
      { 
        name: 'Diet',
        path: '/diet',
        icon: 'how_to_reg',
        component: () => import('pages/Diet.vue') 
      },
    ]
  },
  { 
    path: '/login',
    component: () => import('pages/Login.vue') 
  },
  { 
    path: '/consent',
    component: () => import('pages/Consent.vue') 
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
