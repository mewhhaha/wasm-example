import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESBuildMinifyPlugin from "esbuild-webpack-plugin";
import webpack from "webpack";

const docs = path.resolve(__dirname, "../docs");

const config: webpack.Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[hash].js",
    path: docs,
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        loader: "base64-loader",
        type: "javascript/auto",
      },
      {
        test: /\.[jt]sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"],
  },
  experiments: {
    syncWebAssembly: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
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

export default config;
