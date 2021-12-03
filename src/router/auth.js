export default {
  path: '',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '/authorization',
      name: 'authorization',
      component: () => import('pages/auth/index'),
      meta: { standartHeader: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('pages/auth/login'),
      meta: { standartHeader: true },
    },
    {
      path: '/reset',
      name: 'reset',
      component: () => import('pages/auth/reset-password'),
      meta: { standartHeader: true },
    },
    {
      path: '/set-password',
      name: 'setPassword',
      component: () => import('pages/auth/set-password'),
      meta: { standartHeader: true },

    },
  ],
};
