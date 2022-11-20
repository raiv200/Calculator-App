/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        manrope:["Manrope", 'sans-serif'],
        spacemono:['Space Mono', 'monospace']
        
      },
    },
  },
  plugins: [ ],
}