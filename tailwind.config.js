/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef7cd',
          200: '#feeb95',
          300: '#fdd955',
          400: '#fbc638',
          500: '#d4af37', // Primary Gold
          600: '#b8941f',
          700: '#9c7a1a',
          800: '#80651c',
          900: '#6b541c',
        },
        platinum: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e5e4e2', // Platinum
          300: '#d1d0ce',
          400: '#b8b7b5',
          500: '#9e9d9b',
          600: '#868582',
          700: '#6f6e6b',
          800: '#5a5957',
          900: '#4a4947',
        },
        diamond: '#f8f8ff',
        'rose-gold': '#e8b4b8',
        emerald: '#50c878',
        sapphire: '#0f52ba',
        ruby: '#e0115f',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(212, 175, 55, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}