
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