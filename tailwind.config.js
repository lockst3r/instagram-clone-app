/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#405DE6',
      accent: '#ED4956',
      border: '#dcdcdc',
      error: '#ED4956',
      white: '#fff',
      black: '#000',
      grey: '#666666',
      lightgrey: '#cccccc',
    },

    extend: {
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [],
};
