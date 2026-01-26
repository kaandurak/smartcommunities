import { createRouter, createWebHistory } from 'vue-router'
import Event from '@/views/eventview.vue'
import Home from '@/views/homepageview.vue'
import CommunityDetail from '@/views/communityDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/eventview',
      name: 'eventview',
      component: Event
    },
    {
      path: '/community/:id',
      name: 'community',
      component: CommunityDetail,
      props: true
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    
    return { top: 0, behavior: 'smooth' }
  }
})

export default router