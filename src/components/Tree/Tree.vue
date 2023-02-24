<template>
  <component
    :is="tag"
    class="q-tree"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <slot></slot>
    <slot name="expand-icon" hidden aria-hidden="true"> </slot>
    <slot name="collapse-icon" hidden aria-hidden="true"> </slot>
  </component>
</template>

<script>
export default {
  name: "QTree",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  methods: {
    handleClick() {},
    handleKeyDown() {},
  },
};
</script>

<style src="./Tree.styles.scss" lang="scss" scoped></style>
