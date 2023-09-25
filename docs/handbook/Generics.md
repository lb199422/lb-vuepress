## markDown 语法
Love**加粗**bold *斜体*


  <LastUpdated />



<div>
  <div>在markDown文件中直接使用vue</div>
  <p>直接使用vue</p>
  <span :class="$style.example"></span>
</div>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>

<style module>
.example {
  color: #41b883;
}
</style>


这是一个链接 [Markdown语法](https://markdown.com.cn)。
## 引用语法
> Dorothy followed her through many of the beautiful rooms in her castle.
## 列表
1. 一
2. 二
3. 三  
- 1
- 2
- 3
