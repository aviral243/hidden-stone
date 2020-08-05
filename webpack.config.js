const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");
const BundleAnalyzerPlugin = require("@bundle-analyzer/webpack-plugin");

// Now you can use .env variables in webpack as well
const dotenv = require("dotenv").config({ path: `${__dirname}/.env` });

const config = {
  entry: {
    path: `${SRC_DIR}/index.js`
  },
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
    publicPath: "/",
    pathinfo: false
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ["node_modules", `${SRC_DIR}`]
  },
  module: {
    rules: [
      {
        test: /(\.scss|css)$/,
        include: `${SRC_DIR}/styles`,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(html)$/,
        include: `${SRC_DIR}/index.html`,
        exclude: [/(node_modules|bower_components)/],
        use: {
          loader: "html-loader",
          options: {
            minimize: false
          }
        }
      },
      {
        test: /\.js?/,
        include: [`${SRC_DIR}`],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"]
            }
          },
          "eslint-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|svg)(\?[a-z0-9=.]+)?$/,
        include: `${SRC_DIR}/images`,
        loader: "url-loader?limit=10000&name=images/[hash].[ext]"
      },
      {
        test: /\.(woff|woff2)?/,
        include: `${SRC_DIR}/fonts`,
        loader:
          "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true
    }),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`,
      inject: false
    }),
    new webpack.ProgressPlugin(),
    new BundleAnalyzerPlugin({ token: dotenv.BUNDLE_ANALYZER_TOKEN })
  ]
};

module.exports = config;
