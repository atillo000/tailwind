/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'xl': {'max':'1400px'},   
         // => @media (max-width: 1200px) { ... }   
         
        'laptop': {'max':'1024px'},   
        // => @media (max-width: 1024px) { ... }

        'tablet': {'max':'1000px'},
         // => @media (max-width: 1000px) { ... }
         
        'sm': {'max':'800px'},
         // => @media (max-width: 800px) { ... }

        'mobile': {'max':'600px'}
         // => @media (max-width: 600px) { ... }
      }
    },
    maxWidth: {
      "container-1": "1375px",
      "Initial": "initial"
    },
    width: {
      "413":"413px",
    },
    colors:{
      "blue":"#00ada3",
      "green":"#6ecb28",
      "black":"#333333",
      "transparent": "transparent"

    },
    fontFamily: {
      "poppins":['Poppins', 'sans-serif'],
      "roboto":['Roboto','serif'],
      "cosmeticblack":["Cosmetic Black"]
    },
    fontSize:{
      "text-22": "22px"
    },
    backgroundColor:{
      "white": "#fff"
    }
  },
  plugins: [],
}
