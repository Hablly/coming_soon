/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgb': "url('/public/img/bg.jpg')",
        'bg2': "url('/public/img/bg2.jpg')"
      },
    },
  },
  plugins: [],
}