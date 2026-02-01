<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  contact: {
    type: Object,
    required: true
  },
  communityColor: {
    type: String,
    required: true
  },
  communityName: {
    type: String,
    required: true
  },
  communitySecondaryColor: { type: String, required: true }
})

const formData = ref({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  console.log('Form submitted:', formData.value)
  alert('Bedankt voor je bericht! (Form functionality nog toe te voegen)')
  
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<template>
  <div class="py-16 border-t-5 border-b-5" :style="{ backgroundColor: communitySecondaryColor, borderColor: communityColor }">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-start-2 col-span-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          
          <div>
          
            <div class="md:hidden mb-8">
              <h3 class="text-2xl font-bold text-white mb-4 text-center">
                {{ contact.title }}
              </h3>
              <a
                :href="contact.link"
                target="_blank"
                class="w-full px-8 py-4 bg-white text-gray-900 font-semibold rounded-3xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                {{ contact.buttonText }}
              </a>
            </div>

            <h2 class="text-3xl font-bold text-white mb-8">Contact</h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <input
                v-model="formData.name"
                type="text"
                placeholder="Uw volledige naam"
                required
                class="w-full px-6 py-4 rounded-3xl border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-white/90"
              />
              
              <input
                v-model="formData.email"
                type="email"
                placeholder="Uw e-mail adres of nummer"
                required
                class="w-full px-6 py-4 rounded-3xl border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-white/90"
              />
              
              <textarea
                v-model="formData.message"
                placeholder="Uw bericht"
                required
                rows="6"
                class="w-full px-6 py-4 rounded-3xl border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-white/90 resize-none"
              ></textarea>
              
              <button
                type="submit"
                class="w-full py-4 rounded-3xl font-semibold text-lg transition"
                :style="{ 
                  backgroundColor: communityColor === 'rgb(50, 50, 120)' ? 'rgba(30, 30, 80, 0.8)' : 'rgba(0, 0, 0, 0.2)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }"
              >
                Verzenden
              </button>
            </form>
          </div>

         
          <div class="hidden md:flex flex-col items-center justify-center">
            <h3 class="text-2xl font-bold text-white mb-4 text-center">
              {{ contact.title }}
            </h3>

            <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
              <img
                :src="contact.image"
                alt="Contact Image"
                class="w-80 h-80 object-cover"
              />
            </div>

            <a
              :href="contact.link"
              target="_blank"
              class="mt-6 px-8 py-3 bg-white text-gray-900 font-semibold rounded-3xl hover:bg-gray-100 transition flex items-center gap-2"
            >
              {{ contact.buttonText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

input:focus,
textarea:focus {
  outline: none;
}
</style>