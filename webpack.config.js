const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
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
