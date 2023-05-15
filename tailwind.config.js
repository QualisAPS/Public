/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grape: 'green'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
