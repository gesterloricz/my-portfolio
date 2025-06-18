<template>
    <main class="px-8 lg:px-12 py-16 text-white min-h-screen bg-primary">
        <div class="text-center mb-16" ref="headerSection">
            <h1 class="text-5xl md:text-6xl font-bold font-poppins text-white contact-title">Get in Touch</h1>
        </div>

        <div class="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

            <div class="contact-form" ref="formSection">
                <form class="space-y-6">
                    <div class="form-field" style="animation-delay: 0.1s">
                        <input type="text" placeholder="Name" required
                            class="w-full px-6 py-4 bg-[rgba(35,32,43,0.57)] border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13B0F5] focus:border-transparent transition-all duration-300" />
                    </div>
                    <div class="form-field" style="animation-delay: 0.2s">
                        <input type="email" placeholder="Email" required
                            class="w-full px-6 py-4 bg-[rgba(35,32,43,0.57)] border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13B0F5] focus:border-transparent transition-all duration-300" />
                    </div>
                    <div class="form-field" style="animation-delay: 0.3s">
                        <input type="text" placeholder="Subject" required
                            class="w-full px-6 py-4 bg-[rgba(35,32,43,0.57)] border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13B0F5] focus:border-transparent transition-all duration-300" />
                    </div>
                    <div class="form-field" style="animation-delay: 0.4s">
                        <textarea placeholder="Message" rows="6" required
                            class="w-full px-6 py-4 bg-[rgba(35,32,43,0.57)] border border-white rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13B0F5] focus:border-transparent transition-all duration-300 resize-none"></textarea>
                    </div>

                    <button type="submit" :disabled="isDisabled" :class="{
                        'bg-blue-300 cursor-not-allowed': isDisabled,
                        'hover:bg-blue-600': !isDisabled
                    }"
                        class="px-8 py-4 bg-[rgba(35,32,43,0.57)] border border-slate-700 rounded-lg text-white font-poppins font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-[#13B0F5] transition-all duration-300 disabled:opacity-50 form-button"
                        style="animation-delay: 0.5s">
                        Send Message
                    </button>
                </form>
            </div>

            <div class="space-y-12 contact-info" ref="infoSection">
                <div class="info-block" style="animation-delay: 0.1s">
                    <h2 class="text-3xl font-bold font-poppins text-white mb-6">Let's Connect</h2>
                    <p class="text-gray-300 font-poppins leading-relaxed mb-8">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
                        I'd love to hear from you and see how we can create something extraordinary thing together.
                    </p>

                    <div class="flex items-center space-x-4 email-contact" style="animation-delay: 0.2s">
                        <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                            <Icon icon="material-symbols:mail-outline" class="text-2xl text-white" />
                        </div>

                        <a href=""
                            class="text-white hover:text-[#13B0F5] transition-colors duration-300 font-poppins">
                            mimosaver68@gmail.com
                        </a>
                    </div>
                </div>

                <div class="info-block" style="animation-delay: 0.3s">
                    <h3 class="text-2xl font-bold font-poppins text-white mb-4">Socials</h3>
                    <div class="flex space-x-4">
                        <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center social-icon" style="animation-delay: 0.4s"> 
                            <a href="https://github.com/gesterloricz"
                                class="text-2xl text-white hover:text-[#13B0F5] transition-colors duration-300">
                                <Icon icon="mdi:github" />
                            </a>
                        </div>

                        <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center social-icon" style="animation-delay: 0.5s">
                            <a href="https://www.facebook.com/kayd3n.Break"
                                class="text-2xl text-white hover:text-[#13B0F5] transition-colors duration-300">
                                <Icon icon="mdi:facebook" />
                            </a>
                        </div>

                        <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center social-icon" style="animation-delay: 0.6s">
                            <a href="https://www.instagram.com/gesterloriczzz/?next=%2F"
                                class="text-2xl text-white hover:text-[#13B0F5] transition-colors duration-300">
                                <Icon icon="mdi:instagram" />
                            </a>
                        </div>

                        <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center social-icon" style="animation-delay: 0.7s">
                            <a href="https://open.spotify.com/user/31cffhok52x2dps2mewluc77jvlu?si=a9802906f3f044a6"
                                class="text-2xl text-white hover:text-[#13B0F5] transition-colors duration-300">
                                <Icon icon="mdi:spotify" />
                            </a>
                        </div>

                        <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center social-icon" style="animation-delay: 0.8s">
                            <a href="https://discordapp.com/users/577839076917641225"
                                class="text-2xl text-white hover:text-[#13B0F5] transition-colors duration-300">
                                <Icon icon="ic:baseline-discord" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <Footer />

</template>

<script setup lang="ts">
import Footer from '../components/footer.vue'
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const isDisabled = ref(true)

const headerSection = ref<HTMLElement | null>(null)
const formSection = ref<HTMLElement | null>(null)
const infoSection = ref<HTMLElement | null>(null)

onMounted(() => {
  setTimeout(() => {
    if (headerSection.value) {
      const title = headerSection.value.querySelector('.contact-title') as HTMLElement
      if (title) title.classList.add('animate-fade-in-down')
    }
  }, 100)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === formSection.value) {
            const formFields = entry.target.querySelectorAll('.form-field') as NodeListOf<HTMLElement>
            const formButton = entry.target.querySelector('.form-button') as HTMLElement
            
            formFields.forEach((field: HTMLElement) => {
              field.classList.add('animate-slide-in-left')
            })
            
            if (formButton) formButton.classList.add('animate-slide-in-left')
          }
          
          if (entry.target === infoSection.value) {
            const infoBlocks = entry.target.querySelectorAll('.info-block') as NodeListOf<HTMLElement>
            const emailContact = entry.target.querySelector('.email-contact') as HTMLElement
            const socialIcons = entry.target.querySelectorAll('.social-icon') as NodeListOf<HTMLElement>
            
            infoBlocks.forEach((block: HTMLElement) => {
              block.classList.add('animate-slide-in-right')
            })
            
            if (emailContact) emailContact.classList.add('animate-slide-in-right')
            
            socialIcons.forEach((icon: HTMLElement) => {
              icon.classList.add('animate-bounce-in')
            })
          }
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  const sectionsToObserve = [formSection.value, infoSection.value]
  sectionsToObserve.forEach((section) => {
    if (section) {
      observer.observe(section)
    }
  })
})
</script>

<style scoped>
.contact-title {
  opacity: 0;
  transform: translateY(-30px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-fade-in-down {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.contact-form .form-field,
.contact-form .form-button {
  opacity: 0;
  transform: translateX(-60px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-slide-in-left {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.contact-info .info-block,
.contact-info .email-contact {
  opacity: 0;
  transform: translateX(60px);
  transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-slide-in-right {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.social-icon {
  opacity: 0;
  transform: scale(0.5) translateY(20px);
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.animate-bounce-in {
  opacity: 1 !important;
  transform: scale(1) translateY(0) !important;
}

.social-icon:hover {
  transform: scale(1.1) translateY(-2px);
  transition: all 0.3s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(19, 176, 245, 0.3);
}

/* Button hover enhancement */
button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(19, 176, 245, 0.3);
}
</style>