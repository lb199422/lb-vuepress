module.exports = [
  //使用查看源码和效果插件
  'demo-container',
  // 鼠标动态效果
  'cursor-effects',
  [
    // 著作权
    'copyright',
    {
      authorName: '速度七十迈的蜗牛', // 选中的文字将无法被复制
      minLength: 30, // 如果长度超过  30 个字符
    },
  ],
  // 优化代码展示
  '@vuepress-reco/extract-code',
];
