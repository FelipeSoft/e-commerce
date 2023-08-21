/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        "cart": "33vw",
        "-cart": "-33vw"
      }
    },
  },
  plugins: [],
}

