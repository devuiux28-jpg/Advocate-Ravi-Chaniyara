/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2342',
          light: '#123159',
          dark: '#061527'
        },
        royal: {
          DEFAULT: '#1E40AF',
          light: '#3B5FCC',
          dark: '#162F82'
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0C158',
          dark: '#A5811A'
        },
        surface: '#F8FAFC'
      },
      fontFamily: {
        heading: ['Poppins', 'Noto Sans Devanagari', 'Noto Sans Gujarati', 'sans-serif'],
        body: ['Inter', 'Noto Sans Devanagari', 'Noto Sans Gujarati', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
        gujarati: ['Noto Sans Gujarati', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(10, 35, 66, 0.15)',
        card: '0 4px 24px rgba(10, 35, 66, 0.08)',
        gold: '0 8px 30px rgba(201, 162, 39, 0.25)'
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0A2342 0%, #1E40AF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #E0C158 100%)',
        'hero-overlay': 'linear-gradient(120deg, rgba(10,35,66,0.92) 0%, rgba(30,64,175,0.75) 60%, rgba(10,35,66,0.55) 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
}
