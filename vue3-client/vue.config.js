const ashlog = require('ashlib').log;
const MyFFWebpackPlugin = require('./webpack-plugins/my-f-f-webpack-plugin');

// ashlog("Processing vue.config.js ...");

module.exports = {
    chainWebpack: (config) => {
        config
            .plugin("FFP")
            .use(new MyFFWebpackPlugin());

        // FIXME
        // config['devServer'].port(8080);
    },
    configureWebpack: {
        /* devServer: {
            // FIXME
            port: 8080
        } */
        devtool: "source-map",
        resolve: {
            alias: {
                // Support for runtime template compilation..
                vue$: 'vue/dist/vue.esm-bundler.js'
            },
        }
    }
}