const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");

module.exports = merge(webpackConfig, {
  devtool: "eval",

  output: {
    pathinfo: true,
    publicPath: "/",
    filename: "[name].js",
  },

  devServer: {
    static: "./src",
    hot: true,
    port: 3000,
    host: "localhost",
  },
});
