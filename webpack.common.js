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
    // {
    //     test: /\.(png|jpg|gif)$/i,
    //     use:'url-loader',
    // },
    {
       test: /\.html$/i,
        exclude: /template\.html/,
       loader: 'html-loader',
     },
     {
       test: /\.(svg|png|jpe?g|gif)$/i,
       use: [
         {
           loader: 'file-loader',
           options:{
             name:"[name].[hash].[ext]",
             outputPath: "imgs"
           }
         },
       ],
     },
  ]
  }
};
