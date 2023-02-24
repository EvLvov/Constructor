<template>
  <div class="q-grid-row" :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "QGridRow",
  props: {
    alignment: {
      type: Array,
      default: () => [],
    },
    distribution: {
      type: Array,
      default: () => [],
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      let classes = [{ "q-grid-row--reverse": this.reverse }];

      this.alignment.forEach((item) => classes.push(`q-grid-row--${item}`));
      this.distribution.forEach((item) => classes.push(`q-grid-row--${item}`));

      return classes;
    },
  },
};
</script>

<style lang="scss" src="./GridRow.styles.scss" scoped></style>
