<template>
  <section class="py-16 bg-transparent text-[#2E1A11] overflow-hidden select-none">
    <div class="max-w-6xl mx-auto text-center px-4 mb-8">
      <!-- Section Title -->
      <h2 class="text-4xl sm:text-5xl font-ruqaa text-[#23140D] mb-2">
        لقطاتنا
      </h2>
      <p class="font-amiri text-base sm:text-lg text-[#3E281C] font-semibold">
        لحظات وثقناها بحب لتشاركنا ذكريات البداية
      </p>

      <!-- Golden Flourish Divider -->
      <div class="flex items-center justify-center gap-3 my-4">
        <span class="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C99E32] to-transparent" />
        <span class="text-[#A97E20] text-sm">✦</span>
        <span class="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C99E32] to-transparent" />
      </div>

      <!-- Album Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 border border-[#C99E32]/50 shadow-xs mb-2 backdrop-blur-xs">
        <span class="text-xs text-[#A97E20]">📖</span>
        <span class="font-amiri text-xs sm:text-sm text-[#23140D] font-bold">ألبوم الذكريات</span>
      </div>
    </div>

    <!-- Infinite Auto-Scrolling Album Strip -->
    <div class="relative w-full overflow-hidden py-4">
      <!-- Gradient Fades on edges for seamless book/tape illusion -->
      <div class="absolute left-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF6EE]/80 to-transparent z-10 pointer-events-none" />
      <div class="absolute right-0 inset-y-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF6EE]/80 to-transparent z-10 pointer-events-none" />

      <!-- Track with infinite animation -->
      <div class="animate-album-scroll flex gap-4 sm:gap-6 px-4">
        <!-- Loop items twice for seamless continuous scroll -->
        <div
          v-for="(photo, index) in allPhotos"
          :key="index"
          @click="selectedPhoto = photo"
          class="group relative w-44 sm:w-56 md:w-64 aspect-[3/4] flex-shrink-0 rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white shadow-[0_10px_25px_rgba(74,52,38,0.12)] hover:shadow-[0_15px_35px_rgba(201,158,50,0.3)] border border-[#C99E32]/35 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
        >
          <!-- Photo Inside Card -->
          <div class="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative">
            <img
              :src="photo.src"
              :alt="photo.caption"
              class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              loading="lazy"
            />
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
              <span class="text-xs font-amiri text-white font-bold tracking-wide">
                {{ photo.caption }}
              </span>
            </div>
          </div>

          <!-- Decorative Gold Corner Accent -->
          <div class="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-[#C99E32]/70 shadow-xs pointer-events-none" />
        </div>
      </div>
    </div>

    <!-- Lightbox Modal for enlarged view -->
    <Teleport to="body">
      <div
        v-if="selectedPhoto"
        @click="selectedPhoto = null"
        class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      >
        <div
          class="relative max-w-xl max-h-[90vh] rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_25px_70px_rgba(0,0,0,0.9)] bg-[#FAF6EE]"
          @click.stop
        >
          <img
            :src="selectedPhoto.src"
            :alt="selectedPhoto.caption"
            class="w-full h-auto max-h-[75vh] object-contain bg-black/10"
          />
          <div class="p-4 bg-[#FAF6EE] flex items-center justify-between border-t border-[#C99E32]/30">
            <span class="font-amiri text-base text-[#23140D] font-bold">
              {{ selectedPhoto.caption }}
            </span>
            <button
              type="button"
              @click="selectedPhoto = null"
              class="px-4 py-1.5 rounded-full bg-[#23140D] text-[#FFF2B2] text-xs font-tajawal font-bold hover:bg-[#150A05] transition-colors"
            >
              إغلاق ✕
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface PhotoItem {
  src: string
  caption: string
}

const selectedPhoto = ref<PhotoItem | null>(null)

// Photos from 01.jpg to 06.jpg
const basePhotos: PhotoItem[] = [
  { src: '/images/01.jpg', caption: 'فرحة البداية' },
  { src: '/images/02.jpg', caption: 'معاً إلى الأبد' },
  { src: '/images/03.jpg', caption: 'أجمل حكاية' },
  { src: '/images/04.jpg', caption: 'لحظات لا تُنسى' },
  { src: '/images/05.jpg', caption: 'ابتسامة العمر' },
  { src: '/images/06.jpg', caption: 'نور وعصام' }
]

// Duplicate photos array for continuous seamless infinite loop
const allPhotos = computed(() => [...basePhotos, ...basePhotos])
</script>
