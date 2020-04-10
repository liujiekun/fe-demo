// vue.config.js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: './dist/demo', // 把项目打包到dist下的xxx目录，运维会把dist下面的文件拷到对应的wwwroot目录内，这块依赖接口格式，不能出错
  publicPath: '/web/', // 注释掉就会把文件打包到根目录（引用的地方会跟着变化）
  assetsDir: 'static',
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      // .set('assets',resolve('src/assets'))
      // .set('components',resolve('src/components'))
      // .set('layout',resolve('src/layout'))
      // .set('base',resolve('src/base'))
      // .set('static',resolve('src/static'))
  }
}
