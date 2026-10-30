// Nuxt configuration file
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'دعوة زفاف | عصام و نور',
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'نتشرف بدعوتكم لحضور حفل زفاف عصام و نور - مرحباً بكم لمشاركتنا أجمل لحظات العمر' },
        { property: 'og:title', content: "دعوة زفاف — عصام و نور" },
        { property: 'og:description', content: 'يسعدنا ويشرفنا حضوركم لمشاركتنا فرحتنا' },
        { property: 'og:image', content: '/images/envelope-seal.jpg' },
        { name: 'theme-color', content: '#1B3022' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Aref+Ruqaa:wght@400;700&family=Marhey:wght@400;600;700&family=Tajawal:wght@300;400;500;700&display=swap'
        },
        { rel: 'preload', as: 'image', href: '/images/01.jpg' },
        { rel: 'preload', as: 'image', href: '/images/02.jpg' },
        { rel: 'preload', as: 'image', href: '/images/03.jpg' },
        { rel: 'preload', as: 'image', href: '/images/04.jpg' },
        { rel: 'preload', as: 'image', href: '/images/05.jpg' },
        { rel: 'preload', as: 'image', href: '/images/06.jpg' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
