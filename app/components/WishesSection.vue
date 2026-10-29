<template>
  <section class="py-16 bg-transparent text-[#1A0F09] px-4 sm:px-6">
    <div class="max-w-md mx-auto">
      <div class="bg-white/95 border-2 border-[#8C6010] rounded-3xl p-6 sm:p-10 shadow-xl text-center backdrop-blur-xs">
        <!-- Message Icon -->
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F3EAD7] border border-[#8C6010]/50 flex items-center justify-center text-2xl shadow-inner text-[#A97E20]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-[#8C6010]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- Title -->
        <h2 class="text-3xl sm:text-4xl font-ruqaa text-[#1A0F09] font-bold mb-2">
          كلمة حلوة للعروسين
        </h2>
        <p class="font-amiri text-base text-[#3E281C] font-bold mb-6">
          شاركونا فرحتنا بكلماتكم الجميلة ودعواتكم الطيبة لعصام ونور
        </p>

        <!-- WhatsApp Wishes Form -->
        <form @submit.prevent="sendToWhatsApp" class="space-y-4 text-right">
          <!-- Name Field -->
          <div>
            <label class="block text-sm font-amiri text-[#1A0F09] mb-1.5 font-bold">
              الاسم الكريم *
            </label>
            <input
              v-model="guestName"
              type="text"
              required
              placeholder="اكتب اسمك الكريم"
              class="w-full px-4 py-3 rounded-xl border-2 border-[#8C6010]/40 bg-[#FAF6EE]/60 focus:bg-white focus:outline-none focus:border-[#8C6010] text-sm font-tajawal text-[#1A0F09] font-bold transition-all placeholder:text-[#8C7468]"
            />
          </div>

          <!-- Message Field -->
          <div>
            <label class="block text-sm font-amiri text-[#1A0F09] mb-1.5 font-bold">
              الرسالة أو التهنئة *
            </label>
            <textarea
              v-model="guestMessage"
              rows="4"
              required
              placeholder="اكتب تهنئتك الجميلة لعصام ونور..."
              class="w-full px-4 py-3 rounded-xl border-2 border-[#8C6010]/40 bg-[#FAF6EE]/60 focus:bg-white focus:outline-none focus:border-[#8C6010] text-sm font-tajawal text-[#1A0F09] font-bold transition-all placeholder:text-[#8C7468] resize-none"
            />
          </div>

          <!-- WhatsApp Submit Button -->
          <button
            type="submit"
            class="w-full mt-3 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-tajawal font-bold text-base transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <!-- WhatsApp SVG Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.185 1.564 5.938l-1.564 5.719 5.873-1.54c1.682.922 3.609 1.458 5.663 1.458 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>إرسال التهنئة عبر واتساب</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const guestName = ref('')
const guestMessage = ref('')

// Target WhatsApp phone number: +20 10 63900445
const WHATSAPP_PHONE = '201063900445'

const sendToWhatsApp = () => {
  if (!guestName.value.trim() || !guestMessage.value.trim()) return

  // Unicode characters defined via code points to prevent file-encoding corruption
  const ring = String.fromCodePoint(0x1F48D) // 💍
  const sparkles = String.fromCodePoint(0x2728) // ✨
  const heart = String.fromCodePoint(0x1F90D) // 🤍

  // Format message with WhatsApp native bold markdown (*text*)
  const formattedText = `*تهنئة خاصة لحفل زفاف عصام & نور* ${ring}${sparkles}\n\n*الاسم:* ${guestName.value.trim()}\n*التهنئة:* ${guestMessage.value.trim()}\n\nبارك الله لكما وبارك عليكما وجمع بينكما في خير ${heart}`

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(formattedText)}`

  // Open WhatsApp
  window.open(whatsappUrl, '_blank')
}
</script>
