const webpack = require('webpack');
const fs = require('fs');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'production',  
  entry: {
    WeekSelector: './src/WeekSelector.js',
    WeekSelectorBPS: './src/WeekSelectorBPS.js',
    WeekSelectorSPS:"./src/WeekSelectorSPS.js"
  },
  output: {
    filename: '[name].bundle.js', 
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    https: {
        key: fs.readFileSync('E:/OpenSSL/keywp.pem'),
        cert: fs.readFileSync('E:/OpenSSL/cert.pem')
    }
}
  
};