/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white-primary": "#eee4de",
        "creme-primary": "#b89f94",
        "black-primary": "#080605",
        "orange-secondary": "#b5512d",
        "creme-secondary": "#ddb8a1",
        "gray-primary": "#7c8383",
        "brown-secondary": "#5f453a",
      }
    },
  },
  plugins: [],
}
