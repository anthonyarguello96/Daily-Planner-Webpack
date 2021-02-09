const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  devtool: false,
  entry: "./src/index.js",
  plugins:[new HtmlWebpackPlugin({
    template:'./src/template.html',
    minify: false
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
