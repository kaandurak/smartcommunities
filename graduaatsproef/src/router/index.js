import { createRouter, createWebHistory } from 'vue-router'
import Event from '@/views/eventview.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path:'/eventview',
    name:'eventview',
    component:Event
  },

  ],
})

export default router
