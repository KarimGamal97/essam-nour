<template>
  <header class="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-between overflow-hidden bg-transparent text-[#2E1A11] select-none pt-16 sm:pt-24 pb-10">
    <!-- Top Space Holder for Balanced Centering -->
    <div class="w-full" />

    <!-- Center Invitation Content -->
    <div class="relative z-10 w-full max-w-2xl px-6 py-8 text-center my-auto flex flex-col items-center">
      <!-- Quranic Header -->
      <p class="font-amiri text-base sm:text-lg text-[#3E281C] font-semibold mb-2 tracking-wide">
        بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
      </p>
      
      <p class="font-amiri text-sm sm:text-base text-[#523726] italic mb-6">
        " فَرِحِينَ بِمَا آتَاهُمُ اللَّهُ مِن فَضْلِهِ "
      </p>

      <!-- Decorative Golden Divider -->
      <div class="flex items-center justify-center gap-3 mb-6">
        <span class="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C99E32] to-transparent" />
        <span class="text-[#A97E20] text-sm">✦</span>
        <span class="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C99E32] to-transparent" />
      </div>

      <!-- Main Names (Essam & Nour) -->
      <h1 class="text-6xl sm:text-7xl md:text-8xl font-ruqaa text-[#23140D] mb-6 leading-tight drop-shadow-sm">
        عصام و نور
      </h1>

      <!-- Wedding Date Badge (7 Nov 2026) -->
      <div class="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#C99E32]/60 bg-white/85 backdrop-blur-sm shadow-sm">
        <p class="font-amiri text-lg sm:text-xl text-[#23140D] font-bold tracking-wider">
          السبت، ٧ نوفمبر ٢٠٢٦
        </p>
      </div>
    </div>

    <!-- Scroll Indicator Button -->
    <div class="relative z-10 flex flex-col items-center">
      <a
        href="#countdown"
        class="group flex flex-col items-center text-[#3E281C] hover:text-[#23140D] transition-colors"
        aria-label="Scroll down to details"
      >
        <div class="w-12 h-12 rounded-full border-2 border-[#C99E32]/50 bg-white/90 shadow-md flex items-center justify-center group-hover:border-[#C99E32] group-hover:scale-105 transition-all duration-300 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-[#A97E20]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
// HeroSection component without curtains banner
</script>
