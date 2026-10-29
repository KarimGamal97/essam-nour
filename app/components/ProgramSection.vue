<template>
  <section class="py-16 bg-transparent text-[#2E1A11] px-4 sm:px-6">
    <div class="max-w-xl mx-auto text-center">
      <!-- Gramophone Icon / Graphic -->
      <div class="w-20 h-20 mx-auto mb-4 text-[#A97E20] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-14 h-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </div>

      <!-- Section Title -->
      <h2 class="text-4xl sm:text-5xl font-ruqaa text-[#23140D] mb-12">
        برنامج الحفل
      </h2>

      <!-- Timeline Items -->
      <div class="relative space-y-8 before:absolute before:inset-y-2 before:right-1/2 before:w-[2px] before:bg-[#C99E32]/50">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="relative flex flex-col items-center"
        >
          <!-- Center Diamond Pin -->
          <div class="z-10 w-5 h-5 rotate-45 bg-[#A97E20] border-2 border-white shadow-md mb-3" />

          <!-- Card Content -->
          <div class="bg-white/95 border-2 border-[#C99E32]/40 rounded-2xl px-6 py-5 shadow-sm max-w-sm w-full text-center hover:border-[#A97E20] transition-colors backdrop-blur-xs">
            <span class="inline-block px-4 py-1.5 rounded-full bg-[#F5EEDF] text-[#8C6010] text-sm font-bold font-tajawal mb-2">
              {{ item.time }}
            </span>
            <h3 class="text-2xl font-ruqaa text-[#23140D]">
              {{ item.title }}
            </h3>
            <p class="text-sm font-amiri text-[#4E3527] mt-1 font-medium">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TimelineItem {
  time: string
  title: string
  desc: string
}

const timeline: TimelineItem[] = [
  {
    time: '٠٨:٠٠ م',
    title: 'استقبال الضيوف',
    desc: 'نرحب بكم بمشروبات الاستقبال والضيافة الكريمة'
  },
  {
    time: '٠٩:٠٠ م',
    title: 'دخول العروسين',
    desc: 'الزفة وبداية اللحظات السعيدة بحضوركم'
  },
  {
    time: '١٠:٣٠ م',
    title: 'كعكة الزفاف والتهاني',
    desc: 'تقطيع التورتة والتقاط الصور التذكارية'
  },
  {
    time: '١١:٣٠ م',
    title: 'بوفيه العشاء',
    desc: 'عشاء فاخر على شرف حضوركم الغالي'
  }
]
</script>
