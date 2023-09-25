const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js');

module.exports = {
  title: 'lb文档',
  description: 'lb vuepress 文档',
  theme: 'reco',
  base: '/lb-vuepress/',
  themeConfig: themeConfig,
  // 语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  plugins: plugins,
};
