<script setup>
import { defineProps } from 'vue'

defineProps({
  about: {
    type: Object,
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
</script>

<template>
  <div class="bg-white py-16 mb-0">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-start-2 col-span-10">
       
        <div class="flex gap-8 mb-20">
          
          <div class="flex-shrink-0">
            <img 
              :src="about.what.image" 
              :alt="about.what.title"
              class="w-96 h-96 object-cover rounded-3xl shadow-lg border-5" 
              :style="{ borderColor: communitySecondaryColor }"
            />
          </div>
          
          <div class="flex-1 flex flex-col gap-8">
            <div>
              <h2 class="text-2xl font-bold mb-4">{{ about.what.title }}</h2>
              <p class="text-lg leading-relaxed text-gray-700">{{ about.what.text }}</p>
            </div>
            <div>
              <h2 class="text-2xl font-bold mb-4">{{ about.who.title }}</h2>
              <p class="text-lg leading-relaxed text-gray-700">{{ about.who.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>