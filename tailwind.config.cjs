/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE6C4D",
        secundary: {
          900: "#1E1F25",
          100: "#131517"
        },
      },
    },
  },
  plugins: [],
}