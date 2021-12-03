const main = {
  path: '/main',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: 'demo', component: () => import('pages/main-landing/index') },
  ],
};

export default main;
