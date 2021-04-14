const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "docs"),
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Chris Chow | Portfolio'
      return args
    })
  }
}