<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from  '@/components/navbar.vue'
import Carrousel from './components/carrousel.vue';
import CommunityCards from './components/community-cards.vue';

</script>

<template>
  <Navbar />

  <Carrousel />
  
  <CommunityCards />
  

  <RouterView />
</template>

<style scoped>


</style>
