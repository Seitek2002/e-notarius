const NOTARY_PAGES = [
  {
    path: '/notarius-list-authed',
    name: 'notarius-list-authed',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/NotariusList.vue'),
  },
  {
    path: '/messages-notarius',
    name: 'messages-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/Messages.vue'),
  },
  {
    path: '/OrderSend-notarius',
    name: 'OrderSend-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/OrderSend.vue'),
  },
  {
    path: '/order-list-notarius',
    name: 'order-list-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/OrderList.vue'),
  },
  {
    path: '/files-list-notarius',
    name: 'files-list-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/Files.vue'),
  },
  {
    path: '/serach-notarius',
    name: 'search-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/SearchNotarius.vue'),
  },
  {
    path: '/applications-notarius',
    name: 'applications-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/Applications.vue'),
  },
  {
    path: '/omsu',
    name: 'omsu-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/OMSU.vue'),
  },
  {
    path: '/info-notarius',
    name: 'info-notarius',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/Info.vue'),
  },
  {
    path: '/foreign-missions',
    name: 'foreign-missions',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/ForeignMissions.vue'),
  },
  {
    path: '/reestr-of-heritance',
    name: 'reestr-of-heritance',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/ReestrOfHeritance.vue'),
  },
]

const USERS_PAGES = [
  {
    path: '/messages-user',
    name: 'messages-user',
    meta: {
      layout: 'user',
      requiresAuth: true,
    },
    component: () => import('../views/user/Messages.vue'),
  },
  {
    path: '/OrderSend',
    name: 'OrderSend',
    meta: {
      layout: 'user',
      requiresAuth: true,
    },
    component: () => import('../views/user/OrderSend.vue'),
  },
  {
    path: '/order-list-user',
    name: 'order-list--user',
    meta: {
      layout: 'user',
      requiresAuth: true,
    },
    component: () => import('../views/user/OrderList.vue'),
  },
  {
    path: '/files-list-user',
    name: 'files-list-user',
    meta: {
      layout: 'user',
      requiresAuth: true,
    },
    component: () => import('../views/user/Files.vue'),
  },
  {
    path: '/applications-user',
    name: 'applications-user',
    meta: {
      layout: 'user',
      requiresAuth: true,
    },
    component: () => import('../views/user/Applications.vue'),
  },
  {
    path: '/info-user',
    name: 'info-user',
    meta: {
      layout: 'user',
      requiresAuth: true,
    },
    component: () => import('../views/user/Info.vue'),
  },
]
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/pages/Auth.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/notarius-page/:id',
    name: 'NotariusPage',
    component: () => import('../views/NotariusPage.vue'),
  },
  {
    path: '/heirs-search',
    name: 'HeirsSearch',
    component: () => import('../views/HeirsSearch.vue'),
  },
  {
    path: '/notarius-list',
    name: 'register',
    component: () => import('../views/NotariusList.vue'),
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('../views/Check.vue'),
  },
  {
    path: '/wrapper',
    name: 'wrapper',
    component: () => import('../views/Wrapper.vue'),
  },
  {
    path: '/services-catalog',
    name: 'services-catalog',
    component: () => import('../views/ServicesCatalog.vue'),
  },
  {
    path: '/services-catalog/attorney',
    name: 'attorney',
    component: () => import('../views/ServicesCatalog/Attorney.vue'),
  },
  {
    path: '/black-list',
    name: 'black-list',
    meta: {
      layout: 'notarius',
      requiresAdmin: true,
    },
    component: () => import('../views/notarius/BlackList.vue'),
  },
  {
    path: '/check-qr',
    name: 'check-qr',
    component: () => import('../views/QRResult.vue'),
  },
  {
    path: '/exemple-user',
    name: 'exemple-user',
    meta: {
      layout: 'user', 
    },
    component: () => import('../views/user/Exemple.vue'),
  },
  {
    path: '/exemple-notarius',
    name: 'exemple-notarius',
    meta: {
      layout: 'notarius', 
    },
    component: () => import('../views/notarius/Exemple.vue'),
  },
  {
    path: '/manual-notarius',
    name: 'manual-notarius',
    meta: {
      layout: 'notarius', 
    },
    component: () => import('../views/Manual.vue'),
  },
  {
    path: '/manual-user',
    name: 'manual-user',
    meta: {
      layout: 'user', 
    },
    component: () => import('../views/Manual.vue'),
  },
  {
    path: '/temp-notarius',
    name: 'temp-notarius',
    meta: {
      layout: 'notarius', 
    },
    component: () => import('../views/Temp.vue'),
  },
  {
    path: '/temp-user',
    name: 'temp-user',
    meta: {
      layout: 'user', 
    },
    component: () => import('../views/Temp.vue'),
  },
  {
    path: '/profile-user',
    name: 'profile-user',
    meta: {
      layout: 'user', 
    },
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/profile-notarius',
    name: 'profile-notarius',
    meta: {
      layout: 'notarius', 
    },
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/registry-client-user',
    name: 'registry-client-user',
    meta: {
      layout: 'user', 
    },
    component: () => import('../views/RegistryClient.vue'),
  },
  {
    path: '/registry-client-notarius',
    name: 'registry-client-notarius',
    meta: {
      layout: 'notarius', 
    },
    component: () => import('../views/RegistryClient.vue'),
  },
  ...NOTARY_PAGES,
  ...USERS_PAGES,
]
