/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '390px',
    },
    colors: {
      primary: {
        lightYellow: '#FFD84D',
        darkYellow: '#FFC805',
        purple: '#AA3FFF',
        mint: '#1EE7AB',
      },

      grayTone: {
        defualt: '#B2B2C1',
        white: '#FAFAF2',
        light: '#F1F0F8',
        dark: '#7F7F82',
        black: '#2D2D32',
      },
    },
    fontFamily: {},
  },

  plugins: [],
};
