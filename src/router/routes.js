
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: '홈',
        path: '/home',
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
        component: () => import('pages/BlogIndex.vue')
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
        component: () => import('pages/diet/DietTab.vue') 
      },
      { 
        name: 'Stature',
        path: '/stature',
        icon: 'how_to_reg',
        component: () => import('pages/stature/Stature.vue') 
      },
      // { path: '/blog', component: () => import('pages/BlogIndex.vue') },
      // { path: '/about', component: () => import('pages/About.vue') },
      { name: 'Post',
        path: '/posts', 
          component: () => import('pages/blog/PostIndex.vue') 
        },
      { name: 'PostShow',
        path: '/posts/:year/:month/:day/:title', 
        component: () => import('pages/blog/PostShow.vue') 
      },
      // { path: '/resources', component: () => import('pages/resources/ResourceIndex.vue') },
      // { path: '/resources/:resource', component: () => import('pages/resources/ResourceShow.vue') },
      // { path: '/admin', component: () => import('pages/admin/AdminIndex.vue') },
      // { path: '/admin/posts/edit/:key', name: 'edit-post', component: () => import('pages/admin/EditPost.vue') },
    ]
  },
  // {
  //   path: '/blog',
  //   component: () => import('layouts/BlogMainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/BlogIndex.vue') },
  //     // { path: '/about', component: () => import('pages/About.vue') },
  //     { path: '/posts', component: () => import('pages/blog/PostIndex.vue') },
  //     { path: '/posts/:year/:month/:day/:title', component: () => import('pages/blog/PostShow.vue') },
  //     { path: '/resources', component: () => import('pages/resources/ResourceIndex.vue') },
  //     { path: '/resources/:resource', component: () => import('pages/resources/ResourceShow.vue') },
  //     { path: '/admin', component: () => import('pages/admin/AdminIndex.vue') },
  //     { path: '/admin/posts/edit/:key', name: 'edit-post', component: () => import('pages/admin/EditPost.vue') }
  //   ]
  // },
  { 
    path: '/login',
    component: () => import('pages/Login.vue') 
  },
  { 
    name: 'FirstInfo',
    path: '/',
    component: () => import('pages/FirstInfo.vue') 
  },
  { 
    path: '/consent',
    component: () => import('pages/Consent.vue') 
  },
  { 
    path: '/events',
    component: () => import('pages/event/EventMain.vue') 
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
