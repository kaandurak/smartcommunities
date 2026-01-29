<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'
import { events } from '@/data/events.js'
import EventModal from './eventModal.vue'

const props = defineProps({
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
  },
  albums: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['openAlbum'])

const displayLimit = ref(3)
const selectedEvent = ref(null)

const communityEvents = computed(() => {
  return events
    .filter(e => e.community === props.communityName)
    .sort((a, b) => {
      const dateA = new Date(a.date || 0)
      const dateB = new Date(b.date || 0)
      return dateB - dateA
    })
})

const displayedEvents = computed(() => {
  return communityEvents.value.slice(0, displayLimit.value)
})

const hasMore = computed(() => {
  return communityEvents.value.length > displayLimit.value
})

const gridCols = computed(() => {
  const count = displayedEvents.value.length
  if (count === 1) return 'md:grid-cols-1'
  if (count === 2) return 'md:grid-cols-2'
  return 'md:grid-cols-3'
})

function loadMore() {
  displayLimit.value += 3
}

function openEvent(event) {
  selectedEvent.value = event
}

function closeEvent() {
  selectedEvent.value = null
}

function handleOpenAlbum(event) {
  console.log('Looking for album for event:', event.id)
  console.log('Available albums:', props.albums)
  
  // Find album by event ID
  const album = props.albums.find(a => a.eventId === event.id)
  
  if (album) {
    console.log('Found album:', album)
    emit('openAlbum', album)
  } else {
    console.log('No album found for event ID:', event.id)
    alert('Geen foto album gevonden voor dit event')
  }
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
</script>

<template>
  <div class="bg-white py-16">
    <div class="grid grid-cols-12">
      <div class="col-start-2 col-span-10">
        <h2 class="text-3xl font-bold mb-8">Events</h2>
        
        <div v-if="communityEvents.length > 0" class="space-y-6">
         
          <div class="grid gap-6 grid-cols-1" :class="gridCols">
            <button
              v-for="event in displayedEvents"
              :key="event.id"
              @click="openEvent(event)"
              class="rounded-3xl overflow-hidden shadow-lg h-[216px] transition hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
              :style="{ backgroundColor: communityColor, opacity: 0.9 }"
            >
              <div class="grid grid-cols-2 h-full">
              
                <div class="col-span-1 h-full">
                  <img
                    :src="event.image"
                    :alt="event.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="col-span-1 p-4 flex flex-col justify-between text-white h-full">
                  <div>
                    <p class="text-xl font-bold mb-1">
                      {{ formatDate(event.date).split(' ')[0] }}
                      {{ formatDate(event.date).split(' ')[1].slice(0, 3) }}
                    </p>
                    <p class="text-lg font-bold mb-2">
                      {{ formatDate(event.date).split(' ')[2] }}
                    </p>
                    <h3 class="text-sm font-semibold mt-2 line-clamp-2">
                      {{ event.title }}
                    </h3>
                    <p class="text-xs mt-1">
                      {{ event.location }}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
          
          <button
            v-if="hasMore"
            @click="loadMore"
            class="w-full py-4 rounded-3xl border-2 font-semibold text-lg transition hover:bg-gray-50"
            :style="{ borderColor: communityColor, color: communityColor }"
          >
            Laad eerdere events
          </button>
        </div>
        
        <div v-else class="text-center text-gray-500 py-12">
          <p class="text-lg">Geen events gevonden voor deze community.</p>
        </div>
      </div>
    </div>
    
    <!-- Event Modal -->
    <EventModal 
      :event="selectedEvent" 
      :community-color="communityColor"
      @close="closeEvent"
      @open-album="handleOpenAlbum"
    />
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>