const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js', vendor: './src/vender.js' },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash].[ext]',
        },
      },
    ],
  },
};
