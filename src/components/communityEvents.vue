<script setup>
import { ref, computed, defineProps } from 'vue'
import { events } from '@/data/events.js'

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
  }
})

const displayLimit = ref(3)

const communityEvents = computed(() => {
  return events
    .filter(e => {
      const community = e.latestEvent?.community || e.carousel?.community
      return community === props.communityName
    })
    .sort((a, b) => {
      const dateA = new Date(a.latestEvent?.date || 0)
      const dateB = new Date(b.latestEvent?.date || 0)
      return dateB - dateA 
    })
})

const displayedEvents = computed(() => {
  return communityEvents.value.slice(0, displayLimit.value)
})

const hasMore = computed(() => {
  return communityEvents.value.length > displayLimit.value
})

// Desktop grid class
const gridCols = computed(() => {
  const count = displayedEvents.value.length
  if (count === 1) return 'md:grid-cols-1'
  if (count === 2) return 'md:grid-cols-2'
  return 'md:grid-cols-3'
})

function loadMore() {
  displayLimit.value += 3
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
         
          <!-- Mobile: 1 column | Desktop: dynamic columns -->
          <div class="grid gap-6 grid-cols-1" :class="gridCols">
            <div
              v-for="event in displayedEvents"
              :key="event.id"
              class="rounded-3xl overflow-hidden shadow-lg h-[216px]"
              :style="{ backgroundColor: communityColor, opacity: 0.9 }"
            >
              <div class="grid grid-cols-2 h-full">
              
                <div class="col-span-1 h-full">
                  <img 
                    :src="event.latestEvent?.image || event.carousel?.image" 
                    :alt="event.latestEvent?.title || event.carousel?.title"
                    class="w-full h-full object-cover"
                  />
                </div>
                
                <div class="col-span-1 p-4 flex flex-col justify-between text-white h-full">
                  <div>
                    <p class="text-xl font-bold mb-1">
                      {{ formatDate(event.latestEvent?.date).split(' ')[0] }} 
                      {{ formatDate(event.latestEvent?.date).split(' ')[1].slice(0, 3) }}
                    </p>
                    <p class="text-lg font-bold mb-2">
                      {{ formatDate(event.latestEvent?.date).split(' ')[2] }}
                    </p>
                    <h3 class="text-sm font-semibold mt-2 line-clamp-2">
                      {{ event.latestEvent?.title || event.carousel?.title }}
                    </h3>
                    <p class="text-xs mt-1">
                      {{ event.latestEvent?.location }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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