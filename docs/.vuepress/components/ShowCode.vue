<template>
  <div>
    <RecoDemo>
      <template slot="code-template">
        <div class="container">
          <slot name="code-template"></slot>
        </div>
      </template>
      <template slot="code-script">
        <div class="container">
          <slot name="code-script"></slot>
        </div>
      </template>
      <template slot="code-style">
        <div class="container">
          <slot name="code-style"></slot>
        </div>
      </template>
    </RecoDemo>
  </div>
</template>

<script>
export default {
  name: 'ShowCode',
  props: ['slot-key'],
  mounted() {},
};
</script>

<style scoped>
.container {
  padding: 10px;
  line-height: 40px;
}
</style>
