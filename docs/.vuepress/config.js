module.exports = {
  title: "lb文档",
  description: "lb vuepress 文档",
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "lb博客",
        items: [
          { text: "Github", link: "https://github.com/lb199422?tab=repositories" },
          { text: "掘金", link: "https://juejin.cn/user/712139234359182/posts" },
        ],
      },
    ],
    subSidebar: "auto",
    // 侧边栏
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
    // 语言
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
  },
};
