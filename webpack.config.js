const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader', // Intercepta los archivos de js y transpila en versiones más antiguas que entiendan la mayoría de los navegadores
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'css'),
        use: [
        {
          loader: MiniCSSExtractPlugin.loader
        },
        'css-loader',
        ]
      },

    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()

  ]
}