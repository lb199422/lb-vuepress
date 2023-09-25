<template>
  <div>
    <RecoDemo>
      <template slot="code-template">
        <slot name="code-template"></slot>
      </template>
      <template slot="code-script">
        <slot name="code-script"></slot>
      </template>
      <template slot="code-style">
        <slot name="code-style"></slot>
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

<style scoped></style>
