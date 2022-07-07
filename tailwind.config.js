const colors = require("./colors.json")
const prepareColorVariables = require("./utils/prepareColorVariables")

const tailwindConfig = prepareColorVariables(colors).tailwindConfig

module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx,scss,css}",
    "./stories/**/*.tsx",
    "./public/index.ejs",
  ],
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
  plugins: [require("@tailwindcss/aspect-ratio")],
}
