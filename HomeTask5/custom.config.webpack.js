let path = require('path');
let HTMLWebpackPlugin = require('html-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {
    mode: 'development',
    entry: ["whatwg-fetch",'babel-polyfill','./src/index.js'],
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[new HTMLWebpackPlugin()],
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude :/(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env']
                    }
                }
            },{
                test:/\.css$/,
                use:[{loader:'style-loader'},
                    {loader:'css-loader'}]
            },{
                test:/\.jpg|png$/,
                use:[{loader:'url-loader'}]
            }
        ]
    }
}