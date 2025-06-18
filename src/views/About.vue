<template>
    <div class="bg-primary text-white">
        <section class="min-h-[80vh] flex flex-col justify-center px-8 lg:px-12 py-8">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
                    <div class="flex-shrink-0" ref="imageSection">
                        <div class="profile-container">
                            <img src="/profile.svg" alt="Profile"
                                class="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full profile-image" />
                            <div class="profile-glow"></div>
                        </div>
                    </div>

                    <div class="flex-1 lg:pl-8" ref="heroSection">
                        <h2 class="text-3xl lg:text-4xl font-bold mb-8 hero-title" style="animation-delay: 0s">
                            Hi!, I'm Gester A Lorica.
                        </h2>

                        <div class="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p class="hero-paragraph" style="animation-delay: 0.2s">
                                I'm someone who enjoys learning new things, especially when it comes to websites and how
                                they work. I like creating things that people can use and understand easily.
                            </p>

                            <p class="hero-paragraph" style="animation-delay: 0.4s">
                                I'm an aspiring Full Stack Web Developer. I'm learning how to build both the front part
                                of websites that users see and the back part that makes everything work smoothly.
                            </p>

                            <p class="hero-paragraph" style="animation-delay: 0.6s">
                                I'm still growing in this field, but I'm working hard to improve my skills.
                                I'm excited about the journey ahead and looking forward to building more projects in the
                                future.
                            </p>

                            <p class="hero-paragraph" style="animation-delay: 0.8s">
                                When I’m not coding, you’ll probably find me out for a walk, going on a run, or hiking
                                somewhere peaceful. Music is a big part of my life-anything from upbeat pop to mellow indie vibes.
                                And sometimes, I just wander around with my camera, capturing random street scenes that
                                tell little stories of their own.
                            </p>
                        </div>
                        <button
                            class="mt-8 bg-primary-button hover:bg-primary-button-hover text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hero-button"
                            style="animation-delay: 0.8s">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <div class="text-center mt-14 mb-8 animate-on-scroll" ref="skillsHeader">
            <h2 class="text-3xl lg:text-4xl font-bold">Technical Skills</h2>
            <p class="text-gray-300 mt-4 text-lg">
                These are the technical skills I've been learning and using throughout my journey as a developer.
            </p>
        </div>

       <section class="px-8 lg:px-12 py-16">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-3 gap-6">
      <div class="col-span-full animate-on-scroll" ref="skillsGrid">
        <div class="flex justify-center">
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10 justify-items-center max-w-5xl">
            <div class="skill-item" style="animation-delay: 0.1s">
              <img src="/html.svg" alt="HTML5"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">HTML5</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.2s">
              <img src="/css.svg" alt="CSS3"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">CSS3</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.3s">
              <img src="/js.svg" alt="JavaScript"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">JavaScript</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.4s">
              <img src="/react.svg" alt="React"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">React</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.5s">
              <img src="/laravel.svg" alt="Laravel"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">Laravel</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.6s">
              <img src="/mysql.svg" alt="MySQL"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">MySQL</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.7s">
              <img src="/tailwindcss.svg" alt="Tailwind CSS"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">Tailwind CSS</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.8s">
              <img src="/mariadb.svg" alt="MariaDB"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">MariaDB</span>
            </div>
            <div class="skill-item" style="animation-delay: 0.9s">
              <img src="/git.svg" alt="Git"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">Git</span>
            </div>
            <div class="skill-item" style="animation-delay: 1.0s">
              <img src="/vue.svg" alt="Vue.js"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scalne-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">Vue.js</span>
            </div>
            <div class="skill-item" style="animation-delay: 1.1s">
              <img src="/vscode.svg" alt="VS Code"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">VS Code</span>
            </div>
            <div class="skill-item" style="animation-delay: 1.2s">
              <img src="/github.svg" alt="GitHub"
                class="w-12 h-12 lg:w-16 lg:h-16 hover:scale-110 transition-transform skill-icon mb-3" />
              <span class="skill-name">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <section class="px-8 lg:px-12 py-16">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12 animate-on-scroll" ref="certificatesHeader">
                    <h2 class="text-3xl lg:text-4xl font-bold">Certificates & Achievements</h2>
                    <p class="text-gray-300 mt-4 text-lg">A growing journey of learning, with more certificates and
                        achievements to come.</p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll" ref="certificatesGrid">

                    <div class="bg-[rgba(35,32,43,0.57)] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 certificate-card"
                        style="animation-delay: 0.1s">
                        <div class="mb-4">
                            <img src="/certificate.svg" alt="IT Specialist - Databases Certificate"
                                class="w-full h-48 object-contain rounded-lg mb-4 bg-white p-2" />
                            <h3 class="text-xl font-semibold text-center">IT Specialist - Databases</h3>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400">Pearson VUE</span>
                            <span class="text-sm text-blue-400">December 2024</span>
                        </div>
                    </div>

                    <div class="bg-[rgba(35,32,43,0.57)] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 certificate-card"
                        style="animation-delay: 0.2s">
                        <div class="mb-4">
                            <div class="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                                <span class="text-6xl">❓</span>
                            </div>
                            <h3 class="text-xl font-semibold text-center">Stay Tuned</h3>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400">????</span>
                            <span class="text-sm text-blue-400">????</span>
                        </div>
                    </div>

                    <div class="bg-[rgba(35,32,43,0.57)] rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 certificate-card"
                        style="animation-delay: 0.3s">
                        <div class="mb-4">
                            <div class="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                                <span class="text-6xl">❓</span>
                            </div>
                            <h3 class="text-xl font-semibold text-center">Stay Tuned</h3>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-400">????</span>
                            <span class="text-sm text-blue-400">????</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Footer from '../components/Footer.vue'

