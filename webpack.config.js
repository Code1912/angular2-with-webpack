/**
 * Created by Code1912 on 2016/9/18.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //插件项

    //页面入口文件配置
    entry: {
        index: './src/index.ts',
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
    },
    //入口文件输出配置
    output: {
        path: 'dist/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,

                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,

                loader: 'raw'
            }
        ]

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'vendor', 'polyfills','index']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })],
    //其它解决方案配置
    resolve: {
        root: '/src',
        extensions: ['', '.js', '.json', '.scss', ".ts"],
    }
};
