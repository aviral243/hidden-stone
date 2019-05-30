const merge = require("webpack-merge");
const common = require("./webpack.config");
const OfflinePlugin = require("offline-plugin");

const configProd = {
  mode: "production",
  optimization: {
    minimize: true,
  },
  plugins: [
    new OfflinePlugin({
      AppCache: false,
      ServiceWorker: { events: true }
    })
  ]
};
module.exports = merge(common, configProd);
