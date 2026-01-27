<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCommunityById } from '@/data/communities.js'
import CommunityHeader from '@/components/communityHeader.vue'
import CommunityMobileNav from '@/components/communityMobileNav.vue'
import CommunityHero from '@/components/communityHero.vue'
import CommunityAbout from '@/components/communityAbout.vue'
import CommunityMedia from '@/components/communityMedia.vue'
import CommunityEvents from '@/components/communityEvents.vue'
import CommunityContact from '@/components/communityContact.vue'
import Footer from '@/components/footer.vue'

const route = useRoute()
const router = useRouter()

const community = computed(() => {
  const id = route.params.id
  const found = getCommunityById(id)
  
  if (!found) {
    router.push('/')
    return null
  }
  
  return found
})
</script>

<template>
  <div v-if="community" class="min-h-screen bg-white">
    <CommunityHeader 
      :community-name="community.name" 
      :community-color="community.color"
      :community-secondary-color="community.secondaryColor"
    />
    
    <!-- Mobile Navigation - only visible on mobile -->
    <CommunityMobileNav :community-color="community.color" />
    
    <section id="hero">
      <CommunityHero 
        :hero="community.hero" 
        :name="community.name"
        :community-color="community.color"
        :community-secondary-color="community.secondaryColor"
      />
    </section>
    
    <section id="about">
      <CommunityAbout 
        :about="community.about"
        :community-color="community.color"
        :community-secondary-color="community.secondaryColor"
      />
    </section>
    
    <section id="media">
      <CommunityMedia 
        :albums="community.albums" 
        :social="community.social"
        :community-color="community.color"
        :community-secondary-color="community.secondaryColor"
        :community-name="community.name"
      />
    </section>
    
    <section id="events">
      <CommunityEvents 
        :community-name="community.name"
        :community-color="community.color"
        :community-secondary-color="community.secondaryColor"
      />
    </section>
    
    <section id="contact" class="mb-0">
      <CommunityContact 
        :contact="community.contact"
        :community-color="community.color"
        :community-secondary-color="community.secondaryColor"
        :community-name="community.name"
      />
    </section>
    
    <div class="mt-0">
      <Footer />
    </div>
  </div>
</template>