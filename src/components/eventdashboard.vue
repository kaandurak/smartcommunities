<script setup>
import { ref, computed } from 'vue'
import { events } from '@/data/events.js'

const selectedDate = ref(null)
const selectedCommunity = ref('All')


const communities = computed(() => {
  const set = new Set()
  events.forEach(e => {
    const c = e.latestEvent?.community || e.carousel?.community
    if (c) set.add(c)
  })
  return ['All', ...Array.from(set)]
})

const filteredEvents = computed(() => {
  if (selectedCommunity.value === 'All') return events
  return events.filter(e => {
    const community = e.latestEvent?.community || e.carousel?.community
    return community === selectedCommunity.value
  })
})


const eventDates = computed(() =>
  filteredEvents.value
    .map(e => e.latestEvent?.date)
    .filter(Boolean)
)


const currentEvent = computed(() => {
  if (!selectedDate.value) return null

  const sel = new Date(selectedDate.value)
  if (isNaN(sel)) return null
  const selIso = sel.toISOString().slice(0, 10)
  return (
    filteredEvents.value.find(e => {
      const d = e.latestEvent?.date
      if (!d) return false
      return new Date(d).toISOString().slice(0, 10) === selIso
    }) || null
  )
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
</script>

<template>
  <div class="grid grid-cols-12 gap-6">

 
    <div class="col-span-12 md:col-span-4 bg-white p-4 rounded-3xl shadow-lg border-5 border-gray-400">
      <div v-if="currentEvent">
        <h2 class="text-xl font-bold">{{ currentEvent.latestEvent.title }}</h2>
        <p class="text-gray-500">{{ formatDateLong(currentEvent.latestEvent.date) }} – {{ currentEvent.latestEvent.location }}</p>
        <p class="mt-4">{{ currentEvent.latestEvent.text || 'No additional info' }}</p>
        <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {{ currentEvent.latestEvent.cta }}
        </button>
      </div>
      <div v-else>
        <p>Selecteer een event uit de kalender.</p>
      </div>
    </div>

  
    <div class="col-span-12 md:col-span-4 bg-white p-4 rounded-3xl shadow-lg border-5 border-gray-400">
      <div class="w-full h-72 bg-gray-50 border rounded-md flex items-center justify-center text-gray-400"> Kalender placeholder </div>
    </div>

    <div class="col-span-12 md:col-span-4 bg-white p-4 rounded-3xl shadow-lg border-5 border-gray-400">
      <h3 class="font-bold mb-2">Filteren per community</h3>
      <select v-model="selectedCommunity" class="border rounded px-3 py-2 w-full">
        <option v-for="c in communities" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

  </div>
</template>