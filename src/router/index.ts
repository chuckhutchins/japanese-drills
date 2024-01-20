import { createRouter, createWebHistory } from 'vue-router';
import { useAccountStore } from '@/stores/AccountStore';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// special routes
const unmatched = '/:pathMatch(.*)*';

const routes: RouteRecordRaw[] = [
  {
    path: unmatched,
    name: '404Page',
    component: () => import('@/views/404View.vue'),
    meta: {
      title: 'Page Note Found'
    },
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomeView,
    meta: {
      title: 'nihongo・drills'
    },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: { render: () => null },
    beforeEnter: (to, from, next) => {
      useAccountStore().login();
      next();
    },
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: { render: () => null },
    beforeEnter: (to, from, next) => {
      useAccountStore().logout();
      next('/');
    },
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('@/views/ProfileView.vue'),
    meta: {
      requiresAuth: true,
      title: 'Profile | nihongo・drills',
    },
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: () => import('@/views/SettingsView.vue'),
    meta: {
      requiresAuth: true,
      title: 'Settings | nihongo・drills',
    },
  },
  {
    path: '/drills',
    component: () => import('@/views/DrillView.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'age',
        name: 'AgePage',
        component: () => import('@/components/AgePage.vue'),
      },
      {
        path: 'days',
        name: 'DaysPage',
        component: () => import('@/components/DaysPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 404 page
  if (to.matched[0]?.path === unmatched) {
    console.log('unmatched');
    return next();
  }

  if (to.meta.requiresAuth && !useAccountStore().isLoggedIn) {
    console.log('not logged in');
    useAccountStore().login();
    // TODO: reimplement this with then/error when logging in is a promise
    // next();
  }

  next();
});

router.afterEach(to => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
});

export default router;
