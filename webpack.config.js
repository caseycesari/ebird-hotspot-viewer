module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'react-hmre'],
            },
        }],
    },
};
