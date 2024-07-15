css-loader还不够, 只能把css读进来， 不能有样式，所以需要style-loader

### 安装
```
npm install style-loader -D
```

### 配置
```
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
                # 写在后面的loader先执行，因此要把style-loader放在前面
            ]
        }
    ]
}
```
    
`