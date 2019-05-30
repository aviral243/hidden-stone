const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: {
    path: `${SRC_DIR}/app/Index.js`
  },
  output: {
    filename: "bundle.js",
    path: `${DIST_DIR}/app`,
    publicPath: "/app/"
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ["eslint-loader"]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      // Simulate the removal of files
      //
      // default: false
      dry: true
    }),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`
    })
  ]
};

module.exports = config;
