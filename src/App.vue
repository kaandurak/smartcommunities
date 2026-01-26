<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Navbar from '@/components/navbar.vue'
import Footer from '@/components/footer.vue'

const route = useRoute()

const isCommunityPage = computed(() => {
  return route.name === 'community'
})
</script>

<template>
  <Navbar v-if="!isCommunityPage" />

  <RouterView />

  <Footer v-if="!isCommunityPage" />
</template>