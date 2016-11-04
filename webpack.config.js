var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/dist/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: '#source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    }
};
