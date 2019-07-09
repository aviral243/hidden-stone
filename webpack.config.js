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
    chunkFilename: "[chunkhash].js",
    sourceMapFilename: "[file].map",
    path: `${DIST_DIR}/app`,
    publicPath: "/hidden-stone/app/",
    pathinfo: false
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ["node_modules", `${SRC_DIR}/app`]
  },
  module: {
    rules: [
      {
        test: /(\.scss)$/,
        include: `${SRC_DIR}/app/styles`,
        exclude: [
          /(node_modules|bower_components)/,
          `${SRC_DIR}/app/components`,
          `${SRC_DIR}/app/images`,
          `${SRC_DIR}/app/fonts`
        ],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(html)$/,
        include: `${SRC_DIR}/index.html`,
        exclude: [/(node_modules|bower_components)/, `${SRC_DIR}/app/`],
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
            removeComments: true,
            collapseWhitespace: true
          }
        }
      },
      {
        test: /\.js?/,
        include: [`${SRC_DIR}/app/components`, `${SRC_DIR}/app/Index.js`],
        exclude: [
          /(node_modules|bower_components)/,
          `${SRC_DIR}/app/fonts`,
          `${SRC_DIR}/app/images`,
          `${SRC_DIR}/app/styles`
        ],
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
        include: `${SRC_DIR}/app/images`,
        exclude: [
          /(node_modules|bower_components)/,
          `${SRC_DIR}/app/components`,
          `${SRC_DIR}/app/fonts`,
          `${SRC_DIR}/app/styles`
        ],
        loader: "url-loader?limit=10000"
      },
      {
        test: /\.(woff|woff2)?/,
        include: `${SRC_DIR}/app/fonts`,
        exclude: [
          /(node_modules|bower_components)/,
          `${SRC_DIR}/app/components`,
          `${SRC_DIR}/app/images`,
          `${SRC_DIR}/app/styles`
        ],
        loader:
          "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
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
    }),
    new webpack.ProgressPlugin()
  ]
};

module.exports = config;
