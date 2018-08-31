module.exports = {
    entry: {
        myApp: "./app/javascript/",
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist/`,
        publicPath: "/"
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        inline: true
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".json", ".css"],
        modules: [
            './node_modules',
            './app'
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.js$/,
                loader: "eslint-loader", exclude: /node_modules/
            }
        ]
    }
}