/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
   

    extend: { 
      spacing: {
      header: "4.5rem",
      sidebar: "15rem",
      input: "2.5rem",
    },
  
  },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')],
}
