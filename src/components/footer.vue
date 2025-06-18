<template>
    <div class="px-8 lg:px-12 py-8 lg:px-32">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <router-link to="/" class="text-3xl font-bold font-audiowide logo-text">
                Kayden
            </router-link>

            <div class="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 font-poppins">
                <a href="tel:+639282543405" class="text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg">
                    +63 928 254 3405
                </a>
                <a href="mailto:mimosaver68@gmail.com"
                    class="text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg">
                    mimosaver68@gmail.com
                </a>
            </div>
        </div>

        <div class="border-t border-gray-600 mb-8"></div>

        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
            <nav class="mb-4 md:mb-0">
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 font-poppins">
                    <button 
                        @click="navigateTo('/about')"
                        class="md:text-lg lg:text-xl font-medium text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg focus:outline-none text-left">
                        About
                    </button>
                    
                    <button 
                        @click="navigateTo('/projects')"
                        class="md:text-lg lg:text-xl font-medium text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg focus:outline-none text-left">
                        Projects
                    </button>
                    
                    <button 
                        @click="navigateTo('/contact')"
                        class="md:text-lg lg:text-xl font-medium text-white hover:text-[#13B0F5] transition-all duration-300 hover:-translate-y-0.5 hover:drop-shadow-lg focus:outline-none text-left">
                        Contact
                    </button>
                </div>
            </nav>

            <div class="text-gray-400 font-poppins">
                @2025 Gester Lorica. All rights reserved.
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}

</script>

<style scoped>
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

@font-face {
  font-family: 'Audiowide';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/audiowide/v19/l7gdbjpo0cum0ckerWCtkQXPExpQBw.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FFFD;
}
</style>