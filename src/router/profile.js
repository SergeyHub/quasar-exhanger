export default {
  path: '/profile',
  component: () => import('layouts/layout-profile/ProfileLayout'),
  children: [
    {
      path: '',
      name: 'profile',
      component: () => import('pages/profile/index'),
    },
    {
      path: '/profile/personal-data',
      name: 'personal-data',
      component: () => import('pages/profile/personal-data'),
    },
    {
      path: '/profile/notifications',
      name: 'notifications',
      component: () => import('pages/profile/notifications'),
    },
    {
      path: '/profile/safety',
      name: 'safety',
      component: () => import('pages/profile/safety'),
    },
  ],
};
