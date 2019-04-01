const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

//configuration of html webpack plugin
const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    stylePath: "dist/css/styles.css",
    libsPath: "dist/lib/"
});


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve('dist'),
        filename: 'bundled.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [htmlPlugin]
};
