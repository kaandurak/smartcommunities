<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from  '@/components/navbar.vue'
import Carrousel from './components/carrousel.vue';
import CommunityCards from './components/community-cards.vue';
import CommunityCardsSection from './components/community-cards-section.vue';

</script>

<template>
  <Navbar />

  <Carrousel />
  

<CommunityCardsSection/>
  <RouterView />
</template>

<style scoped>


</style>
