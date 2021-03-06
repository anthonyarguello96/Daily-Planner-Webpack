const path = require("path");

module.exports = {
  devtool: false,
  entry: "./src/index.js",
  module:{
    rules:[
    // {
    //     test: /\.(png|jpg|gif)$/i,
    //     use:'url-loader',
    // },
    {
       test: /\.html$/i,
        // exclude: /template\.html/,
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
