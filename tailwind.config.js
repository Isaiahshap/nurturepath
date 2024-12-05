/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f3f0ff',
          100: '#e5deff',
          200: '#d4c6ff',
          300: '#b197fc',
          400: '#9747FF',
          500: '#7c3aed',
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      backgroundColor: {
        'body': 'black',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
