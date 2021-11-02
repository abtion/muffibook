import prepareColorVariables from "../utils/prepareColorVariables"
import colors from "../colors.json"

import "../main.scss"

const cssRoot = document.querySelector(":root")
const cssVariables = prepareColorVariables(colors).cssVariables

Object.entries(cssVariables).forEach(([name, value]) =>
  cssRoot.style.setProperty(name, value)
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
