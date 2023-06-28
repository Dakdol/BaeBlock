/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '390px',
    },
    extend: {
      colors: {
        mint: '#1EE7AB',
        purple: '#AA3FFF',
        deepYellow: '#FFC805',
        lightYellow: '#FFD84D',
        white: '#FFFFFF',
        lightBage: '#FAFAF2',
        lightGray: '#F1F0F8',
        gray: '#B2B2C1',
        darkGray: '#7F7F82',
        black: '#2D2D32',
      },
      fontSize: {
        headline: '26px',
        subtitle: '20px',
        body: '16px',
        caption: '14px',
      },
      fontWeight: {
        bold: 700,
      },
    },
    fontFamily: {
      sans: ['aGD'],
    },
  },

  plugins: [],
};
