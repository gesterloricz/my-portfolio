<template>
    <main
        class="flex flex-col items-center justify-center min-h-screen bg-primary text-white px-4 overflow-hidden relative">
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-code code-1">&lt;div&gt;</div>
            <div class="floating-code code-2">function()</div>
            <div class="floating-code code-3">const</div>
            <div class="floating-code code-4">&lt;/&gt;</div>
            <div class="floating-code code-5">Vue.js</div>
            <div class="floating-code code-6">CSS</div>
            <div class="floating-code code-7">HTML</div>
            <div class="floating-code code-8">JS</div>
            <div class="floating-code code-9">React</div>
            <div class="floating-code code-10">PHP</div>
            <div class="floating-code code-11">MySQL</div>
            <div class="floating-code code-12">Laravel</div>
        </div>

        <div class="relative z-10 text-center">
            <div class="projects-container" ref="projectsContainer">
                <h1 class="text-4xl md:text-5xl font-bold mb-8 font-poppins projects-title">
                    <span class="typewriter-text" ref="typewriterText">{{ displayedText }}</span>
                    <span class="cursor">|</span>
                </h1>

                <p class="text-lg text-gray-300 text-center max-w-xl projects-subtitle mb-12" ref="projectsSubtitle">
                    I'm currently learning and working on some stuff. Stay tuned for updates!
                </p>

                <div class="flex justify-center space-x-4 progress-indicators" ref="progressIndicators">
                    <div class="progress-dot" style="animation-delay: 0.5s">
                        <div class="dot-inner"></div>
                    </div>
                    <div class="progress-dot" style="animation-delay: 0.7s">
                        <div class="dot-inner"></div>
                    </div>
                    <div class="progress-dot" style="animation-delay: 0.9s">
                        <div class="dot-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const projectsContainer = ref<HTMLElement | null>(null)
const projectsSubtitle = ref<HTMLElement | null>(null)
const progressIndicators = ref<HTMLElement | null>(null)

const displayedText = ref('')

onMounted(() => {
    setTimeout(() => {
        if (projectsContainer.value) {
            projectsContainer.value.classList.add('animate-container')
        }
    }, 100)

    const fullText = "Projects Coming Soon"
    let currentIndex = 0

    const typeWriter = () => {
        if (currentIndex < fullText.length) {
            displayedText.value += fullText.charAt(currentIndex)
            currentIndex++
            setTimeout(typeWriter, 150)
        } else {
            setTimeout(() => {
                if (projectsSubtitle.value) projectsSubtitle.value.classList.add('animate-fade-in-up')
                if (progressIndicators.value) progressIndicators.value.classList.add('animate-fade-in')
            }, 500)
        }
    }


    setTimeout(() => {
        typeWriter()
    }, 1500)
})
</script>

<style scoped>
.projects-container {
    opacity: 0;
    transform: scale(0.9);
    transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-container {
    opacity: 1 !important;
    transform: scale(1) !important;
}

.projects-title {
    position: relative;
    min-height: 1.2em;
}

.typewriter-text {
    display: inline-block;
}

.cursor {
    display: inline-block;
    background-color: #13B0F5;
    animation: blink 1s infinite;
    margin-left: 2px;
    width: 3px;
    height: 1.2em;
}

@keyframes blink {
    0%,
    50% {
        opacity: 1;
    }
    51%,
    100% {
        opacity: 0;
    }
}

.projects-subtitle {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-fade-in-up {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.progress-indicators {
    opacity: 0;
    transition: all 1s ease;
}

.animate-fade-in {
    opacity: 1 !important;
}

.progress-dot {
    width: 12px;
    height: 12px;
    border: 2px solid #13B0F5;
    border-radius: 50%;
    position: relative;
    opacity: 0;
    animation: dotPulse 2s infinite;
}

.dot-inner {
    width: 6px;
    height: 6px;
    background: #13B0F5;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: innerPulse 2s infinite;
}

@keyframes dotPulse {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }

    100% {
        opacity: 0.7;
        transform: scale(1);
    }
}

@keyframes innerPulse {

    0%,
    100% {
        transform: translate(-50%, -50%) scale(1);
    }

    50% {
        transform: translate(-50%, -50%) scale(1.5);
    }
}

.floating-code {
    position: absolute;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: rgba(19, 176, 245, 0.3);
    pointer-events: none;
    animation: float 20s infinite linear;
    font-weight: 500;
}

.code-1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.code-2 {
    top: 20%;
    right: 15%;
    animation-delay: -3s;
}

.code-3 {
    top: 60%;
    left: 5%;
    animation-delay: -6s;
}

.code-4 {
    top: 70%;
    right: 10%;
    animation-delay: -9s;
}

.code-5 {
    top: 30%;
    left: 80%;
    animation-delay: -12s;
}

.code-6 {
    top: 80%;
    left: 70%;
    animation-delay: -15s;
}

.code-7 {
    top: 15%;
    left: 60%;
    animation-delay: -18s;
}

.code-8 {
    top: 85%;
    right: 60%;
    animation-delay: -21s;
}

.code-9 {
    top: 40%;
    right: 5%;
    animation-delay: -24s;
}

.code-10 {
    top: 90%;
    left: 20%;
    animation-delay: -27s;
}

.code-11 {
    top: 25%;
    left: 30%;
    animation-delay: -30s;
}

.code-12 {
    top: 55%;
    right: 40%;
    animation-delay: -33s;
}

@keyframes float {
    0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0;
    }

    10% {
        opacity: 0.3;
    }

    90% {
        opacity: 0.3;
    }

    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}

@media (max-width: 768px) {
    .floating-code {
        font-size: 12px;
    }

    .projects-title {
        font-size: 2.5rem;
    }

    .projects-subtitle {
        font-size: 1rem;
        padding: 0 1rem;
    }
}
</style>