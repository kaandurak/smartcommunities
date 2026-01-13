import { createRouter, createWebHistory } from 'vue-router'
import Event from '@/views/eventview.vue'
import Home from '@/views/homepageview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path:'/eventview',
    name:'eventview',
    component:Event
  },
  {
    path:'/home',
    name:'home',
    component:Home
  }

  ],
})

export default router
