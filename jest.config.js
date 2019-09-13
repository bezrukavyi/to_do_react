module.exports = {
  verbose: true,
  automock: false,
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/test/support/",
    "<rootDir>/node_modules/"
  ],
  setupTestFrameworkScriptFile: "<rootDir>/test/support/enzym.js",
  setupFiles: [
    "<rootDir>/test/support/setup.js"
  ],
  testRegex: "(/test/.*|\\.(test|spec))\\.(js|jsx|json)$",
  moduleFileExtensions: [
    "js",
    "json",
    "jsx"
  ]
}
