<template>
  <section id="countdown" class="relative py-16 bg-transparent text-[#2E1A11] text-center overflow-hidden">
    <div class="relative z-10 max-w-4xl mx-auto px-6">
      <!-- Section Title -->
      <h2 class="text-4xl sm:text-5xl font-ruqaa text-[#23140D] mb-12">
        العد التنازلي
      </h2>

      <!-- Countdown Grid (Days, Hours, Minutes, Seconds) -->
      <div class="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto mb-10">
        <!-- Days -->
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 border-2 border-[#C99E32]/50 shadow-md flex items-center justify-center backdrop-blur-xs">
            <span class="text-3xl sm:text-4xl font-tajawal font-bold text-[#A97E20]">
              {{ days }}
            </span>
          </div>
          <span class="mt-3 text-sm sm:text-base font-amiri font-bold text-[#3E281C]">أيام</span>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 border-2 border-[#C99E32]/50 shadow-md flex items-center justify-center backdrop-blur-xs">
            <span class="text-3xl sm:text-4xl font-tajawal font-bold text-[#A97E20]">
              {{ hours }}
            </span>
          </div>
          <span class="mt-3 text-sm sm:text-base font-amiri font-bold text-[#3E281C]">ساعات</span>
        </div>

        <!-- Minutes -->
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 border-2 border-[#C99E32]/50 shadow-md flex items-center justify-center backdrop-blur-xs">
            <span class="text-3xl sm:text-4xl font-tajawal font-bold text-[#A97E20]">
              {{ minutes }}
            </span>
          </div>
          <span class="mt-3 text-sm sm:text-base font-amiri font-bold text-[#3E281C]">دقائق</span>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/95 border-2 border-[#C99E32]/50 shadow-md flex items-center justify-center backdrop-blur-xs">
            <span class="text-3xl sm:text-4xl font-tajawal font-bold text-[#A97E20]">
              {{ seconds }}
            </span>
          </div>
          <span class="mt-3 text-sm sm:text-base font-amiri font-bold text-[#3E281C]">ثوانٍ</span>
        </div>
      </div>

      <!-- Hanging Fairy Candles Graphic (Transparent High-Res WebP) -->
      <div class="relative w-full max-w-2xl mx-auto -mt-2">
        <img
          src="/images/divider-candles.webp"
          alt="Hanging Candle Lights Decoration"
          class="w-full object-contain filter contrast-105 drop-shadow-sm"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Target date: November 7, 2026, 20:00:00 (7/11)
const targetDate = new Date('2026-11-07T20:00:00').getTime()

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let countdownTimer: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    days.value = '00'
    hours.value = '00'
    minutes.value = '00'
    seconds.value = '00'
    return
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24))
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((distance % (1000 * 60)) / 1000)

  days.value = d < 10 ? `0${d}` : `${d}`
  hours.value = h < 10 ? `0${h}` : `${h}`
  minutes.value = m < 10 ? `0${m}` : `${m}`
  seconds.value = s < 10 ? `0${s}` : `${s}`
}

onMounted(() => {
  updateCountdown()
  countdownTimer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownTimer) clearInterval(countdownTimer)
})
</script>
