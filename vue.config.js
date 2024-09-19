const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // 其他配置项...
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // 其他规则，例如处理 .js 和 .css 文件
    ]
  },
  plugins: [
    new VueLoaderPlugin()
    // 其他插件
  ]
};
