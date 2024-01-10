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
      path: '/drills',
      component: () => import('@/views/DrillView.vue'),
      children: [
        {
          path: 'age',
          name: 'AgePage',
          component: () => import('@/components/AgePage.vue'),
        },
        {
          path: 'time',
          name: 'TimePage',
          component: () => import('@/components/TimePage.vue'),
        },
      ],
    },
  ],
});

export default router;
