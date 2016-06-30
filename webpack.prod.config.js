const webpack = require('webpack');
const config = require('./webpack.common.config');

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
    })
);

module.exports = config;
