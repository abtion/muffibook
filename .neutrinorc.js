const react = require("@neutrinojs/react")
const jest = require("@neutrinojs/jest")
const path = require("path")

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    (neutrino) =>
      neutrino.config.module
        .rule("svgr")
        .test(/\.svg$/) // you can pick whatever file extension you like here
        .issuer({ test: /\.[tj]sx?$/ }) // optional, but lets you continue importing SVGs from CSS files etc. without it breaking
        .use("@svgr/webpack")
        .loader(require.resolve("@svgr/webpack"))
        .options({ svgoConfig: { plugins: { removeViewBox: false } } }), // allow resizing SVGs (default options strip viewBox for some strange reason)

    react({
      style: {
        test: /\.s?css$/,
        loaders: [
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
      babel: {
        presets: [
          ["@babel/preset-typescript", { allExtensions: true, isTSX: true }],
        ],
      },
    }),

    jest({
      testRegex: ".*test.(t|j)sx?$",
      testEnvironment: "jsdom",
      collectCoverageFrom: ["./**/*.{js,ts,tsx}", "!./**/*.d.ts"],
      coveragePathIgnorePatterns: ["./*.js", "coverage"],
      transform: {
        "\\.(ts|tsx)$": "@neutrinojs/jest/src/transformer.js", // Compile ts and tsx files with babel (regular js files)
      },
      setupFiles: ["./setupTests.ts"],
      setupFilesAfterEnv: ["./setupTestsAfterEnv.ts"],
      moduleFileExtensions: ["js", "ts", "json", "tsx", "scss"],
      moduleNameMapper: {
        "\\.svg": "<rootDir>/__mocks__/svgr-webpack.js",
        "~/(.*)$": "<rootDir>/$1",
      },
    }),

    (neutrino) => {
      // Add typescript extensions
      neutrino.config.resolve.extensions.add(".tsx")
      neutrino.config.resolve.extensions.add(".ts")
      neutrino.config.module.rule("compile").test(/\.(wasm|mjs|jsx|js|tsx|ts)$/)
      neutrino.config.module.rule("compile").include.clear()
      neutrino.config.resolve.alias.set("~", path.resolve(__dirname))
    },
  ],
}
