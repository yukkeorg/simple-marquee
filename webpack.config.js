const path = require("path");

module.exports = {
  mode: "development",
  output: {
    //path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  module: {
    rules: [
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
};
