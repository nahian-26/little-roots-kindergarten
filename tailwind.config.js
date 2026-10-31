/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,html}'],
  theme: {
    extend: {
      colors: {
        aubergine: {
          DEFAULT: '#39263E',
          light: '#4E3555',
          dark: '#281A2C',
          soft: '#F3EDF5'
        },
        emerald: {
          DEFAULT: '#174F43',
          light: '#216B5B',
          dark: '#0F382F',
          soft: '#E6F2EE'
        },
        pistachio: {
          DEFAULT: '#D9EDB5',
          soft: '#ECF6D8',
          deep: '#5C7A29'
        },
        apricot: {
          DEFAULT: '#F8BD96',
          soft: '#FDE8D8',
          deep: '#C86D36'
        },
        lavender: {
          DEFAULT: '#C6C9FF',
          soft: '#EAEBFF',
          deep: '#4A4F9E'
        },
        surface: {
          DEFAULT: '#FAFAF7',
          warm: '#F4F0E9',
          card: '#FFFFFF'
        },
        sunshine: {
          DEFAULT: '#F6C866',
          soft: '#FDF2D0',
          deep: '#B88314'
        },
        slate: {
          botanical: '#45534C'
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive']
      },
      boxShadow: {
        'editorial': '0 14px 38px -10px rgba(57, 38, 62, 0.08), 0 4px 12px -2px rgba(23, 79, 67, 0.05)',
        'card-hover': '0 22px 48px -12px rgba(57, 38, 62, 0.14), 0 6px 16px -3px rgba(23, 79, 67, 0.08)',
        'soft': '0 6px 24px -4px rgba(57, 38, 62, 0.06)'
      }
    }
  },
  safelist: [
    'bg-[#ECF6D8]',
    'bg-[#84A446]',
    'bg-[#D9EDB5]',
    'text-[#174F43]',
    'border-[#D9EDB5]',
    'bg-[#FDE8D8]',
    'bg-[#C86D36]',
    'bg-[#F8BD96]',
    'text-[#39263E]',
    'border-[#F8BD96]',
    'bg-[#EAEBFF]',
    'bg-[#4A4F9E]',
    'bg-[#C6C9FF]',
    'border-[#C6C9FF]',
    'bg-[#FDF2D0]',
    'bg-[#B88314]',
    'bg-[#F6C866]',
    'border-[#F6C866]',
    'bg-[#FAFAF7]',
    'bg-[#F4F0E9]',
    'bg-[#39263E]',
    'bg-[#174F43]',
    'text-[#45534C]',
    'border-[#174F43]/12',
    'border-[#39263E]/12',
    'border-[#39263E]/10',
    'border-[#174F43]/15'
  ],
  plugins: []
};
