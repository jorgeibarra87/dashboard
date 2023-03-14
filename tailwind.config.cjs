/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BDEB00",
        secondary: {
          900: "#1E1F25",
          100: "#131517"
        },
      },
    },
  },
  plugins: [],
}