/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors')
const themes = require('./src/utils/themes')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace']
      }
    }
  },
  plugins: [createThemes(themes)]
}
