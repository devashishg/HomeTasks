let path = require('path');
require('es6-promise').polyfill();

module.exports = {
    mode: 'production',
    entry: ["whatwg-fetch",'babel-polyfill','./src/index.js'],
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'dist')
    },

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
            }
        ]
    }
}