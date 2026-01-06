<script setup>

import CommunityCards from './community-cards.vue';
import { ref } from 'vue'

import img1 from '../assets/community-imgs/MAI-HOME-hs.png'
import img2 from '../assets/community-imgs/Civic-Tech-hs.png'
import img3 from '../assets/community-imgs/Women-in-Science-hs.png'
import img4 from '../assets/community-imgs/AIDOPT-hs.png'
import img5 from '../assets/community-imgs/LLASER-hs.png'

let cards=ref([
    {
    image: img1,
    title: 'MAI-HOME',
    text: 'Bespaar energie aan de hand van AI!',
    borderColor: 'rgba(192, 73, 255, 0.8)',
    offset:false,
    },

    {
    image: img2,
    title: 'Civic Tech',
    text: 'Projecten voor de overheid van de bevolking!',
    borderColor: 'rgba(151, 0, 0, 0.8)',
    offset:true,
    },
     {
    image: img3,
    title: 'Women in Science',
    text: 'Vrouwen binnen Wetenschap in de kijker!',
    borderColor: 'rgba(161, 127, 102, 0.8)',
    offset:false,
    },
      {
    image: img4,
    title: 'AIDOPT',
    text: 'AI assistants & agents als versterkende schakel.',
    borderColor: 'rgba(0, 93, 157, 0.8)',
    offset:true,
    },
      {
    image: img5,
    title: 'Live by your own Code',
    text: 'Secure. Smart. Seamless.',
    borderColor: 'rgb(48, 140, 140)',
    offset:false,
    },
])
</script>

<template>
  

      
 <div class="grid grid-cols-12">
  <div class="col-start-2 col-span-10">
    <h1 class="text-3xl font-bold mt-20">
      Communities
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start mt-4">
      <CommunityCards
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :text="card.text"
        :borderColor="card.borderColor"
        class="w-full"
        :class="{ 'lg:mt-10': card.offset }"
      />
    </div>
  </div>
</div>



</template>