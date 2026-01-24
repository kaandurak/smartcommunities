<script setup>
import { ref, computed } from 'vue'
import { events, communities as communityList } from '@/data/events.js'

const selectedDate = ref(null)
const selectedCommunity = ref('Allemaal')

const communities = computed(() => {
  return ['Allemaal', ...communityList.map(c => c.name)]
})

const filteredEvents = computed(() => {
  if (selectedCommunity.value === 'Allemaal') return events
  return events.filter(e => {
    const community = e.latestEvent?.community || e.carousel?.community
    return community === selectedCommunity.value
  })
})

const calendarAttributes = computed(() => {
  try {
    return filteredEvents.value
      .map((e, idx) => {
        const d = e.latestEvent?.date
        if (!d) return null
        const dateObj = new Date(d)
        if (isNaN(dateObj)) return null
        const id = e.id ?? `event-fallback-${idx}`
        const color = e.latestEvent?.color || e.carousel?.color || '#3b82f6'
        
        return {
          key: `event-${id}-${d}`,
          id,
          dates: [dateObj],
          popover: { label: e.latestEvent?.title || '' },
          customData: e,
          
          highlight: {
            style: {
              backgroundColor: color,
            },
            contentStyle: {
              color: 'white !important', 
              fontWeight: 'bold'
            }
          },
          contentStyle: { borderLeft: `4px solid ${color}` }
        }
      })
      .filter(Boolean)
  } catch (err) {
    console.error('calendarAttributes error:', err)
    return []
  }
})

const currentEvent = computed(() => {
  console.log('=== currentEvent computed running ===')
  console.log('selectedDate.value:', selectedDate.value)
  console.log('filteredEvents.value:', filteredEvents.value)
  
  if (!selectedDate.value) {
    console.log('No date selected')
    return null
  }
  
  const sel = new Date(selectedDate.value)
  console.log('sel Date object:', sel)
  
  if (isNaN(sel)) {
    console.log('Invalid date')
    return null
  }
  
  const selYear = sel.getFullYear()
  const selMonth = String(sel.getMonth() + 1).padStart(2, '0')
  const selDay = String(sel.getDate()).padStart(2, '0')
  const selIso = `${selYear}-${selMonth}-${selDay}`
  
  console.log('Selected date ISO:', selIso)
  
  const found = filteredEvents.value.find(e => {
    console.log('Checking event:', e)
    const d = e.latestEvent?.date
    console.log('Event date string:', d)
    if (!d) return false
    
    const eventDate = new Date(d)
    const eventYear = eventDate.getFullYear()
    const eventMonth = String(eventDate.getMonth() + 1).padStart(2, '0')
    const eventDay = String(eventDate.getDate()).padStart(2, '0')
    const eventIso = `${eventYear}-${eventMonth}-${eventDay}`
    
    console.log('Event ISO:', eventIso, 'Match?', eventIso === selIso)
    
    return eventIso === selIso
  })
  
  console.log('Found event:', found)
  return found || null
})

