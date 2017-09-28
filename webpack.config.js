const webpack = require("webpack")
const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    watch:true,
    target:'electron',
    entry:'./src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer:{
        port:8080,
        contentBase:"./public"
    },
    resolve:{
        extensions:['.js', '.jsx'],
        alias:{
            modules:path.resolve(__dirname, 'node_modules')
        }
    },
    module:{
        loaders:[{
            test:/.js[x]?$/,
            exclude:/node_modules/,
            loader:'babel-loader',
            query:{
                presets:['es2015', 'react'], 
                plugins:['transform-object-rest-spread']
            }
        },{
            test:/.css?$/,
            loader: ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:'css-loader'
            })
        },{
            test:/\.(woff|woff2|svg|png|gif|eot|ttf)$/,
            loader:'file-loader'
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}