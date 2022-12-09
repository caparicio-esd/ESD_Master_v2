/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    fontFamily: {
      sans: ["'Source Sans Pro'", "sans-serif"]
    },
    extend: {
      fontFamily: {
        netto: ["'NettoOT'", "sans-serif"]
      },
      colors: {
        primary: "#25ac7a"
      }
    }
  },
  plugins: []
}
