
const HtmlWebpackPlugin = require('html-webpack-plugin');//copia el html al dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//copia el ccs al dist
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');//saca los comentarios y deja listo para producion los ccs

const CopyWebpackPlugin = require('copy-webpack-plugin');//copia las imagenes al dist

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
            filename: './index.html',
            //filename: '/index.[contenthash].html',
          
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