module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/static/',
    },
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
