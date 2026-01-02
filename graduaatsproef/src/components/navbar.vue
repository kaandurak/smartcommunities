<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-white grid grid-cols-12 p-5 shadow-2xl mb-3">
    <div class="w-60 h-10 col-start-2 col-span-2">
        <img class="w-auto h-10" src="../assets/logo_pxl_smart-ict.svg" alt="pxl-logo">
    </div>
  </div>


  <div class="grid grid-cols-12 ">

    <div class="col-start-2 col-span-10 flex justify-between">
         <button class="bg-white border-gray-400 border-5 rounded-2xl text-black w-[49%] p-1 focus:bg-gray-600 focus:text-white text-base">
        Communities
    </button>

    <button  class="bg-white border-gray-400 border-5 rounded-2xl text-black w-[49%] p-1 focus:bg-gray-600 focus:text-white text-base">
        Events
    </button>
    </div>
   
  </div>
</template>