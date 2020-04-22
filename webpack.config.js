const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ title: 'Webassembly Webpack Helloworld' }),
  ],
  module: {
    rules: [
      {
        test: /\.woff$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.wat$/,
        use: [
          "arraybuffer-loader",
          "wast-loader",
        ],
      },
    ],
  },
};
