<template>
  <div class="relative min-h-screen text-[#342218] antialiased selection:bg-gold-500 selection:text-white overflow-x-hidden">
    <!-- Interactive Wax Seal Envelope Cover Screen -->
    <EnvelopeScreen @open="handleEnvelopeOpen" />

    <!-- Global Fixed Background (main-bg.jpeg) across the entire site -->
    <div class="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <img
        src="/images/main-bg.jpeg"
        alt="Main Wedding Background"
        class="w-full h-full object-cover object-center filter brightness-[1.02]"
      />
      <!-- Subtle ivory veil to maintain premium contrast and text legibility -->
      <div class="absolute inset-0 bg-[#FAF6EE]/75 backdrop-blur-[0.5px]" />
    </div>

    <!-- Global Subtle Golden Fireworks Overlay Across the Whole Site -->
    <FireworksOverlay />

    <!-- Main Wedding Invitation Website -->
    <main class="relative z-10 w-full">
      <!-- 1. Hero Section with Royal Names & Family Invitation -->
      <HeroSection />

      <!-- 2. Countdown Timer to Wedding Date -->
      <CountdownTimer />

      <!-- 3. Warm Welcome Message -->
      <WelcomeSection />

      <!-- 4. Photo Gallery -->
      <GallerySection />

      <!-- 5. Venue Location & Google Maps -->
      <LocationSection />

      <!-- 6. Night Program & Timeline -->
      <ProgramSection />

      <!-- 7. Dress Code & Notes -->
      <DressCodeSection />

      <!-- 8. WhatsApp Wishes Form -->
      <WishesSection />

      <!-- 9. Closing Footer Signoff -->
      <footer class="py-16 text-center select-none px-6">
        <p class="font-ruqaa text-3xl sm:text-4xl text-[#23140D] font-bold">
          دامت دياركم عامرة بالأفراح والمسرات
        </p>
        <p class="font-amiri text-base sm:text-lg text-[#523726] mt-2 font-bold">
          عصام & نور — ٢٠٢٦
        </p>
      </footer>
    </main>

    <!-- Floating Audio Player Button & Sound Stream -->
    <AudioPlayer ref="audioPlayerRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EnvelopeScreen from './components/EnvelopeScreen.vue'
import FireworksOverlay from './components/FireworksOverlay.vue'
import HeroSection from './components/HeroSection.vue'
import CountdownTimer from './components/CountdownTimer.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import GallerySection from './components/GallerySection.vue'
import LocationSection from './components/LocationSection.vue'
import ProgramSection from './components/ProgramSection.vue'
import DressCodeSection from './components/DressCodeSection.vue'
import WishesSection from './components/WishesSection.vue'
import AudioPlayer from './components/AudioPlayer.vue'

const audioPlayerRef = ref<InstanceType<typeof AudioPlayer> | null>(null)

// Handle opening the envelope
const handleEnvelopeOpen = () => {
  if (audioPlayerRef.value) {
    audioPlayerRef.value.play()
  }
}
</script>
