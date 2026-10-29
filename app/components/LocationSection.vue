<template>
  <section class="py-16 bg-transparent text-[#2E1A11] px-4 sm:px-6">
    <div class="max-w-2xl mx-auto text-center">
      <!-- Section Title (Matching the reference design) -->
      <h2 class="text-4xl sm:text-5xl font-ruqaa text-[#23140D] mb-1">
        التفاصيل
      </h2>
      <p class="font-amiri text-base sm:text-lg text-[#3E281C] font-semibold mb-8">
        كل ما تحتاجون معرفته
      </p>

      <!-- The Royal Arch Card (wedding-place.webp is the tall arch frame) -->
      <div class="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[1024/1491] mx-auto flex flex-col justify-between items-center p-6 sm:p-8 pt-20 sm:pt-24 pb-4 select-none">
        <!-- The Arch Frame Background -->
        <img
          src="/images/wedding-place.webp"
          alt="Royal Arch Frame"
          class="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_35px_rgba(74,52,38,0.12)]"
        />

        <!-- Text Content In the Upper Center Inside Arch -->
        <div class="relative z-10 text-center flex flex-col items-center mt-3 sm:mt-5">
          <h3 class="text-3xl sm:text-4xl font-ruqaa text-[#23140D]">
            الموقع
          </h3>
          <p class="font-ruqaa text-2xl sm:text-3xl text-[#A97E20] font-bold mt-0.5">
            قاعة الماسة
          </p>
          <p class="font-serif text-[10px] sm:text-xs text-[#8C6F19] uppercase tracking-[0.2em] font-semibold mb-2">
            El Masa Wedding Hall
          </p>

          <!-- Time & Date (7:00 PM to 11:00 PM) -->
          <div class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-amiri text-[#3E281C] font-bold">
            <span>من ٧:٠٠ م حتى ١١:٠٠ م</span>
          </div>
          <p class="text-xs font-amiri text-[#6E4F3D] mt-0.5 font-bold">
            السبت، ٧ نوفمبر ٢٠٢٦
          </p>
        </div>

        <!-- Building Palace Sketch inside the bottom of the arch (wedding-hall.webp) -->
        <div class="relative z-10 w-[82%] mb-2">
          <img
            src="/images/wedding-hall.webp"
            alt="El Masa Hall Building Sketch"
            class="w-full h-auto object-contain filter contrast-105"
          />
        </div>
      </div>

      <!-- Google Maps Button (Directly below the arch) -->
      <div class="mt-8">
        <a
          :href="mapUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#23140D] text-[#FFF2B2] font-tajawal font-bold text-base hover:bg-[#150A05] hover:text-white transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-[#F3DE92]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>عرض الموقع على الخريطة</span>
        </a>
      </div>

      <!-- Embedded Google Map Preview with Exact Place Location -->
      <div class="mt-8 max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-[#C99E32]/40 shadow-md h-52 bg-[#EFE7D3]">
        <iframe
          title="قاعة الماسة - El Masa Wedding Hall Location"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="embedMapUrl"
          class="filter contrast-[1.05]"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Exact Google Maps location for: قاعة الماسة - El Masa Wedding Hall
const mapUrl = 'https://www.google.com/maps/place/%D9%82%D8%A7%D8%B9%D8%A9+%D8%A7%D9%84%D9%85%D8%A7%D8%B3%D8%A9+-+El+Masa+Wedding+Hall%E2%80%AD/@30.4816256,31.172675,17z/data=!3m1!4b1!4m6!3m5!1s0x14f7df4b5c7187ff:0xe81348c192b6d062!8m2!3d30.4816256!4d31.172675!16s%2Fg%2F11cn6q1kwg'
const embedMapUrl = 'https://maps.google.com/maps?q=30.4816256,31.172675&t=&z=16&ie=UTF8&iwloc=&output=embed'
</script>
