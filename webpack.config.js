const path = require("path");

module.export = {
  mode: "development",
  output: {
    //path: path.resolve(__dirname, "output"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: "\.s?css$",
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2,
            }
          },
          {
            loader: "sass-loader",
          }
        ]
      }
    ]
  }
}
