
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    
    optimization: {

      minimizer: [
        
        new CssMinimizerWebpackPlugin(),
        
      ]

    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: /style\.css$/i,
          use: [
             //el orden que se llama los package inporta
            "style-loader", 
            "css-loader"
          ],
        },

        {
          test: /style\.css$/i,//error aqui
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            //'sass-loader'
          ],
        },

        {
          test: /\.html$/i,
          loader: "html-loader",

          options:{
              sources: false,
              minimize: false,
          }
        },

      ],
    },
    

    plugins: [

             

        new HtmlWebpackPlugin({  // Also generate a test.html
            
            template: './src/index.html',
            filename: './index.html'
          
        }),

        new MiniCssExtractPlugin({
            //filename: '[name].[contenthash].css',
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyWebpackPlugin({
          
          patterns: [

            { from: 'src/assets', to: 'assets/'},
          ]

        }), 
   ]

  };