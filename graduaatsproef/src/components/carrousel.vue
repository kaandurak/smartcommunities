<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const slides = [
  '../src/assets/carrousel-imgs/Van-Kou-naar-Kracht-MAI-HOME-event-Tiwos_f367de8343bc653592cf5be376ac4c61.webp',
  'img2.webp',
  'img3.webp',
  'img4.webp',
  'img5.webp',
]

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}
</script>



<template>
   
<div class="relative w-full">
  <div class="relative h-56 overflow-hidden md:h-96">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-700"
      :class="{
        'opacity-100': index === currentSlide,
        'opacity-0': index !== currentSlide
      }"
    >
      <img
        :src="slide"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
  </div>

  <!-- Prev -->
  <button
    @click="prevSlide"
    class="absolute left-4 top-1/2 -translate-y-1/2 z-10"
  >
    Prev
  </button>

  <!-- Next -->
  <button
    @click="nextSlide"
    class="absolute right-4 top-1/2 -translate-y-1/2 z-10"
  >
    Next
  </button>
</div>


</template>
