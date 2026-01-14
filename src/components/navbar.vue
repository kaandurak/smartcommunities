<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- Logo Row -->
  <div class="bg-white grid grid-cols-12 p-5 shadow-2xl mb-3">
    <div class="w-60 h-10 col-start-2 col-span-2">
      <img class="w-auto h-10" src="../assets/logo_pxl_smart-ict.svg" alt="pxl-logo">
    </div>
  </div>

  <!-- Navigation Buttons -->
  <div class="grid grid-cols-12">
    <div class="col-start-2 col-span-10 flex justify-between">
      
      <!-- Communities button -->
      <RouterLink to="/" class="w-[49%]">
        <button class="bg-white border-gray-400 border-5 rounded-2xl text-black w-full p-1 focus:bg-gray-600 focus:text-white text-base">
          Communities
        </button>
      </RouterLink>

      <!-- Events button -->
      <RouterLink to="/eventview" class="w-[49%]">
        <button class="bg-white border-gray-400 border-5 rounded-2xl text-black w-full p-1 focus:bg-gray-600 focus:text-white text-base">
          Events
        </button>
      </RouterLink>

    </div>
  </div>
</template>
