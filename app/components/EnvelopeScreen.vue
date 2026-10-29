<template>
  <div
    v-if="!isFullyClosed"
    class="fixed inset-0 z-50 w-full h-full min-h-screen h-[100dvh] flex flex-col justify-end items-center select-none overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer"
    :class="[
      isOpening
        ? 'opacity-0 scale-105 pointer-events-none'
        : 'opacity-100 scale-100'
    ]"
    @click="triggerOpenAnimation"
  >
    <!-- 100% Full Screen Background with Cinematic Breathing/Ken-Burns Animation -->
    <div class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <img
        src="/images/envelope-seal.jpg"
        alt="Wedding Envelope"
        class="w-full h-full object-cover object-center transition-transform duration-1000 ease-out"
        :class="[
          isOpening ? 'scale-110 filter blur-[1px]' : 'animate-ken-burns'
        ]"
      />
      <!-- Soft Vignette at bottom for seamless text legibility without harsh edges -->
      <div class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />
    </div>

    <!-- ACTION: Borderless Floating Glass Button & Date Badge with Light Shimmer -->
    <div
      class="relative z-20 pb-8 sm:pb-12 px-4 w-full flex flex-col items-center justify-center text-center transition-all duration-700 animate-button-float"
      :class="[isOpening ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0']"
    >
      <!-- Borderless Glass Button with Light Sweep -->
      <div class="group relative overflow-hidden inline-block py-3 px-8 sm:py-3.5 sm:px-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.7)] transition-all transform hover:scale-105 active:scale-95">
        <!-- Light Shimmer Effect gliding across the button -->
        <div class="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none animate-shimmer-sweep" />

        <h2 class="relative z-10 text-xl sm:text-2xl font-ruqaa text-[#FFF2B2] tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          اضغط لفتح الدعوة
        </h2>
        <p class="relative z-10 text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.24em] text-[#F3DE92] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mt-0.5">
          Tap The Seal To Open
        </p>
      </div>

      <!-- Borderless Clean Date Badge -->
      <div class="mt-2.5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-sm shadow-md">
        <p class="text-[11px] sm:text-xs font-amiri text-[#FFF2B2] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          السبت، ٧ نوفمبر ٢٠٢٦ • (٧ / ١١)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'open'): void
}>()

const isOpening = ref(false)
const isFullyClosed = ref(false)

const triggerOpenAnimation = () => {
  if (isOpening.value) return

  // Play romantic background music immediately
  emit('open')
  isOpening.value = true

  // Seamless cinematic dissolve directly into the main wedding invitation
  setTimeout(() => {
    isFullyClosed.value = true
  }, 1000)
}
</script>
