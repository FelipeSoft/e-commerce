/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        top: '0px -2px 6px rgba(0, 0, 0, 0.1)',
      },
      margin: {
        "cart": "33vw",
        "-cart": "-33vw"
      },
      height: {
        "cart": "calc(100vh - 56px)"
      }
    },
  },
  plugins: [],
}

