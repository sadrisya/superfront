/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"','sans-serif'],

      },
      backgroundImage: {
        'frontbg': "url('./images/Group-1221.png')",
      },
      colors: {
        'slate_sp': '#CFD3D4',
        'slate_dark':'#5E6366',
       'green_sp': '#00B48D'
      },
    },
  },
  plugins: [],
}

