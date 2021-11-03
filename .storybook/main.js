const neutrino = require("neutrino")
const custom = neutrino().webpack()
const HtmlWebpackPlugin = require("html-webpack-plugin")

// Remove HtmlWebpackPlugin
custom.plugins = custom.plugins.filter((plugin) => {
  return !(plugin instanceof HtmlWebpackPlugin)
})

module.exports = {
  stories: ["../stories/*stories*"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      output: {
        ...config.output,
        publicPath: "/",
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...custom.resolve.alias,
        },
      },
      module: { ...config.module, rules: custom.module.rules },
      plugins: [...custom.plugins, ...config.plugins],
    }
  },
}
