/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'mb': '375px'
      },
      colors: {
        'dark-magenta': '#502050',
        'soft-pink': '#ee68a4',
        'dark-grey-magenta': '#937b92',
        'light-grey-magenta': '#f7f2f7',
        'white': '#FFFFFF',
      },
      fontSize: {
        'fs15' : '15px'
      },
      fontFamily: {
        'sans-serif': ['League Spartan'],
      },
    },
  },
  plugins: [],
}