const heroSection = ref<HTMLElement | null>(null)
const imageSection = ref<HTMLElement | null>(null)
const skillsHeader = ref<HTMLElement | null>(null)
const skillsGrid = ref<HTMLElement | null>(null)
const certificatesHeader = ref<HTMLElement | null>(null)
const certificatesGrid = ref<HTMLElement | null>(null)

onMounted(() => {
    setTimeout(() => {
        if (imageSection.value) {
            const profileContainer = imageSection.value.querySelector('.profile-container') as HTMLElement
            if (profileContainer) profileContainer.classList.add('animate-fade-in-scale')
        }

        if (heroSection.value) {
            const heroTitle = heroSection.value.querySelector('.hero-title') as HTMLElement
            const heroParagraphs = heroSection.value.querySelectorAll('.hero-paragraph') as NodeListOf<HTMLElement>
            const heroButton = heroSection.value.querySelector('.hero-button') as HTMLElement

            if (heroTitle) heroTitle.classList.add('animate-slide-in-right')

            heroParagraphs.forEach((paragraph: HTMLElement) => {
                paragraph.classList.add('animate-slide-in-right')
            })

            if (heroButton) heroButton.classList.add('animate-slide-in-right')
        }
    }, 100)

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up-slow')

                    if (entry.target.classList.contains('animate-on-scroll') && entry.target === skillsGrid.value) {
                        const skillIcons = entry.target.querySelectorAll('.skill-icon') as NodeListOf<HTMLElement>
                        skillIcons.forEach((icon: HTMLElement) => {
                            icon.classList.add('animate-fade-in-up-slow')
                        })
                    }

                    if (entry.target.classList.contains('animate-on-scroll') && entry.target === certificatesGrid.value) {
                        const certificateCards = entry.target.querySelectorAll('.certificate-card') as NodeListOf<HTMLElement>
                        certificateCards.forEach((card: HTMLElement) => {
                            card.classList.add('animate-fade-in-up-slow')
                        })
                    }
                }
            })
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        }
    )

    const sectionsToObserve = [skillsHeader.value, skillsGrid.value, certificatesHeader.value, certificatesGrid.value]
    sectionsToObserve.forEach((section) => {
        if (section) {
            observer.observe(section)
        }
    })
})
</script>

<style scoped>
.bg-primary-button {
    background-color: var(--color-primary);
}

.bg-primary-button:hover,
.hover\:bg-primary-button-hover:hover {
    background-color: #0ea5e9;
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
    background: radial-gradient(circle, rgba(19, 176, 245, 0.2), transparent);
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

    0%,
    100% {
        transform: scale(1);
        opacity: 0.3;
    }

    50% {
        transform: scale(1.1);
        opacity: 0.6;
    }
}

.hero-title {
    opacity: 0;
    transform: translateX(80px);
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hero-paragraph {
    opacity: 0;
    transform: translateX(80px);
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hero-button {
    opacity: 0;
    transform: translateX(80px);
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-slide-in-right {
    opacity: 1 !important;
    transform: translateX(0) !important;
}

.animate-on-scroll {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-fade-in-up-slow {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.skill-icon {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.skill-icon.animate-fade-in-up-slow {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
}

.certificate-card {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: all 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.certificate-card.animate-fade-in-up-slow {
    opacity: 1 !important;
    transform: translateY(0) scale(1) !important;
}
</style>