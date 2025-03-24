/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,css}"],
  theme: {
    extend: {
      colors: {
        'antique-white': '#FAEBD7',
        'puce': '#CC8899',
        'cool-teal': '#5C899D',
        'ivory-white': '#FFFCEF',
      },
    },
  },
  plugins: [],
}

