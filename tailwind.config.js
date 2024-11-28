/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Montserrat', 'sans-serif'], // Use Montserrat as the default sans-serif
      },
      fontWeight: {
        200: '200', // Add a "light" font-weight option
        normal: '300', // Define normal as default
        400: '400', // Add a "regular" font-weight option
        600: '600', // Add a "bold" font-weight
        700: '700', // Add a "boldest" font-weight option
        900: '900', // Add a "boldest" font-weight option
      },
    },
  },
  plugins: [],
}