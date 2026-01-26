<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  image: String,
  title: String,
  text: String,
  color: String,
  borderColor: String,
  communityId: String
})

const router = useRouter()

function goToCommunity() {
  if (props.communityId) {
    router.push({ name: 'community', params: { id: props.communityId } })
  }
}
</script>

<template>
  <div
    @click="goToCommunity"
    class="border-6 rounded-3xl flex flex-col justify-end w-[18rem] h-[30rem] p-10 cursor-pointer transition-all duration-300 hover:shadow-2xl overflow-hidden group relative"
    :style="{
      borderColor: borderColor
    }"
  >
  
    <div 
      class="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
      :style="{
        backgroundImage: `url(${image})`
      }"
    ></div>
    
    <div class="relative flex flex-col gap-1 ml-[-1rem] mb-[-1rem] z-10">
      <h1 class="text-white font-bold text-2xl">
        {{ title }}
      </h1>

      <p class="text-white">
        {{ text }}
      </p>
    </div>
  </div>
</template>