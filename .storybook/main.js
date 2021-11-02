const custom = require("../webpack.config.js")

console.log(custom.module.rules)

module.exports = {
  stories: ["../stories/*stories*"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    }
  },
}
