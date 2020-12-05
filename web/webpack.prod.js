const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESBuildMinifyPlugin = require("esbuild-webpack-plugin").default;

const docs = path.resolve(__dirname, "../docs");

const config = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: docs,
  },
  module: {
    rules: [
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
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new HtmlWebpackPlugin({
      title: "Production",
      template: path.join(__dirname, "src", "index.html"),
      minify: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new ESBuildMinifyPlugin({ target: "esnext" })],
  },
};

module.exports = config;
