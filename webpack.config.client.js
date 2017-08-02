const { join } = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    "bundle": [
      join(__dirname, "./src/polyfills.js"),
      join(__dirname, "./src/script.js"),
    ],
  },
  cache: false,
  target: "web",
  output: {
    path: join(__dirname, "dist"),
    filename: "[name].js",
    pathinfo: true,
    publicPath: "/dist/",
  },
  devtool: "eval",
  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        BABEL_ENV: JSON.stringify("client-dev"),
        APP_ENV: JSON.stringify("browser"),
      },
    }),
  ],
};
