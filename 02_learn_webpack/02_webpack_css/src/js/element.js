// import "css-loader!../css/style.css"
import "../css/style.css"
import "../css/title.less" // 需要安装less插件
import "../css/test.css"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "Hello World" 

document.body.appendChild(divEl)