module.exports = {
  title: 'lb文档',
  description: 'lb vuepress 文档',
  theme: 'reco',
  base: '/lb-vuepress/',
  themeConfig: {
    lastUpdated: '上次更新', // string | boolean,
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'lb博客',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/lb199422?tab=repositories',
          },
        ],
      },
    ],
    subSidebar: 'auto',
    // 侧边栏
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: '学前必读', path: '/' }],
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: '条件类型', path: '/handbook/ConditionalTypes' },
          { title: 'MARKDOW语法', path: '/handbook/Generics' },
        ],
      },
    ],
  },
  // 语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  //使用查看源码和效果插件
  plugins: ['demo-container'],
};
