/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        swing: {
          '0%,30%,50%,70%,to': {transform: 'rotate(0deg)'},
          '10%': {transform: 'rotate(10deg)'},
          '40%': {transform: 'rotate(-10deg)'},
          '60%': {transform: 'rotate(5deg)'},
          '80%': {transform: 'rotate(-5deg)'},
        },
      },
      animation: {
        swing: 'swing .5s ease-in-out 1 alternate',
      },
    },
  },
  plugins: [],
}
