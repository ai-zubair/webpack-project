module.exports = {
    mode : "none",
    entry : "./src/index.js",
    output : {
        path : __dirname + "/dist",
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test: /\.me$/,
                include: /loader-test/,
                exclude:/src/,
                oneOf:[
                    {
                        resourceQuery : /yes/,
                        loader: './webpack/loaders/test-loader-1'
                    },
                    {
                        resourceQuery : /no/,
                        loader: './webpack/loaders/test-loader-2'
                    }
                ]
            }
        ]
    }
}