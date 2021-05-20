const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
const ashlog = require('ashlib').log;

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, (compilation) => {
            ashlog('======================================================================================');
            ashlog('My First Fucking Webpack Plugin. Build Process Starting...');
            ashlog('=================================================================================');
        });
    }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;