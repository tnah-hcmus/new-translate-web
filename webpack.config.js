const path = require('path');

module.exports = (env) => {
  const isProduction = env === "production";
  return {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
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
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}
};
