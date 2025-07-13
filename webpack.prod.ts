import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import config from "./webpack.config";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const prodConfig: webpack.Configuration = merge(config, {
  mode: "production",
  output: {
    filename: "scripts.[contenthash].js",
    // filename: "scripts.js",
    path: path.resolve(__dirname, "public/"),
    assetModuleFilename: "assets/[name].[hash][ext][query]",
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin({ 
    filename: "styles.[contenthash].css", })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // "style-loader", /* Use style-loader for dev builds */
          MiniCssExtractPlugin.loader /* Use MiniCssExtractPlugin.loader for production builds */,
          "css-loader",
           "sass-loader"
            
          
        ],
      },
    ],
  },
  optimization: {
    realContentHash: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
      }),
    ],
  },
});

export default prodConfig;
// Note: The MiniCssExtractPlugin and HtmlWebpackPlugin are commented out for simplicity.