function formatDateLong(dateString) {
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

function onDayClick(day) {
  console.log('Day clicked:', day)
  selectedDate.value = day.id 
}

const ctaText = computed(() => {
  if (!currentEvent.value) return ''
  const eventDate = new Date(currentEvent.value.latestEvent.date)
  return eventDate > new Date() ? 'Deelnemen' : 'Bekijk recap'
})

function getCommunityColor(community) {
  if (community === 'All') return '#6b7280' 
  
  
  const communityData = communityList.find(c => c.name === community)
  return communityData?.color || '#3b82f6'
}
</script>

<template>
  <div class="grid grid-cols-12 gap-6" style="grid-auto-rows: 1fr; align-items: stretch;">
    
    <div class="col-span-12 md:col-span-4 bg-white p-4 rounded-3xl shadow-lg border-5 flex flex-col h-full"
         :style="{ borderColor: currentEvent ? currentEvent.latestEvent.color : '#9ca3af' }">
      <div class="flex-1 flex flex-col overflow-hidden">
        <div v-if="currentEvent" class="flex flex-col h-full">
          <div v-if="currentEvent.latestEvent.image" class="mb-4 flex-shrink-0">
            <img
              :src="currentEvent.latestEvent.image"
              :alt="currentEvent.latestEvent.title"
              class="w-full h-40 md:h-48 object-cover rounded-2xl"
            />
          </div>

          <div class="flex-shrink-0">
            <h2 class="text-xl font-bold">{{ currentEvent.latestEvent.title }}</h2>
            <p class="text-gray-500">{{ formatDateLong(currentEvent.latestEvent.date) }} – {{ currentEvent.latestEvent.location }}</p>
          </div>
          
         
          <div class="mt-4 flex-1 overflow-hidden">
            <p class="line-clamp-3">{{ currentEvent.latestEvent.text || 'No additional info' }}</p>
          </div>
        </div>
        <div v-else class="flex items-center justify-center h-full">
          <p class="text-gray-500 text-center">Selecteer een datum uit de kalender om event details te zien.</p>
        </div>
      </div>

      <div class="mt-4 flex-shrink-0">
        <button
          v-if="currentEvent"
          class="w-full text-white px-4 py-2 rounded-3xl transition border-5 border-gray-300"
          :style="{ backgroundColor: currentEvent.latestEvent.color }"
        >
          {{ ctaText }}
        </button>
      </div>
    </div>

   
    <div class="col-span-12 md:col-span-4 bg-white p-4 rounded-3xl shadow-lg border-5 border-gray-400 flex flex-col h-full">
      <div class="w-full h-72 md:h-auto flex-1 flex items-center justify-center">
        <div class="calendar-center-container w-full mx-auto">
          <v-calendar
            v-model="selectedDate"
            class="calendar-centered w-full"
            :show-day-popover="false"
            :attributes="calendarAttributes"
            @dayclick="onDayClick"
          />
        </div>
      </div>
    </div>

   
    <div class="col-span-12 md:col-span-4 bg-white p-4 rounded-3xl shadow-lg border-5 border-gray-400 flex flex-col h-full">
      <div class="flex-1">
        <h3 class="font-bold mb-4">Filteren per community</h3>
        <div class="space-y-3">
          <label 
            v-for="c in communities" 
            :key="c" 
            class="flex items-center cursor-pointer group"
          >
            <div class="relative">
              <input 
                type="radio" 
                :value="c" 
                v-model="selectedCommunity"
                class="w-5 h-5 opacity-0 absolute cursor-pointer"
              />
              <div 
                class="w-5 h-5 rounded-full border-2 flex items-center justify-center transition"
                :style="{ 
                  borderColor: getCommunityColor(c),
                  backgroundColor: selectedCommunity === c ? getCommunityColor(c) : 'transparent'
                }"
              >
                <div 
                  v-if="selectedCommunity === c" 
                  class="w-2 h-2 rounded-full bg-white"
                ></div>
              </div>
            </div>
            <span class="ml-3 text-gray-700 group-hover:text-gray-900 transition">{{ c }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.calendar-center-container {
  width: 100%;
  max-width: 520px;
  padding: 0 0.5rem;
  margin-left: auto;
  margin-right: auto;
}


@media (max-width: 640px) {
  .calendar-center-container { max-width: 340px; }
}


::v-deep(.calendar-center-container .vc-root) {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}


::v-deep(.calendar-center-container .vc-pane),
::v-deep(.calendar-center-container .vc-grid),
::v-deep(.calendar-center-container .vc-scroll) {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}


::v-deep(.calendar-centered) {
  display: block !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

::v-deep(.vc-day:not(.vc-highlight) .vc-day-content) {
  color: #d1d5db !important; 
}


::v-deep(.vc-day:not(.vc-highlight):not(.is-not-in-month) .vc-day-content) {
  color: #9ca3af !important; 
}


::v-deep(.vc-highlight .vc-day-content),
::v-deep(.vc-day.vc-highlight .vc-day-content),
::v-deep(.vc-highlights .vc-day-content) {
  color: white !important;
  font-weight: bold !important;
}


::v-deep(.vc-highlight) {
  color: white !important;
}


.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>