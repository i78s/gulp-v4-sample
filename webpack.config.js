const webpack = require('webpack');
const path = require('path');

const commonConfig = {
    context: __dirname,
    target: 'web',
    entry: {
        app: './src/ts/app.ts'
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: path.resolve(__dirname),
        filename: '[name].bundle.js'
    },
    resolve: {
        root: path.join(__dirname, '/src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.js', '.html']
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ],
        noParse: []
    }
};

module.exports = commonConfig;