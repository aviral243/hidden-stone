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
    // chunkFilename: "[id].bundle_[chunkhash].js",
    // sourceMapFilename: "[file].map",
    path: `${DIST_DIR}/app`,
    publicPath: "/app/"
  },
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    //   minSize: 30000,
    //   maxSize: 0,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    //   automaticNameDelimiter: "~",
    //   name: false,
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       priority: -10
    //     },
    //     default: {
    //       minChunks: 2,
    //       priority: -20,
    //       reuseExistingChunk: true
    //     }
    //   }
    // }
  },

  module: {
    rules: [
      { test: /(\.scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
            removeComments: false,
            collapseWhitespace: false
          }
        }
      },
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
          },
          "eslint-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      // Simulate the removal of files
      //
      // default: false
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: true
    }),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      filename: `${DIST_DIR}/index.html`
      // chunks: ["bundle"],
      // inject: "body"
    }),
    new webpack.ProgressPlugin()
  ]
};

module.exports = config;
