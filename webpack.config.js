var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: {
    'app': './src/index.ts',  // 単体動作用
  },

  output: {  // 出力先
    path: "./www/js",
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts'
      }
    ],

    // ここでTypescriptのTsLintを設定
    preLoaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        include: __dirname,
        loader: 'tslint'
      },
      { test: /\.js$/ ,exclude: "node_modules", loader: "source-map-loader" }   // ソースマップを付加する
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
   new HtmlWebpackPlugin({
      template: 'src/index.html'  // 単体動作用
    })
  ],
  devServer: {
//    contentBase: "./public",
    proxy: {
    "/karte/*": { "target": { "host": "www.nec.cdm", "protocol":"http", "port":8080 }}
    },
    historyApiFallback: true,
    inline: true,
    hot: true
  }
} ;