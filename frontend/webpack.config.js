const { VueLoaderPlugin } = require('vue-loader');

module.export = {
    entry : __dirname+"/src/app.js",
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test : /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test : /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins : [
        new VueLoaderPlugin()
    ]
}