const webpack = require('webpack');
const config = require('./webpack.common.config');

config.plugins.push(
    new webpack.SourceMapDevToolPlugin({
        filename: '[file].map',
    })
);

config.module.loaders[0].query.env = {
    development: {
        presets: ['react-hmre'],
    },
};

config.watchOptions = {
    poll: 1000,
};

module.exports = config;
