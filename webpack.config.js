const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (env) => {
  return {
  //mode: 'production',
  devtool: 'cheap-source-map',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: '[name].[contenthash:8].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /vi/
    ),
    new Dotenv(),
    new LodashModuleReplacementPlugin,
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({htmlWebpackPlugin}) => `
      <!DOCTYPE html>
      <html>      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>RVN Editor</title>
        <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
        <link rel="manifest" href="assets/icons/site.webmanifest">
        <link rel="mask-icon" href="assets/icons/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="assets/icons/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="assets/icons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        ${htmlWebpackPlugin.tags.headTags}
      </head>
      
      <body>
        <div id="app" class="wrap"></div>
        ${htmlWebpackPlugin.tags.bodyTags}
        <script src="assets/scripts/demo-btns.js"></script>
        <script src="assets/scripts/nav.js"></script>
      </body>
      </html>
      
      `
    }) // so that file hashes don't change unexpectedly
  ],
  module: {
    rules: [
        {
          loader: 'babel-loader', 
          test: /\.js$/, 
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          include: [path.join(__dirname, "src/assets")],
          loader: "file-loader?name=assets/[name].[ext]"
        },
        {
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' },
        },
      ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    //minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    historyApiFallback: true,
    headers: {
      'X-Frame-Options': 'sameorigin'
    }
  }
}
};
