<script setup>
import { defineProps } from 'vue'

defineProps({
  communityColor: {
    type: String,
    required: true
  }
})

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="md:hidden sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
    <div class="grid grid-cols-4">
      <!-- Informatie -->
      <button 
        @click="scrollToSection('about')"
        class="flex flex-col items-center justify-center py-3 border-r border-gray-200 hover:bg-gray-50 transition"
      >
        <svg class="w-6 h-6 mb-1" :style="{ color: communityColor }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <path d="M12 16v-4m0-4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="text-xs font-medium" :style="{ color: communityColor }">Informatie</span>
      </button>

      <!-- Media -->
      <button 
        @click="scrollToSection('media')"
        class="flex flex-col items-center justify-center py-3 border-r border-gray-200 hover:bg-gray-50 transition"
      >
        <svg class="w-6 h-6 mb-1" :style="{ color: communityColor }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
          <path d="M21 15l-5-5L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-xs font-medium" :style="{ color: communityColor }">Media</span>
      </button>

      <!-- Events -->
      <button 
        @click="scrollToSection('events')"
        class="flex flex-col items-center justify-center py-3 border-r border-gray-200 hover:bg-gray-50 transition"
      >
        <svg class="w-6 h-6 mb-1" :style="{ color: communityColor }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="text-xs font-medium" :style="{ color: communityColor }">Events</span>
      </button>

      <!-- Contact -->
      <button 
        @click="scrollToSection('contact')"
        class="flex flex-col items-center justify-center py-3 hover:bg-gray-50 transition"
      >
        <svg class="w-6 h-6 mb-1" :style="{ color: communityColor }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-xs font-medium" :style="{ color: communityColor }">Contact</span>
      </button>
    </div>
  </div>
</template>