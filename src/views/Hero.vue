<template>
  <main class="px-8 lg:px-12 py-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between min-h-[60vh]">

        <div class="flex-1 mb-12 lg:mb-0 lg:pr-12 mr-4" ref="textSection">
          <div class="space-y-2">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span class="block text-white hero-line" style="animation-delay: 0.2s">Hi,</span>
              <span class="block text-white hero-line" style="animation-delay: 0.4s">My name is</span>
              <span class="block hero-line gradient-name" style="animation-delay: 0.6s">Gester Lorica</span>
              <span class="block text-white hero-line" style="animation-delay: 0.8s">I build things for Web.</span>
            </h1>
          </div>
        </div>

        <div class="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0" ref="imageSection">
          <div class="profile-container">
            <img src="/profile.svg" alt="Profile" class="w-full h-full object-cover rounded-full profile-image" />
            <div class="profile-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const textSection = ref<HTMLElement | null>(null)
const imageSection = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    if (textSection.value) {
      const heroLines = textSection.value.querySelectorAll('.hero-line') as NodeListOf<HTMLElement>
      heroLines.forEach((line: HTMLElement) => {
        line.classList.add('animate-slide-in-left')
      })
    }
    
    if (imageSection.value) {
      const profileContainer = imageSection.value.querySelector('.profile-container') as HTMLElement
      if (profileContainer) {
        profileContainer.classList.add('animate-fade-in-scale')
      }
    }
  }, 300)
})
</script>

<style scoped>
.hero-line {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-slide-in-left {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.gradient-name {
  background: linear-gradient(90deg, #13B0F5 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-container {
  position: relative;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-fade-in-scale {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.profile-image {
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.profile-image:hover {
  transform: scale(1.05);
}

.profile-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.2), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.profile-container:hover .profile-glow {
  opacity: 1;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.6; }
}


@media (max-width: 768px) {
  .hero-line {
    transform: translateX(-30px);
  }
  
  .profile-container {
    max-width: 300px;
  }
} 

.hero-line:nth-child(1):hover,
.hero-line:nth-child(2):hover,
.hero-line:nth-child(4):hover {
  color: #f0f9ff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  transform: translateX(5px);
  transition: all 0.3s ease;
}
</style>