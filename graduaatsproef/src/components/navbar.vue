<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-white grid grid-cols-12 p-7 shadow-2xl mb-7">
    <div class="w-60 h-auto col-start-2 col-span-2">
        <img src="../assets/logo_pxl_smart-ict.svg" alt="pxl-logo">
    </div>
  </div>


  <div class="grid grid-cols-12">

    <RouterLink to="/eventview">
        Event
    </RouterLink>

    <div class="col-start-2 col-span-10 flex justify-between">
         <button class="bg-white border-gray-400 border-4 rounded  text-black w-[45%] p-4 focus:bg-gray-600 focus:text-white ">
        Comunnities
    </button>

    <button  class="bg-white border-gray-400 border-4 rounded  text-black w-[45%] p-4 focus:bg-gray-600 focus:text-white">
        Events
    </button>
    </div>
   
  </div>
</template>