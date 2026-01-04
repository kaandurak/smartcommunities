<script setup>
import CommunityCards from './community-cards.vue';
</script>

<template>
  
  <div class="w-screen px-4">
  
    <div class="grid grid-cols-14">
        
    
      <div class="col-start-2 col-span-12">
      
        <div class="max-w-[1700px]">
            <h1 class="text-3xl font-bold mt-8">
            Communities
            </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start mt-4">
            <CommunityCards class="w-full" />
            <CommunityCards class="w-full lg:mt-15" />
            <CommunityCards class="w-full" />
            <CommunityCards class="w-full lg:mt-15" />
            <CommunityCards class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>