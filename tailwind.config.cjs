/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "serif"],
      },
      colors: {
        red: "rgb(255, 0, 0)",
      },
    },
  },
  plugins: [],
};
