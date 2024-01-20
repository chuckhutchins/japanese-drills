import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/settings',
      name: 'SettingsPage',
      component: () => import('@/views/SettingsView.vue'),
    },
    {
      path: '/drills',
      component: () => import('@/views/DrillView.vue'),
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
  ],
});

export default router;
