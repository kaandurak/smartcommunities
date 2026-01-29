<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  event: {
    type: Object,
    default: null
  },
  communityColor: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close', 'openAlbum'])

function closeModal() {
  emit('close')
}

function formatDate(dateString) {
  if (!dateString) return ''
  const d = new Date(dateString)
  const day = d.getDate()
  const monthNames = [
    'januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'october', 'november', 'december'
  ]
  const month = monthNames[d.getMonth()]
  const year = d.getFullYear()
  return `${day} ${month} ${year}`
}

const isPastEvent = computed(() => {
  if (!props.event?.date) return false
  return new Date(props.event.date) < new Date()
})

const ctaText = computed(() => {
  return isPastEvent.value ? 'Bekijk recap' : 'Deelnemen'
})

function handleCTA() {
  if (isPastEvent.value) {
    // Open the album for this event
    emit('openAlbum', props.event)
    // Don't close the modal immediately - let the parent handle it
    // closeModal()
  } else {
    // Handle future event registration
    alert('Registratie functionaliteit komt binnenkort!')
  }
}
</script>

<template>
  <transition name="modal">
    <div 
      v-if="event" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      @click.self="closeModal"
    >
      <div class="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
        <!-- Close button -->
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <!-- Event Image -->
        <div class="relative h-64 bg-cover bg-center" :style="{ backgroundImage: `url(${event.image})` }">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <!-- Event Content -->
        <div class="p-8">
          <!-- Title -->
          <h2 class="text-3xl font-bold mb-4" :style="{ color: communityColor }">
            {{ event.title }}
          </h2>

          <!-- Date & Location -->
          <div class="flex flex-wrap gap-4 mb-6">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span class="text-gray-700">{{ formatDate(event.date) }}</span>
            </div>

            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-gray-700">{{ event.location }}</span>
            </div>
          </div>

          <!-- Community Badge -->
          <div class="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6"
               :style="{ backgroundColor: communityColor + '20', color: communityColor }">
            {{ event.community }}
          </div>

          <!-- Description -->
          <div class="mb-6">
            <h3 class="text-xl font-bold mb-3">Over dit event</h3>
            <p class="text-gray-700 leading-relaxed">
              {{ event.text || 'Meer informatie binnenkort beschikbaar.' }}
            </p>
          </div>
          
          <!-- CTA Button -->
          <button 
            @click="handleCTA"
            class="w-full py-4 rounded-3xl text-white font-semibold text-lg transition hover:opacity-90"
            :style="{ backgroundColor: communityColor }"
          >
            {{ ctaText }}
          </button>
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