/** @type {import('tailwindcss').Config} */
const withCSS = require('@zeit/next-css')
module.exports =withCSS( {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})