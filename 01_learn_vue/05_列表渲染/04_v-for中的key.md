先来一个看不懂的官方文档
![alt text](image-2.png)
什么是VNode？
首先VNode是一个虚拟节点，我们在vue中声明的所有组件和元素都会变成VNode
其次VNode是一个JavaScript对象，它描述了组件的属性和结构
![什么是VNode](image-4.png)
虚拟DOM其实叫虚拟DOM树 不渲染成真实DOM是为了做跨平台
![虚拟DOM](image-3.png)
在04代码的案例中，vue内部会有一些优化，比如diff算法，会根据新旧VNode进行比较，只更新需要更新的部分
![diff算法](image-5.png)
![diff源码](image-6.png)
![没有key的时候的做法](image-7.png)
没有key的时候的做饭如上，我们期望的是做一个插入和挪动的操作
带有key的时候diff算法如下：
![带有key的时候的diff算法（一）](image-8.png)
先从头部patch，然后从尾部patch patch->如果有n1，进行更新操作，如果n1为null，进行mount操作：
![第二步 从尾部patch](image-9.png)
key不一样 break：
![key不一样 break](image-10.png)
![带有key的时候的diff算法（二）](image-11.png)
第三步中，源码里面新增节点是这个位置为null的时候就进行挂载 mount挂载： div->放到真实DOM 就是挂载
unmount卸载： 真实DOM->div 就是卸载
![第三步 若前面是null，则进行挂载](image-12.png)
![第四步 旧节点比较多的时候进行卸载](image-13.png)
![第五步 如果有一部分是无序的 尽可能在旧的列表中找到新的列表中对应的节点](image-14.png)
![带有key的时候的diff算法（三）](image-15.png)

显式优先级高于隐式优先级