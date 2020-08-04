const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: "development",
  entry: {
    demo: "./demo/index.js",
  },
  output: {
    //path: path.resolve(__dirname, "output"),
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css"}),
  ],
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
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { url: false, importLoaders: 2,} },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
