/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      backgroundColor: {
        primary: '#050642'
      }
    },
  },
  plugins: [],
}

