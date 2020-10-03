"use strict";

const path = require("path");
//const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "/src/client"),
  entry: "./main.js",
  mode: "development",
  devtool: "eval-cheap-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
};
