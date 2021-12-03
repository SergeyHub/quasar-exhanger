export default {
  path: '',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      name: 'homepage',
      component: () => import('pages/main-landing/index'),
      meta: { standartHeader: true },
    },
    {
      path: 'contacts',
      name: 'contacts',
      component: () => import('pages/contacts/index'),
      meta: { standartHeader: true },
    },
    {
      path: 'tariffs',
      name: 'tariffs',
      component: () => import('pages/tariffs/index'),
      meta: { standartHeader: true },
    },
    {
      path: 'new-item',
      name: 'new-item',
      component: () => import('pages/new-item/index'),
      meta: { standartHeader: true },
    },
    {
      path: 'news',
      name: 'news',
      component: () => import('pages/news/index'),
      meta: { standartHeader: true },
    },
    {
      path: 'about',
      name: 'about',
      component: () => import('pages/about/index'),
      meta: { standartHeader: true },
    },
    {
      path: 'wallets',
      component: () => import('pages/wallets/Index.vue'),
      meta: { standartHeader: false },
    },
    {
      path: '/wallets/transfer',
      component: () => import('pages/wallets/transfer.vue'),
      meta: { standartHeader: false },
    },
    {
      path: '/exchange',
      component: () => import('pages/wallets/exchange.vue'),
      meta: { standartHeader: false },
    },
    {
      path: '/buy-and-sell',
      component: () => import('pages/wallets/buy-and-sell-crypto.vue'),
      meta: { standartHeader: false },
    },
  ],
};
