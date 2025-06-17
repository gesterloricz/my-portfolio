<template>
  <header>
    <div class="flex justify-between items-center p-8 lg:px-32 relative z-20">
      <router-link to="/" class="text-3xl font-bold font-audiowide logo-text">
        Kayden
      </router-link>

      <div class="md:hidden z-30">
        <button @click="toggleMenu" class="block focus:outline-none">
          <span class="text-5xl text-white">
            <Icon icon="material-symbols:menu" v-if="!isMenuOpen" />
            <Icon icon="material-symbols:close" v-else />
          </span>
        </button>
      </div>

      <nav :class="[
        'fixed inset-0 z-20 flex flex-col items-center justify-center md:relative md:bg-transparent md:flex md:flex-row',
        isMenuOpen ? 'block bg-slate-900/95 backdrop-blur-xl' : 'hidden'
      ]">
        <div class="flex flex-col md:flex-row items-center space-y-5 md:space-x-8 md:space-y-0 font-poppins">
          <button 
            @click="navigateTo('/about')"
            class="md:text-lg lg:text-xl font-medium text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg focus:outline-none">
            About
          </button>
          
          <button 
            @click="navigateTo('/projects')"
            class="md:text-lg lg:text-xl font-medium text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg focus:outline-none">
            Projects
          </button>
          
          <button 
            @click="navigateTo('/contact')"
            class="md:text-lg lg:text-xl px-8 py-3 rounded-full font-medium bg-primary-button hover:bg-primary-button-hover text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none">
            Contact
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navigateTo = (path: string) => {
  router.push(path)
  isMenuOpen.value = false
}
</script>

<style scoped>
/* Import Audiowide font directly in component */
@import url('https://fonts.googleapis.com/css2?family=Audiowide:wght@400&display=swap');

.font-audiowide {
  font-family: 'Audiowide', cursive !important;
  font-weight: 400;
  font-display: swap;
}

.logo-text {
  color: #13B0F5;
  font-family: 'Audiowide', cursive !important;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(19, 176, 245, 0.3);
  transition: all 0.3s ease;
}

.logo-text:hover {
  transform: scale(1.05);
  text-shadow: 0 0 15px rgba(19, 176, 245, 0.5);
}

/* Ensure font loads properly with fallback */
@font-face {
  font-family: 'Audiowide';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/audiowide/v19/l7gdbjpo0cum0ckerWCtkQXPExpQBw.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.bg-primary-button {
  background-color: var(--color-primary);
}

.bg-primary-button:hover,
.hover\:bg-primary-button-hover:hover {
  background-color: #0ea5e9;
}
</style>