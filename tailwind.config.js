const colors = require("./colors.json")
const prepareColorVariables = require("./utils/prepareColorVariables")

const tailwindConfig = prepareColorVariables(colors).tailwindConfig

module.exports = {
  purge: [
    "./components/**/*.{js,jsx,ts,tsx,scss,css}",
    "./stories/**/*.tsx",
    "./public/index.ejs",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      current: "currentColor",
      ...tailwindConfig,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd", "active"],
      boxShadow: ["active"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
