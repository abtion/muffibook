process.env.NODE_ENV = process.env.NODE_ENV || "test"

module.exports = {
  testRegex: ".*test.(t|j)sx?$",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["./**/*.{js,ts,tsx}", "!./**/*.d.ts"],
  coveragePathIgnorePatterns: ["./*.js", "coverage", "stories"],
  setupFiles: ["./setupTests.ts"],
  setupFilesAfterEnv: ["./setupTestsAfterEnv.ts"],
  moduleFileExtensions: ["js", "ts", "json", "tsx", "scss"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/style-import-mock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/static-file-mock.js",
    "\\.svg": "<rootDir>/__mocks__/svgr-webpack.js",
    "~/(.*)$": "<rootDir>/$1",
  },
}
