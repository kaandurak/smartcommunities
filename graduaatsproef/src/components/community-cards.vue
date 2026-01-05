<script setup>
defineProps({
  image: String,
  title: String,
  text: String,
  color: String,
  borderColor: String,
})
</script>

<template>
    <div
    class="border-6 rounded-3xl flex flex-col justify-end w-[18rem] h-[30rem] bg-cover bg-center p-10"
     :style="{
     backgroundImage: `url(${image})`,
     borderColor: borderColor
    }"
    >
    <div class="flex flex-col gap-1 ml-[-1rem] mb-[-1rem]">
      <h1 class="text-white font-bold text-2xl">
        {{ title }}
      </h1>

      <p class="text-white">
        {{ text }}
      </p>
    </div>
  </div>
</template>