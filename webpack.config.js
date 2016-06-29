const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            webworkify: 'webworkify-webpack',
        },
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'react-hmre'],
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.js$/,
                include: path.resolve('node_modules/mapbox-gl-shaders/index.js'),
                loader: 'transform/cacheable?brfs',
            },
        ],
        postLoaders: [
            {
                include: /node_modules\/mapbox-gl-shaders/,
                loader: 'transform',
                query: 'brfs',
            },
        ],
    },
};
