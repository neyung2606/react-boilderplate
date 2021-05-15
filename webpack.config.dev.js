const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

require("dotenv").config({ path: __dirname + "/.env" });

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src/index.js")],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      src: path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less|\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg|jpg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public", "index.html"),
      paths: {
        publicURL: "",
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        APP_BASENAME_PATH:
          JSON.stringify(process.env.APP_BASENAME_PATH) || JSON.stringify("/"),
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0",
    stats: "errors-only",
    port: process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 8080,
    contentBase: path.join(__dirname, "/public"),
    disableHostCheck: true,
  },

  target: "web",
};
