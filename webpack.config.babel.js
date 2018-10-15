import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import Clean from 'clean-webpack-plugin';
// import 'babel-polyfill'
import path from 'path';
import fs from 'fs';

import urlConfig from './config.json';

const basePath = path.resolve(__dirname, 'src');
const outPath = path.join(__dirname, 'dist');

//根据配置文件生成对应的base_url文件
const urlData = () => {
    return `const baseUrl = '${urlConfig[process.env.NODE_ENV]}'; export default baseUrl;`;
};

fs.writeFileSync(`${basePath}/js/common/base_url.js`, urlData());

// defaults 要可修改配置参数
let defaults = {
    devServer: {
        contentBase: outPath,
        clientLogLevel: 'none'
    },
    entry: {
        common: ['scss/reset.scss', 'util'],
        index: 'js/index.js'
    },
    resolve: {
        modules: [basePath, 'node_modules'],
        alias: {
            vue: path.resolve(__dirname, './node_modules/vue/dist/vue.js'),
            util: `${basePath}/js/common/util.js`,
            'vue-router': path.resolve(__dirname, './node_modules/vue-router/dist/vue-router.js')
        }
    },
    ProvidePlugin: new webpack.ProvidePlugin({
        Vue: 'vue',
        util: 'util',
        VueRouter: 'vue-router'
    }),
    HtmlPlugin: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的html存放路径，相对于path
            cache: false,
            template: './index.html', // html模板路径
            inject: 'body', // js插入的位置，true/'head'/'body'/false
            // hash: true, //为静态资源生成hash值
            chunks: ['runtime', 'common', 'index'] // 需要引入的chunk，不配置就会引入所有页面的资源
        })
    ]
};

let ExtractSCSS = new ExtractTextPlugin({
        filename: 'css/[name].[hash:20].css',
        disable: false,
        allChunks: true
    }),
    config = {
        mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
        context: basePath,
        target: 'web',
        cache: true,
        entry: defaults.entry,
        output: {
            path: outPath, // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
            // publicPath: '', // 模板、样式、脚本、图片等资源对应的server上的路径
            filename: 'js/[name].[hash].js', // 每个页面对应的主js的生成配置
            chunkFilename: 'js/[name].[hash].js',
            sourceMapFilename: 'js/[name].map'
        },
        watch: process.env.NODE_ENV === 'dev' ? true : false,
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000,
            ignored: /node_modules/
        },
        optimization: {
            // runtimeChunk: {
            //     name: 'runtime'
            // },
            splitChunks: {
                name: 'common',
                minChunks: Infinity,
                minSize: 2,
                filename: 'js/[name].js'
            }
        },
        devServer: process.env.NODE_ENV === 'dev' ? defaults.devServer : {},
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            ExtractSCSS, // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
            new Clean('dist', {
                verbose: true
            })
        ],
        resolve: defaults.resolve,
        module: {
            rules: [{
                test: /\.vue$/,
                include: basePath,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: ExtractSCSS.extract({
                                use: [{
                                    loader: 'css-loader'
                                }, {
                                    loader: 'sass-loader'
                                }],
                                fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                            })
                        }
                    }
                }]
            }, {
                test: /\.(png|jpg|gif|svg|webp|ttc|ttf|eot|woff)$/,
                include: basePath,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 1000,
                        // useRelativePath: true,
                        // outputPath: 'css/img',
                        name: 'css/img/[name].[hash:20].[ext]'
                    }
                }]
            }, {
                test: /\.html$/,
                include: basePath,
                use: ['html-loader']
            }, {
                test: /\.js?$/,
                include: basePath,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                    // options: {
                    //  cacheDirectory: true,
                    //  presets: ['env']
                    // }
                }
            }, {
                // 编译SCSS生成link链接
                test: /\.scss$/,
                // include: basePath,
                use: ExtractSCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }]
        }
    };

config.plugins.push(...defaults.HtmlPlugin, defaults.ProvidePlugin);

let loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
        context: __dirname
    }
});

if (process.env.NODE_ENV !== 'dev') {
    config.plugins.push(loaderOptionsPlugin, new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        exclude: /node_modules/
    }));
}

export default config;
