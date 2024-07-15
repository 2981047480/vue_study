const path = require("path");
const { plugin } = require("postcss");

module.exports = {
    entry: "./src/index.js",
    output: {
        // 这里需要用绝对路径
        path: path.resolve(__dirname, "./dist"),
        // 指定打包生成的文件名
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 正则表达式，匹配所有的css文件  
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require("autoprefixer")
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    }
}