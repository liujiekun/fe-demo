# fe-demo

### 推荐用 vuecli 的可视化页面启动和管理工程(需要全局安装vue-cli3)
```
vue ui
```

### 单独启动工程
```
yarn serve / npm run dev
```

### 前端打包
```
yarn build / npm run build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 工程集成了以下插件包
* element-ui
* axios
* normalize.css
* vue-router
* vuex
* vue-moment
* iconffont（部分图标）
* 这里没有添加ever-form2 和 ever-table需要的话自己单独引入
* 封装了http.js,添加了部分header
* 切换路由时候校验登录（请求getcurrentUser接口和getElementByUser接口）
* 添加nprogress

### 工程打包

* 图片文件会打包到static/img文件夹内，
* 所有文件会打包到/dist/xxx 目录下面 xxx 这个目录不要和现有的重复，否则会覆盖的。

### 本地工程需要修改内容
* package.json内的 name 值
* vue.config.js 内的 outputDir
* git remote add origin git@github.com:fang-king/Selenium.git 关联远程github上刚创建的库
* git push -u origin master -f 将刚刚添加的文件push到github。
* 发送后端请求 需要校验token 需要在 localstorage 里面手动添加一个 TOKEN值
* 每次切router的时候 会 校验权限 （getElementByUser和getCurrentUser）如果两个接口返回异常会跳到 对应的登录页面 （/web/#login）
