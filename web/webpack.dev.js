const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

const dist = path.resolve(__dirname, "dist");

const config = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: dist,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          plugins: ["react-refresh/babel"],
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"],
  },
  // @ts-ignore
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
  },
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.join(__dirname, "src", "index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
};

module.exports = config;
