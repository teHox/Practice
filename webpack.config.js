const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// import imagemin from 'imagemin';
// import imageminSvgo from 'imagemin-svgo';

// (async () => {
// 	await imagemin(['images/*.svg'], {
// 		destination: 'build/images',
// 		plugins: [
// 			imageminSvgo({
// 				plugins: [{
// 					name: 'removeViewBox',
// 					active: false
// 				}]
// 			})
// 		]
// 	});

// 	console.log('Images optimized');
// })();

const optimization = () => {
    const configObj = {
      splitChunks: {
        chunks: 'all'
      }
    };
  
    if (isProd) {
      configObj.minimizer = [
        new CssMinimizerWebpackPlugin(),
        new TerserWebpackPlugin()
      ];
    }
  
    return configObj;
};

const plugins = () => {
    const basePlugins = [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        minify: {
          collapseWhitespace: isProd
        }
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: `./css/${filename('css')}`
      }),
      new CopyWebpackPlugin({
        patterns: [
          {from: path.resolve(__dirname, 'src/assets') , to: path.resolve(__dirname, 'app')}
        ]
      }),
      new SVGSpritemapPlugin(
        "src/**/*.svg",
      ),
    ];
  
    if (isProd) {
      basePlugins.push(
        new ImageminPlugin({
          bail: false, // Ignore errors on corrupted images
          cache: true,
          imageminOptions: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      removeViewBox: true
                    }
                  ]
                }
              ]
            ]
          }
        })
      )
    }
  
    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
        publicPath: ''
    },
    resolve: {
        alias: {
          images: path.resolve(__dirname, 'src/img/'),
        },
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'app'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    optimization: optimization(),
    plugins: plugins(),
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                    hmr: isDev
                    },
                },
                'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: (resourcePath, context) => {
                          return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                      }
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: () => {
                        return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
                    }
                }
            },
            {
                test: /\.(?:|woff2|ttf)$/,
                generator: {
                    filename: () => {
                        return isDev ? 'fonts/[name][ext]' : 'fonts/[name].[contenthash][ext]';
                    }
                }
            }
        ]
    }    
}