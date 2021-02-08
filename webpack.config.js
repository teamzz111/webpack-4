const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  module: {
    rules: [
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
    })
  ]
}