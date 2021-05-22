const ashlog = require('ashlib').log;
const MyFFWebpackPlugin = require('./webpack-plugins/my-f-f-webpack-plugin');

// ashlog("Processing vue.config.js ...");

module.exports = {
    chainWebpack: (config) => {
        config
            .plugin("FFP")
            .use(new MyFFWebpackPlugin());

        /* config
            .devServer
            .host('0.0.0.0')
            .stats('verbose'); */

        //ashlog("Final Webpack Config Chain: ", Object.keys(config));
        // FIXME
        /* config
            .plugin("HtmlWebpackPlugin")
            .tap((options) => {
                options.title = "Chal Gia BSDK."
            }); */

        // FIXME
        // config['devServer'].port(8080);
    },
    configureWebpack: {
        /* devServer: {
            host: '0.0.0.0',
            stats: "verbose"
        }, */
        devtool: "source-map",
        resolve: {
            alias: {
                // Support for runtime template compilation..
                vue$: 'vue/dist/vue.esm-bundler.js'
            },
        }
    }
}
