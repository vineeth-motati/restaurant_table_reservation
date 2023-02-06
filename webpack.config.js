// var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlValidatePlugin = require('html-validate-plugin');

module.exports = {
    entry: {
        index: __dirname + '/src/app/index.js',
        about: __dirname + '/src/app/about.js',
        auth: __dirname + '/src/app/auth.js',
        layout: __dirname + '/src/app/layout.js',
        manage: __dirname + '/src/app/manage.js',
        user: __dirname + '/src/app/user.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlValidatePlugin('/src/**/*', 'https://validator.w3.org/nu/'),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/public/index.html',
            chunks: ['auth', 'index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: __dirname + '/src/public/about.html',
            chunks: ['auth', 'index', 'about'],
        }),
        new HtmlWebpackPlugin({
            filename: 'auth.html',
            template: __dirname + '/src/public/auth.html',
            chunks: ['auth', 'index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'manager.html',
            template: __dirname + '/src/public/manager.html',
            chunks: ['auth', 'layout', 'index', 'manage'],
        }),
        new HtmlWebpackPlugin({
            filename: 'menu.html',
            template: __dirname + '/src/public/menu.html',
            chunks: ['auth', 'index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'user.html',
            template: __dirname + '/src/public/user.html',
            chunks: ['auth', 'layout', 'index', 'user'],
        }),
    ],

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(svg|png|jpg|jpeg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,

                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    publicPath: './public/fonts/',
                },
            },
        ],
    },

    devServer: {
        // configuration for webpack-dev-server
        historyApiFallback: true,
        contentBase: './public', //source of static assets
        port: 9000, // port to run dev-server
    },
    devtool: 'inline-source-map',
};
