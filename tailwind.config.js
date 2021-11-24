const colors = require("./colors.json")
const prepareColorVariables = require("./utils/prepareColorVariables")

const tailwindConfig = prepareColorVariables(colors).tailwindConfig

module.exports = {
  purge: ["./components/**/*.{js,jsx,ts,tsx,scss,css}", "./public/index.ejs"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...tailwindConfig,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "active"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
