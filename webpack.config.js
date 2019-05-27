const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackDashboard = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: `${SRC_DIR}/app/Index.js`,
  output: {
    path: `${DIST_DIR}/app`,
    filename: "bundle.js",
    publicPath: "/app/"
  },
  devServer: {
    open: true,
    inline: true,
    port: 1970
  },
  optimization: {
    minimize: true
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
    })
  ]
};

module.exports = config;
