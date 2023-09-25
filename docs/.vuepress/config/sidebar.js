module.exports = [
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
  {
    title: '优化代码展示',
    path: '/plugins/ExtractCode',
    collapsable: false, // 不折叠
    children: [],
  },
];
