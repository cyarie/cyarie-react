/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfigBuilder from '../webpack.config';
import colors from 'colors';
import { argv as args } from 'yargs';

process.env.NODE_ENV = 'production';

const webpackConfig = webpackConfigBuilder(process.env.NODE_ENV);

webpack(webpackConfig).run((err, stats) => {
    const inSilentMode = args.s;

    if (!inSilentMode) {
        console.log('Generating minified bundle for production sue via Webpack...'.bold.blue);
    }

    if (err) {
        console.log(err.bold.red);

        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings && !inSilentMode) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    if (!inSilentMode) {
        console.log(`Webpack states: ${stats}`);
    }

    console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green.bold);

    return 0;
});