module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 3,
      viewportUnit: "vw",
      mixPixelValue: 1,
      selectorBlackList: [
        ".iphoneXr"
      ]
    }
  }
}
