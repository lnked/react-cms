'use strict';

const define = require('./define');
const { resolve } = require('path');

const entryPoint = Object.assign({}, {
    vendors: [
        'core-js/es6/map',
        'core-js/es6/set',
        'react',
        'react-dom',
        'react-router-dom'

        // 'react',
        // 'react-dom',
        // 'react-router',
        // 'react-helmet',
        // 'react-redux',
        // 'react-router-redux',
        // 'redux',
        // 'redux-connect',
        // 'redux-thunk'
    ]
});

Object.assign(entryPoint, {
    app: [
        ...define.rs_development ? [
            // 'react-hot-loader/patch',
            // 'webpack-dev-server/client?http://0.0.0.0:3000',
            // 'webpack/hot/only-dev-server'
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
        ] : [],
        resolve(define.rs_root, 'app')
    ]
});

console.log('entryPoint: ', entryPoint)

module.exports.config = entryPoint;
