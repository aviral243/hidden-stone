const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config");
const OfflinePlugin = require("offline-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, "src");

const configProd = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        include: SRC_DIR,
        parallel: true,
        cache: true,
        uglifyOptions: {
          warnings: true,
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: {
            comments: false
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        }
      })
    ]
  },
  plugins: [
    new OfflinePlugin({
      AppCache: false,
      ServiceWorker: { events: true }
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
module.exports = merge(common, configProd);
