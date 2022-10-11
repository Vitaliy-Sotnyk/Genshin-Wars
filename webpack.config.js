const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './js/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'main')
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HTMLWebpackPlugin({
            template: "./index.html"
        })
    ]
};