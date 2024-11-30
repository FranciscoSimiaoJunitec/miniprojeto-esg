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
      animation: {
        'grow-bounce': 'grow-bounce 2s infinite ease-in-out',
      },
      keyframes: {
        'grow-bounce': {
          '0%': { transform: 'translateY(-10px)', opacity: 1 },
          '30%': { transform: 'translateY(10px)', opacity: 1 },
          '80%': { transform: 'translateY(10px)', opacity: 1 },
          '90%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(-10px)', opacity: 0 },
        },
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