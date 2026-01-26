<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  album: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const currentImageIndex = ref(0)

function nextImage() {
  if (props.album && currentImageIndex.value < props.album.images.length - 1) {
    currentImageIndex.value++
  }
}

function prevImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

function closeModal() {
  currentImageIndex.value = 0
  emit('close')
}
</script>

<template>
  <transition name="modal">
    <div 
      v-if="album" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      @click.self="closeModal"
    >
      <div class="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
     
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
    
        <div class="bg-gray-100 p-6">
          <h2 class="text-2xl font-bold">{{ album.title }}</h2>
          <p class="text-gray-600 mt-1">{{ currentImageIndex + 1 }} / {{ album.images.length }}</p>
        </div>
        
        <div class="relative bg-gray-900 flex items-center justify-center" style="height: 500px;">
          <img 
            :src="album.images[currentImageIndex]" 
            :alt="`${album.title} - Image ${currentImageIndex + 1}`"
            class="max-h-full max-w-full object-contain"
          />
          
        
          <button 
            v-if="currentImageIndex > 0"
            @click="prevImage"
            class="absolute left-4 bg-white/90 hover:bg-white p-3 rounded-full transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            v-if="currentImageIndex < album.images.length - 1"
            @click="nextImage"
            class="absolute right-4 bg-white/90 hover:bg-white p-3 rounded-full transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
   
        <div class="bg-gray-100 p-4 overflow-x-auto">
          <div class="flex gap-2">
            <button
              v-for="(image, index) in album.images"
              :key="index"
              @click="currentImageIndex = index"
              class="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition"
              :class="currentImageIndex === index ? 'border-blue-500' : 'border-transparent hover:border-gray-400'"
            >
              <img :src="image" :alt="`Thumbnail ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>