<script setup>
import { RouterLink } from "vue-router";
import FooterImg from '../assets/footer/footer.webp'
</script>

<template>
<div class="p-5 shadow-2xl mt-0 grid grid-cols-12
            bg-cover bg-center bg-no-repeat"
     :style="{ backgroundImage: `url(${FooterImg})` }">


  <div class="col-start-2 col-span-10">
    
   
    <div class="mt-10">
      <img class="w-auto h-10" src="../assets/logo_pxl_bol_witrand.svg" alt="pxl-logo">

<div class="mt-8 grid gap-x-4">
  
  <div class=" flex flex-wrap gap-x-8 gap-y-2 text-white">
   
    <div class="flex flex-col gap-y-2">
      <p class="underline underline-offset-2">Contact</p>
      <p class="underline underline-offset-2">Privacy</p>
      <p class="underline underline-offset-2">Communities</p>
    </div>

    
    <div class="flex flex-col gap-y-2">
      <p class="underline underline-offset-2">Events</p>
      <p class="underline underline-offset-2">Merchandise</p>
      <p class="underline underline-offset-2">Wie zijn we?</p>
    </div>
  </div>
</div>

    </div>

   
    <div class="mt-8">
      <div class="w-full h-px bg-gray-700"></div>
    </div>

   
    <div class="mt-6 mb-5">
      <div class="flex flex-col text-gray-500 text-xs">
        <div class="flex flex-wrap gap-4 mb-2">
          <p class="underline underline-offset-2">Privacy verklaring</p>
          <p class="underline underline-offset-2">Cookie beleid</p>
          <p class="underline underline-offset-2">Back to PXL</p>
        </div>
        <div class="flex flex-wrap gap-4 mt-3">
          <p class="underline underline-offset-2">nl</p>
          <p class="underline underline-offset-2">en</p>
        </div>
      </div>
    </div>

  </div>
</div>




</template>