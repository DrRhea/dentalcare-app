/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
    './src/app/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fef5ee',
        secondary: '#275766',
      },
    },
  },
  plugins: [],
}

