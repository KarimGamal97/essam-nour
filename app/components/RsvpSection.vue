<template>
  <section class="py-16 bg-transparent text-[#2E1A11] px-4 sm:px-6">
    <div class="max-w-md mx-auto">
      <div class="bg-white/95 border-2 border-[#C99E32]/50 rounded-3xl p-6 sm:p-10 shadow-[0_20px_45px_rgba(74,52,38,0.12)] text-center backdrop-blur-xs">
        <!-- Title -->
        <h2 class="text-4xl sm:text-5xl font-ruqaa text-[#23140D] mb-2">
          تأكيد الحضور
        </h2>
        <p class="font-amiri text-sm sm:text-base text-[#4E3527] font-semibold mb-8">
          يسعدنا تأكيد حضوركم في موعد أقصاه ٢٥ أكتوبر ٢٠٢٦
        </p>

        <!-- Success Notification -->
        <div
          v-if="isSubmitted"
          class="p-8 rounded-2xl bg-[#FAF6EE] border-2 border-[#C99E32] space-y-3"
        >
          <div class="w-14 h-14 mx-auto rounded-full bg-[#A97E20] text-white flex items-center justify-center text-2xl font-bold shadow-md">
            ✓
          </div>
          <h3 class="text-2xl font-ruqaa text-[#23140D]">
            شكراً جزيلاً، {{ form.name }}!
          </h3>
          <p class="font-amiri text-base text-[#3E281C] font-medium">
            تم استلام ردكم بنجاح.. نتشرف بكم ونتطلع لرؤيتكم لتكتمل فرحتنا!
          </p>
          <button
            type="button"
            @click="isSubmitted = false"
            class="text-sm text-[#8C6010] underline font-tajawal font-bold hover:text-[#5B3F0A] pt-2"
          >
            تعديل الرد
          </button>
        </div>

        <!-- RSVP Form -->
        <form v-else @submit.prevent="handleSubmit" class="space-y-5 text-right">
          <!-- Name -->
          <div>
            <label class="block text-sm font-amiri text-[#23140D] mb-1.5 font-bold">
              الاسم الكريم *
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="اكتب اسمك الكريم"
              class="w-full px-4 py-3 rounded-xl border-2 border-[#C99E32]/40 bg-[#FAF6EE]/50 focus:bg-white focus:outline-none focus:border-[#A97E20] text-sm font-tajawal text-[#23140D] transition-all placeholder:text-[#8C7468]"
            />
          </div>

          <!-- Attendance Option -->
          <div>
            <label class="block text-sm font-amiri text-[#23140D] mb-2 font-bold">
              هل ستشرفنا بالحضور؟ *
            </label>
            <div class="grid grid-cols-2 gap-3">
              <button
                type="button"
                @click="form.attending = 'yes'"
                :class="[
                  'py-3 px-3 rounded-xl border-2 text-sm font-tajawal font-bold transition-all',
                  form.attending === 'yes'
                    ? 'border-[#A97E20] bg-[#A97E20] text-white shadow-md'
                    : 'border-[#C99E32]/40 bg-[#FAF6EE]/60 text-[#23140D] hover:bg-[#F3EAD7]'
                ]"
              >
                نعم، بكل سرور ✨
              </button>
              <button
                type="button"
                @click="form.attending = 'no'"
                :class="[
                  'py-3 px-3 rounded-xl border-2 text-sm font-tajawal font-bold transition-all',
                  form.attending === 'no'
                    ? 'border-[#23140D] bg-[#23140D] text-white shadow-md'
                    : 'border-[#C99E32]/40 bg-[#FAF6EE]/60 text-[#23140D] hover:bg-[#F3EAD7]'
                ]"
              >
                أعتذر لظروف 🤍
              </button>
            </div>
          </div>

          <!-- Number of Guests -->
          <div v-if="form.attending === 'yes'">
            <label class="block text-sm font-amiri text-[#23140D] mb-1.5 font-bold">
              عدد المرافقين
            </label>
            <select
              v-model="form.guests"
              class="w-full px-4 py-3 rounded-xl border-2 border-[#C99E32]/40 bg-[#FAF6EE]/50 focus:bg-white focus:outline-none focus:border-[#A97E20] text-sm font-tajawal text-[#23140D] transition-all font-semibold"
            >
              <option value="0">بدون مرافق (حضور فردي)</option>
              <option value="1">مرافق واحد (+١)</option>
              <option value="2">مرافقان (+٢)</option>
              <option value="3">٣ مرافقين (+٣)</option>
            </select>
          </div>

          <!-- Message / Wishes -->
          <div>
            <label class="block text-sm font-amiri text-[#23140D] mb-1.5 font-bold">
              رسالة أو تهنئة للعروسين
            </label>
            <textarea
              v-model="form.message"
              rows="3"
              placeholder="اكتب تهنئتك الجميلة لعصام ونور..."
              class="w-full px-4 py-3 rounded-xl border-2 border-[#C99E32]/40 bg-[#FAF6EE]/50 focus:bg-white focus:outline-none focus:border-[#A97E20] text-sm font-tajawal text-[#23140D] transition-all placeholder:text-[#8C7468] resize-none"
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full mt-3 py-4 rounded-xl bg-[#23140D] text-[#FFF2B2] font-tajawal font-bold text-base hover:bg-[#150A05] hover:text-white transition-all shadow-lg active:scale-95"
          >
            إرسال تأكيد الحضور
          </button>
        </form>
      </div>

      <!-- Footer Arch Emblem & Signoff -->
      <div class="text-center mt-12 mb-8">
        <p class="font-ruqaa text-3xl text-[#23140D] font-bold">
          دامت دياركم عامرة بالأفراح والمسرات
        </p>
        <p class="font-amiri text-base text-[#4E3527] mt-1 font-semibold">
          عصام & نور — ٢٠٢٦
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const isSubmitted = ref(false)

const form = reactive({
  name: '',
  attending: 'yes',
  guests: '0',
  message: ''
})

const handleSubmit = () => {
  if (!form.name.trim()) return
  isSubmitted.value = true
}
</script>
