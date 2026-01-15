<script setup>
import LatestEvents from '@/components/latest-events.vue'
import { events } from '@/data/events.js'


const latestEvents = events.filter(e => e.latestEvent).map(e => e.latestEvent)

</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-start-2 col-span-10">
      <h1 class="text-3xl font-bold mt-5 mb-4">Laatste Events</h1>

      <LatestEvents :events="latestEvents" />
    </div>
  </div>
</template>
