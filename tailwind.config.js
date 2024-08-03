/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'color-moderate-violet': 'hsl(263, 55%, 52%)',
        'color-very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'color-very-dark-blackish-blue': 'hsl(219, 29%, 14%)',
        'color-white': 'hsl(0, 0%, 100%)',
        'color-light-gray': 'hsl(0, 0%, 81%)',
        'color-light-grayish-blue': 'hsl(210, 46%, 95%)'
      },
      fontFamily: {
        'Barlow Semi Condensed': ['Barlow Semi Condensed']
      }
    },
  },
  plugins: [],
}

