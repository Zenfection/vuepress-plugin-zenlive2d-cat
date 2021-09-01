const { path } = require('@vuepress/utils')

module.exports = {
  name: 'zenlive2d-cat-vuepress',
  clientAppEnhanceFiles: path.resolve(__dirname, './bin/clientAppEnhance.js'),
  clientAppRootComponentFiles: path.resolve(__dirname, './bin/Cat.vue'),
}
