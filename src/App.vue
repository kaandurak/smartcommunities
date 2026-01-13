<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Navbar from  '@/components/navbar.vue'
import Carrousel from './components/carrousel.vue';
import CommunityCards from './components/community-cards.vue';
import CommunityCardsSection from './components/community-cards-section.vue';
import Footer from './components/footer.vue';

</script>

<template>
  <Navbar />

  <Carrousel />
  

<CommunityCardsSection/>


  <Footer />

  <RouterView />
</template>

<style scoped>


</style>
