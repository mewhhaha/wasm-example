import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack from "webpack";
import reactRefresh from "react-refresh-typescript";

const dist = path.resolve(__dirname, "dist");

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "index.js",
    path: dist,
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        loader: "base64-loader",
        type: "javascript/auto",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [reactRefresh()],
          }),
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"],
  },
  // @ts-ignore
  devServer: {
    contentBase: dist,
    publicPath: dist,
  },
  experiments: {
    syncWebAssembly: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "Development",
      hmr: true,
      template: path.join(__dirname, "src", "index.html"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};

export default config;
