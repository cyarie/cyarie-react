import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const developmentEnvironment = 'development';
const productionEnvironment = 'production';
const testEnvironment = 'test';

const getPlugins = function(env) {
    const GLOBALS = {
        'process.env.NODE_ENV': JSON.stringify(env),
        __DEV__: env === developmentEnvironment
    };

    const plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS), // Tells React to build in production mode
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ];

    switch(env) {
        case productionEnvironment:
            plugins.push(new ExtractTextPlugin('styles.css'));
            plugins.push(new webpack.optimize.DedupePlugin());
            plugins.push(new webpack.optimize.UglifyJsPlugin());
            break;

        case developmentEnvironment:
            plugins.push(new webpack.HotModuleReplacementPlugin());
            plugins.push(new webpack.NoErrorsPlugin());
            break;
    }

    return plugins;
};

const getEntry = function(env) {
    const entry = [];

    if (env === developmentEnvironment) {
        entry.push('webpack-hot-middleware/client');
    } else if (env === testEnvironment) {
        entry.push('./webpack.tests.js');
    }

    entry.push('bootstrap-loader');
    entry.push('./src/index');

    return entry;
};

const getLoaders = function(env) {
    const loaders = [];

    if (env === productionEnvironment) {
        loaders.push({ test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap") });
    } else {
        loaders.push({ test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] });
    }

    loaders.push(...[
        { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', 'eslint'] },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
        { test: /\.png$/, loader: "url-loader?limit=100000" },
        { test: /\.jpg$/, loader: "file-loader" }
    ]);

    return loaders;
};

function getConfig(env) {
    return {
        debug: true,
        devtool: env === productionEnvironment ? 'source-map' : 'cheap-module-eval-source-map',
        noInfo: true,
        entry: getEntry(env),
        target: env === testEnvironment ? 'node' : 'web',
        output: {
            path: __dirname + '/dist',
            publicPath: '',
            filename: 'bundle.js'
        },
        plugins: getPlugins(env),
        module: {
            loaders: getLoaders(env)
        }
    };
}

export default getConfig;