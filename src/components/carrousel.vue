<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { events } from '@/data/events.js'

const slides = ref(events.filter(e => e.showInCarousel))


// Slide determinatie
const currentIndex = ref(0)
const prevIndex = ref(0)
const direction = ref('right')

// Slide logica
function next() {
  prevIndex.value = currentIndex.value
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

function prev() {
  prevIndex.value = currentIndex.value
  direction.value = 'left'
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

// Cirkels onder slide
function goToSlide(index) {
  if (index === currentIndex.value) return
  prevIndex.value = currentIndex.value

  // Directie determinatie 
  direction.value = index > currentIndex.value ? 'right' : 'left'

  // Fix foute directie
  if (currentIndex.value === slides.value.length - 1 && index === 0) direction.value = 'right'
  if (currentIndex.value === 0 && index === slides.value.length - 1) direction.value = 'left'
  currentIndex.value = index
  startAutoSlide()
}

// Automatische slide interval
let intervalId
const delay = 5000
function startAutoSlide() {
  clearInterval(intervalId)
  intervalId = setInterval(() => next(), delay)
}

// Reset van interval na klik van gebruiker
function nextSlide() { next(); startAutoSlide() }
function prevSlide() { prev(); startAutoSlide() }

onMounted(startAutoSlide)
onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <div class="relative w-screen h-[70vh] overflow-hidden mt-4 border-b-5 border-t-5 border-gray-500 border-opacity-50">
    <!-- Achtergrond van slides -->
    <div
      v-for="(slide, index) in slides"
      :key="'bg' + index"
      class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
      :style="{
        backgroundImage: `url(${slide.image})`,
        transform:
          index === currentIndex ? 'translateX(0%)' :
          index === prevIndex && direction === 'right' ? 'translateX(-100%)' :
          index === prevIndex && direction === 'left' ? 'translateX(100%)' :
          direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)'
      }"
    ></div>

    <!-- Gradient overlay -->
    <div
      v-for="(slide, index) in slides"
      :key="'overlay' + index"
      class="absolute inset-0 transition-transform duration-700 ease-in-out"
      :style="{
        background: `linear-gradient(to right, ${slide.color} 0%, transparent 50%)`,
        transform:
          index === currentIndex ? 'translateX(0%)' :
          index === prevIndex && direction === 'right' ? 'translateX(-100%)' :
          index === prevIndex && direction === 'left' ? 'translateX(100%)' :
          direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)'
      }"
    ></div>

    <!-- Text content -->
    <div class="relative z-10 h-full grid grid-cols-12 items-end">
      <div
        v-for="(slide, index) in slides"
        :key="'text' + index"
        class="absolute bottom-0 col-span-5 col-start-2 pb-12 text-white transition-all duration-700 ease-in-out"
        :class="{
          'opacity-100 translate-x-0 pointer-events-auto': index === currentIndex,
          'opacity-0 -translate-x-full pointer-events-none': index === prevIndex && direction === 'right',
          'opacity-0 translate-x-full pointer-events-none': index === prevIndex && direction === 'left',
          'opacity-0 pointer-events-none': index !== currentIndex && index !== prevIndex
        }"
      >
        <h1 class="text-4xl font-bold">{{ slide.title }}</h1>
        <h2 class="text-2xl font-bold mt-2.5">{{ slide.community }}</h2>
        <p class="mt-4 text-lg">{{ slide.text }}</p>
        <button class="mt-6 bg-white text-black px-6 py-3 rounded-3xl border-5 border-gray-500">{{ slide.cta }}</button>
      </div>
    </div>

    <!-- Pijlen -->
    <button @click="prevSlide" class="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextSlide" class="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Cirkel indicatoren -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      <span
        v-for="(slide, index) in slides"
        :key="'dot' + index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full cursor-pointer transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'"
      ></span>
    </div>
  </div>
</template>
