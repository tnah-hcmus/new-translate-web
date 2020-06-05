const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  return {
  mode: 'production',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: '[name].[contenthash:8].js'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({htmlWebpackPlugin}) => `
      <!DOCTYPE html>
      <html>      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Reddit Translate App</title>
        ${htmlWebpackPlugin.tags.headTags}
      </head>
      
      <body>
        <div id="app" class="wrap"></div>
        ${htmlWebpackPlugin.tags.bodyTags}
        <script src="assets/scripts/demo-btns.js"></script>
        <script src="assets/scripts/nav.js"></script>
      </body>

      <script src="/__/firebase/7.14.5/firebase-app.js"></script>
      <script src="/__/firebase/7.14.5/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
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
        }
      ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
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
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    historyApiFallback: true
  }
}
};
