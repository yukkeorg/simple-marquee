const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    //path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader", options: { presets: ["@babel/preset-env"], } }
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { url: false, importLoaders: 2,} },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  }
};
