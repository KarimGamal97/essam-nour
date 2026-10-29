/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFAF6',
          100: '#F7F3E9',
          200: '#EFE7D3',
          300: '#E5D6B6'
        },
        gold: {
          100: '#FDF7E7',
          200: '#F9ECC2',
          300: '#F2DE92',
          400: '#E5C761',
          500: '#C99E32',
          600: '#A97E20',
          700: '#7E5B14'
        },
        sage: {
          800: '#26372A',
          900: '#1A291E',
          950: '#111C14'
        },
        sepia: {
          700: '#523E34',
          800: '#3D2C24',
          900: '#2A1D17'
        }
      },
      fontFamily: {
        amiri: ['Amiri', 'serif'],
        ruqaa: ['"Aref Ruqaa"', 'cursive'],
        marhey: ['Marhey', 'cursive'],
        tajawal: ['Tajawal', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 25px rgba(201, 158, 50, 0.35)',
        card: '0 10px 30px -10px rgba(74, 52, 38, 0.12)'
      }
    }
  },
  plugins: []
}

