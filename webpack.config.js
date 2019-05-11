var webpack = require("webpack");
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/App.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devServer: {
        inline: true,
        port: 1970
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
                use: ['eslint-loader']
            }
        ]
    }
};

module.exports = config;