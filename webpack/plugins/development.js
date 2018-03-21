'use strict';

const webpack = require('webpack');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const plugins = [
    new InterpolateHtmlPlugin({
        PUBLIC_URL: '/'
    }),

    // make hot reloading work
    new webpack.HotModuleReplacementPlugin(),

    // don't spit out any errors in compiled assets
    new webpack.NoEmitOnErrorsPlugin(),

    // show module names instead of numbers in webpack stats
    new webpack.NamedModulesPlugin()
];

module.exports.config = plugins;
