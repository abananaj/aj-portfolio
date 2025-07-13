import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
// import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  entry: {
    scripts: path.resolve(__dirname, "src/index.ts")
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Home',
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, "src/index.html"),
    //   scriptLoading: "module",
    //   inject: "body",
    //   favicon: path.resolve(__dirname, "media/favicon-alt.svg"),
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'About',
    //   filename: 'about.html',
    //   template: path.resolve(__dirname, "src/_about.html"),
    //   scriptLoading: "module",
    //   inject: "body",
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'fb.html',
    //   scriptLoading: "defer",
    //   template: './src/html/parts/_feedbucket.html', // Path to your HTML template
    //   inject: 'head', // Inject scripts into the <head>
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4|ico|.pdf)/,
        type: "asset/resource",
      },
    ],
  },
  ignoreWarnings: [{ module: /node_modules/ }],
};
export default config;

