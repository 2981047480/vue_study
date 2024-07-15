const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        // 这里需要用绝对路径
        path: path.resolve(__dirname, "./dist"),
        // 指定打包生成的文件名
        filename: "bundle.js"
    }
}