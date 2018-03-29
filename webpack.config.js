var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src/js', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        minimize: true,
                        sourceMap: true
                    }
                }, 
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
              ]
            })
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css'
        })
    ]
}
