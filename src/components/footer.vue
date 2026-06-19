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
        <div class="flex flex-wrap gap-x-8 gap-y-2 text-white">

          <div class="flex flex-col gap-y-2">
            <a href="#" class="underline underline-offset-2 hover:text-gray-300 transition">Contact</a>
            <a href="#" class="underline underline-offset-2 hover:text-gray-300 transition">Privacy</a>
            <a href="#" class="underline underline-offset-2 hover:text-gray-300 transition">Communities</a>
          </div>

          <div class="flex flex-col gap-y-2">
            <a href="/eventview" class="underline underline-offset-2 hover:text-gray-300 transition">Events</a>
            <a href="#" class="underline underline-offset-2 hover:text-gray-300 transition">Merchandise</a>
            <a href="#" class="underline underline-offset-2 hover:text-gray-300 transition">Wie zijn we?</a>
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
          <a href="#" class="underline underline-offset-2 hover:text-gray-400 transition">Privacy verklaring</a>
          <a href="#" class="underline underline-offset-2 hover:text-gray-400 transition">Cookie beleid</a>
          <a href="https://pxl-research.be/" class="underline underline-offset-2 hover:text-gray-400 transition">Back to PXL</a>
        </div>
        <div class="flex flex-wrap gap-4 mt-3">
          <a href="#" class="underline underline-offset-2 hover:text-gray-400 transition">nl</a>
          <a href="#" class="underline underline-offset-2 hover:text-gray-400 transition">en</a>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
