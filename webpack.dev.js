const webpack = require("webpack");
const path = require("path");
const WebpackDashboard = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const merge = require("webpack-merge");
const common = require("./webpack.config");
const SRC_DIR = path.resolve(__dirname, "src");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const configDev = {
  devServer: {
    contentBase: SRC_DIR,
    compress: true,
    open: true,
    host: "0.0.0.0",
    inline: true,
    port: 1970,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    }
  },
  plugins: [
    new WebpackDashboard(), // Adding webpack-dashboard plugin
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = smp.wrap(merge(common, configDev));
