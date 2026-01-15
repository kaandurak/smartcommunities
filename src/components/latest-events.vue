<script setup>
import { defineProps } from 'vue'

defineProps({
  events: {
    type: Array,
    required: true
  }
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
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
  v-for="(event, index) in events"
  :key="index"
  class="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col border-5"
  :style="{ borderColor: event.color.replace(')', ', 0.80)') }"
>
      <div
        class="h-48 bg-cover bg-center"
        :style="{ backgroundImage: `url(${event.image})` }"
      ></div>
      <div class="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
          <p class="text-gray-500 text-sm"> {{ formatDateLong(event.date) }} – {{ event.location }}</p>
        </div>
        <button
  class="mt-4 text-white px-4 py-2 rounded-3xl transition border-5 border-gray-300"
  :style="{
    backgroundColor: event.color,
    cursor: 'pointer',
  }"
>
  {{ event.cta }}
</button>
      </div>
    </div>
  </div>
</template>
