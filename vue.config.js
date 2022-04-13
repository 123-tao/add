const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false
})

module.exports = {
  devServer: {
    port: 8000
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '人工智能社团平台'
      return args
    })
  }
}
