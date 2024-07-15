在打包css文件的时候webpack会报错，因此需要引入css_loader：
先得安装一个：
![安装css_loader](image-2.png)
安装了之后还需要配置一下，这里有三种方式：
+ 内联方式（用的也比较少）
![内联方式](image-3.png)
+ cli方式（webpack5中不再使用）
+ 配置方式
webpack配置中添加如下配置
![配置方式](image-4.png)
还有别的写法
![两种写法](image-5.png)