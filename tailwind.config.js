/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,css}"],
  theme: {
    extend: {
      fontFamily: {
        pally: ["Pally", "sans-serif"],
      },
      colors: {
        'antique-white': '#FAEBD7',
        'puce': '#CC8899',
        'cool-teal': '#5C899D',
        'ivory-white': '#FFFCEF',
        'blue-telegram': '#1C92D2',
        'white-telegram': '#F2FCFE',
        'platinum': '#EFF3F4',
      },
    },
  },
  plugins: [],
}

