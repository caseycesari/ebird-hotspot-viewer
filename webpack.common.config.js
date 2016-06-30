const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/',
    },
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
                    presets: ['react', 'es2015'],
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
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url?limit=25000',
            },
            {
                test: /\.(html)$/,
                loader: 'file-loader?name=[name].[ext]',
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
    plugins: [],
};
