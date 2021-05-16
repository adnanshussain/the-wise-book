const ashlog = require('../ashLib007/src/index').log;
const MyFFWebpackPlugin = require('./webpack-plugins/my-f-f-webpack-plugin');

ashlog("Processing vue.config.js ...");

module.exports = {
    chainWebpack: (config) => {
        ashlog("Process end webpack configuration here..");
        // ashlog(config);

        // FIXME Why is the plugin not being invoked like this ??
        config
            .plugin("FFP")
            .use(new MyFFWebpackPlugin());
    }
}