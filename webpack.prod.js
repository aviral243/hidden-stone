const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config");
const OfflinePlugin = require("offline-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const SRC_DIR = path.resolve(__dirname, "src");

const configProd = {
  mode: "production",
  performance: {
    maxAssetSize: 1e7,
    maxEntrypointSize: 1e7
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: true,
    // splitChunks: false
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      maxSize: 40000,
      minChunks: 10,
      maxAsyncRequests: 5,
      maxInitialRequests: 2,
      automaticNameDelimiter: "~",
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
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
module.exports = smp.wrap(merge(common, configProd));
