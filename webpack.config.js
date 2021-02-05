const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[new HtmlWebpackPlugin({
    template:'./src/template.html'
  })],
  module:{
    rules:[
      {
      test: /\.css$/,
      use:["style-loader", "css-loader"]
    },
    {
        test: /\.(png|jpg|gif)$/i,
        use:'url-loader',
    }
  ]
  }
};
