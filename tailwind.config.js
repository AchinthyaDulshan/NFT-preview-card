/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'white': 'hsl(0, 0%, 100%)',
      'dark-blue-1': 'hsl(217, 54%, 11%)',
      'dark-blue-2': 'hsl(216, 50%, 16%)',
      'line-blue': 'hsl(215, 32%, 27%)'
    },
    extend: {},
  },
  plugins: [],
}