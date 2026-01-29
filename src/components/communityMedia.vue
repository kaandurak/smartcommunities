<script setup>
import { ref, computed, defineProps } from 'vue'
import PhotoGalleryModal from './photogalleryModal.vue'

const props = defineProps({
  albums: {
    type: Array,
    required: true
  },
  social: {
    type: Object,
    required: true
  },
  communityColor: {
    type: String,
    required: true
  },
  communitySecondaryColor: { 
    type: String, 
    required: true 
  },
  communityName: {
    type: String,
    required: true
  }
})

const selectedAlbum = ref(null)

const displayAlbums = computed(() => {
  const customAlbums = props.albums

  const allImages = props.albums.flatMap(album => album.images)
  const allPhotosAlbum = {
    id: 'all-photos',
    title: `Alle ${props.communityName} foto's`,
    coverImage: props.albums[0]?.coverImage || '',
    images: allImages.length > 0 ? allImages : [props.albums[0]?.coverImage || '']
  }

  return [...customAlbums, allPhotosAlbum]
})

// Desktop grid class
const gridClass = computed(() => {
  const count = displayAlbums.value.length
  
  if (count === 1) return 'grid-cols-1'
  if (count === 2) return 'grid-cols-2'
  if (count === 3) return 'grid-cols-2'
  return 'grid-cols-2'
})

function getAlbumSpan(index) {
  const count = displayAlbums.value.length
  
  if (count === 1) return 'col-span-2'
  if (count === 2) return 'col-span-1'
  if (count === 3) {
    return index === 0 ? 'col-span-2' : 'col-span-1'
  }
  return 'col-span-1'
}

function openAlbum(album) {
  selectedAlbum.value = album
}

function closeAlbum() {
  selectedAlbum.value = null
}
</script>

<template>
  <div class="py-16 mt-0 border-t-5 border-b-5" :style="{ backgroundColor: communitySecondaryColor, borderColor: communityColor }">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-start-2 col-span-10">
       
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
     
       
          <div class="flex flex-col md:h-[600px]">
            <h2 class="text-3xl font-bold text-white mb-2">Media</h2>
            <p class="text-white font-bold text-lg mb-4">Albums</p>
            
            
            <div 
              class="grid gap-4 flex-1 overflow-y-auto grid-cols-1 md:grid-cols-2"
            >
              <button
                v-for="(album, index) in displayAlbums"
                :key="album.id"
                @click="openAlbum(album)"
                class="relative rounded-2xl overflow-hidden group cursor-pointer border-4 h-48 md:h-full md:min-h-[180px]"
                :class="{ 'md:col-span-2': getAlbumSpan(index) === 'col-span-2' }"
                :style="{ borderColor: communityColor }"
              >
                <img 
                  :src="album.coverImage" 
                  :alt="album.title"
                  class="w-full h-full object-cover transition group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <p class="text-white font-semibold text-sm">{{ album.title }}</p>
                </div>
              </button>
            </div>
          </div>
          
          <!-- Instagram Section -->
          <div class="flex flex-col md:h-[600px] h-[400px]">
            <h2 class="text-3xl font-bold text-white mb-2">Social Media</h2>
            <p class="text-white font-bold text-lg mb-4">Instagram</p>
            
            <div class="bg-white rounded-3xl p-6 flex-1 overflow-hidden flex flex-col items-center justify-center border-4" :style="{ borderColor: communityColor }">
              <div class="flex flex-col items-center justify-center text-center">
                <svg class="w-20 h-20 text-pink-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <p class="text-gray-900 font-bold text-xl mb-3">@{{ social.instagram.username }}</p>
                <p class="text-gray-600 mb-6">Volg ons op Instagram voor updates!</p>
                <a 
                  :href="social.instagram.url" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Bezoek Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <PhotoGalleryModal :album="selectedAlbum" @close="closeAlbum" />
  </div>
</template>