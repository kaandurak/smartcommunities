<script setup>
import { defineProps } from 'vue'

defineProps({
  hero: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="relative w-full h-[35vh] overflow-hidden">
    
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${hero.image})` }"
    ></div>
  </div>
</template>