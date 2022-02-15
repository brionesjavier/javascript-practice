
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//mi modificacion
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {

    mode: 'production',
    
    optimization: {
      minimize: true,
      minimizer: [
        
        
        new CssMinimizerWebpackPlugin(),
        new TerserPlugin(),
      ]

    },
    output:{
      filename: 'main.[contenthash].js'
    },


    module: {
      rules: [



        // {
        //   test: /\.m?js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: "babel-loader",
        //     options: {
        //       presets: ['@babel/preset-env']
        //     }
        //   }
        // },


        {
          
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: [
              "babel-loader",
    
            ]

        },

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
            filename: './index.[contenthash].html'
          
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            //filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyWebpackPlugin({
          
          patterns: [

            { from: 'src/assets', to: 'assets/'},
          ]

        }), 
   ]

  };