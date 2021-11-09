const path = require("path")

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
          "~": path.resolve(__dirname, ".."),
        },
      },
      module: {
        ...config.module,
        rules: [
          // Add SVG support
          {
            test: /\.svg$/,
            issuer: { test: /\.[tj]sx?$/ },
            use: [
              {
                loader: "@svgr/webpack",
                options: { svgoConfig: { plugins: { removeViewBox: false } } },
              },
            ],
          },
          // Add sass support
          {
            test: /\.s?css$/,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  postcssOptions: {
                    plugins: [require("tailwindcss"), require("autoprefixer")],
                  },
                },
              },
              "sass-loader",
            ],
          },
          ...config.module.rules,
        ],
      },
      plugins: [...config.plugins],
    }
  },
}
