
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    mode: 'development',

    module: {
      rules: [
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
   ]

  };