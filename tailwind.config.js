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
        accent: '#d8706b', // Warna untuk teks bold, lebih gelap dari #fe8b86 untuk kontras
      },
    },
  },
  plugins: [],
}

