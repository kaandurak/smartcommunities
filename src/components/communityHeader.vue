<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import logo from '@/assets/logo_pxl_bol_witrand.svg'

defineProps({
  communityName: {
    type: String,
    required: true
  },
  communityColor: {
    type: String,
    required: true
  },
  communitySecondaryColor: {
    type: String,
    required: true
  }
})

const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-200 py-4 shadow-sm">
    <div class="grid grid-cols-12 items-center">
      <div class="col-start-2 col-span-10 flex items-center justify-between">
        <!-- Back button and logo -->
        <div class="flex items-center gap-4">
          <button 
            @click="goBack"
            class="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <div class="flex items-center gap-3">
            <!-- PXL Logo -->
            <img :src="logo" alt="PXL Logo" class="w-10 h-10" />
            <span class="text-xl font-bold" :style="{ color: communityColor }">{{ communityName }}</span>
          </div>
        </div>
        
        <!-- Navigation - hidden on mobile, visible on desktop -->
        <nav class="hidden md:flex gap-6">
          <a href="#about" class="text-gray-700 hover:text-gray-900 font-medium transition">Over</a>
          <a href="#media" class="text-gray-700 hover:text-gray-900 font-medium transition">Media</a>
          <a href="#events" class="text-gray-700 hover:text-gray-900 font-medium transition">Events</a>
          <a href="#contact" class="text-gray-700 hover:text-gray-900 font-medium transition">Contact</a>
        </nav>
      </div>
    </div>
  </header>
</template>