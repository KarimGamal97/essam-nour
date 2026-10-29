<template>
  <div class="fixed bottom-5 left-5 z-40 select-none">
    <!-- Hidden HTML5 Audio Element -->
    <audio
      ref="audioRef"
      src="/audio/song.mp3"
      preload="auto"
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleEnded"
    />

    <!-- Floating Toggle Button -->
    <button
      type="button"
      @click="togglePlay"
      class="group relative w-12 h-12 rounded-full bg-black/60 border border-[#D4AF37]/50 shadow-lg backdrop-blur-md flex items-center justify-center text-[#FFF2B2] hover:text-white transition-all active:scale-90"
      :class="{ 'animate-glow': isPlaying }"
      :title="isPlaying ? 'كتم الموسيقى' : 'تشغيل الموسيقى'"
      aria-label="Toggle background music"
    >
      <!-- Sound Waves / Playing indicator -->
      <span
        v-if="isPlaying"
        class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black animate-ping"
      />

      <!-- Speaker Playing Icon -->
      <svg
        v-if="isPlaying"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-[#FFF2B2]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>

      <!-- Speaker Muted Icon -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

// Start at minute 1:07 (67 seconds)
const START_TIME_SECONDS = 67

const handleLoadedMetadata = () => {
  if (audioRef.value && audioRef.value.currentTime < START_TIME_SECONDS) {
    audioRef.value.currentTime = START_TIME_SECONDS
  }
}

const handleEnded = () => {
  if (!audioRef.value) return
  // Loop back to 1:07
  audioRef.value.currentTime = START_TIME_SECONDS
  audioRef.value.play()
}

const play = async () => {
  if (!audioRef.value) return
  try {
    // Jump directly to 1:07 on start
    if (audioRef.value.currentTime < START_TIME_SECONDS) {
      audioRef.value.currentTime = START_TIME_SECONDS
    }
    await audioRef.value.play()
    isPlaying.value = true
  } catch (error) {
    console.warn('Audio play request was blocked:', error)
  }
}

const pause = () => {
  if (!audioRef.value) return
  audioRef.value.pause()
  isPlaying.value = false
}

const togglePlay = () => {
  if (isPlaying.value) {
    pause()
  } else {
    play()
  }
}

// Expose play function to parent component
defineExpose({
  play,
  pause,
  togglePlay
})
</script>
