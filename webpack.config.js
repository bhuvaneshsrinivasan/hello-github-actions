const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './app/index.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 8080  
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
            }  
         }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  