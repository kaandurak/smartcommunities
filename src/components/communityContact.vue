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
          
          <!-- Contact Form - LEFT side on desktop -->
          <div>
            <!-- Mobile WhatsApp Button - Only visible on mobile, ABOVE form -->
            <div class="md:hidden mb-8">
              <h3 class="text-2xl font-bold text-white mb-4 text-center">
                Neem deel aan de {{ communityName }} Whatsapp community
              </h3>
              <a 
                :href="contact.whatsappLink"
                target="_blank"
                class="w-full px-8 py-4 bg-white text-gray-900 font-semibold rounded-3xl hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Join WhatsApp
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

          <!-- WhatsApp Section - RIGHT side on desktop, hidden on mobile -->
          <div class="hidden md:flex flex-col items-center justify-center">
            <h3 class="text-2xl font-bold text-white mb-4 text-center">
              Neem deel aan de {{ communityName }} Whatsapp community
            </h3>
            
            <div class="bg-white p-8 rounded-3xl shadow-xl">
              <img 
                :src="contact.whatsappQR" 
                alt="WhatsApp QR Code"
                class="w-64 h-64 object-contain"
              />
            </div>
            
            <a 
              :href="contact.whatsappLink"
              target="_blank"
              class="mt-6 px-8 py-3 bg-white text-gray-900 font-semibold rounded-3xl hover:bg-gray-100 transition flex items-center gap-2"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Join WhatsApp
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