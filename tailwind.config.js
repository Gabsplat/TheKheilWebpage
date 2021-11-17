const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      theserif: 'TheSerif',
      theserifcaps: 'TheSerifCaps',
      thesans: 'TheSans',
      aniron: 'Aniron'
    },
    screens: {
      'landscape': {'raw': '(orientation: landscape)'},
      'smobile': '350px', 
      'mobile': '450px',
      'smallTablet': '650px',
      'tablet': '400px',
      ...screens
    },
    extend: {
      gridTemplateRows: {
        '2m': '3fr 1fr',
        '2t': '1fr 11rem',
        'mobile': '40rem 1fr 9rem'
      },
      spacing: {
        '25': '6.25rem'
      },
      colors: {
        darkgray: '#333333',
        lightgray: '#999999'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
