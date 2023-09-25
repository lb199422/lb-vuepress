const sidebar = require('./sidebar.js');
module.exports = {
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
  sidebar: sidebar,
};
