const webpack = require("webpack");
const path = require("path");
const WebpackDashboard = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const merge = require("webpack-merge");
const common = require("./webpack.config");
const DIST_DIR = path.resolve(__dirname, "dist");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const configDev = {
  devServer: {
    contentBase: `${DIST_DIR}`,
    compress: true,
    open: true,
    inline: true,
    port: 1970,
    hot: true
  },
  plugins: [
    new WebpackDashboard(), // Adding webpack-dashboard plugin
    new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      // In `server` mode analyzer will start HTTP server to show bundle report.
      // In `static` mode single HTML file with bundle report will be generated.
      // In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
      analyzerMode: "disabled",
      // Port that will be used in `server` mode to start HTTP server.
      // analyzerPort: 9000,
      // Path to bundle report file that will be generated in `static` mode.
      // Relative to bundles output directory.
      statsFilename: "../../stats.json", //filename of the stats.json
      // Type of report to generate. Can be `treemap` or `sunburst`.
      reportType: "sunburst",
      // Automatically open report in default browser
      openAnalyzer: false,
      // If `true`, Webpack Stats JSON file will be generated in bundles output directory
      generateStatsFile: true,
      // Options for `stats.toJson()` method.
      // For example you can exclude sources of your modules from stats file with `source: false` option.
      // See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
      statsOptions: null,
      // Log level. Can be 'info', 'warn', 'error' or 'silent'.
      logLevel: "info"
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = smp.wrap(merge(common, configDev));
