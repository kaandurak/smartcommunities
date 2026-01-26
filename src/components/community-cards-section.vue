<script setup>
import CommunityCards from './community-cards.vue'
import { communities } from '@/data/communities.js'


const cards = communities.map((community, index) => ({
  image: community.cardImage,
  title: community.name,
  text: community.cardDescription,
  borderColor: community.cardBorderColor,
  communityId: community.id,
  offset: index % 2 === 1
}))
</script>

<template>
  <div class="grid grid-cols-12 mb-20">
    <div class="col-start-2 col-span-10">
      <h1 class="text-3xl font-extrabold mt-20">
        Communities
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start mt-4">
        <CommunityCards
          v-for="(card, index) in cards"
          :key="card.communityId"
          :image="card.image"
          :title="card.title"
          :text="card.text"
          :border-color="card.borderColor"
          :community-id="card.communityId"
          class="w-full"
          :class="{ 'lg:mt-10': card.offset }"
        />
      </div>
    </div>
  </div>
</template>