/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'SoftOrange': 'hsl(35, 77%, 62%)',
        'SoftRed': 'hsl(5, 85%, 63%)',
        'OffWhite': 'hsl(36, 100%, 99%)',
        'GrayishBlue': 'hsl(233, 8%, 79%)',
        'DarkGrayishBlue': 'hsl(236, 13%, 42%)',
        'VeryDarkBlue': 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      screens:{
        '1xl': '1440px'
      }
    },
  },
  plugins: [],
}

