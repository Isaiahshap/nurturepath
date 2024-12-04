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
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
