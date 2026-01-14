<script setup>
import { defineProps } from 'vue'
import { RouterLink } from "vue-router";

// Props for dynamic events
defineProps({
  events: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      v-for="(event, index) in events"
      :key="index"
      class="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col"
    >
      <div
        class="h-48 bg-cover bg-center"
        :style="{ backgroundImage: `url(${event.image})` }"
      ></div>
      <div class="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 class="text-xl font-bold mb-2">{{ event.title }}</h3>
          <p class="text-gray-500 text-sm">{{ event.date }} – {{ event.location }}</p>
        </div>
        <button
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {{ event.cta }}
        </button>
      </div>
    </div>
  </div>
</template>
