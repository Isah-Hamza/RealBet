/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'desktop-md': '992px',
      },
      colors:{
        textColor:"#f3f4f5",
        yellowColor:"#e1ff57",
        saddleBrown:"saddlebrown",
      },
      fontFamily:{
        'Montserrat':['Montserrat', 'ui-sans-serif'],
        'Josfine':[ 'Josefin Sans', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
}