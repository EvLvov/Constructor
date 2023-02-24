<template>
  <div class="q-row" :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "QRow",
  props: {
    gutter: {
      type: String,
    },
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
      let classes = [{ "q-row--reverse": this.reverse }];

      this.alignment.forEach((item) => classes.push(`q-row--${item}`));
      this.distribution.forEach((item) => classes.push(`q-row--${item}`));

      return classes;
    },
    styleObject() {
      let styles = [];

      if (this.gutter) {
        styles.push({ "--q-grid-gutter-compensation": this.gutter });
      }

      return styles;
    },
  },
};
</script>

<style src="./Row.styles.scss" lang="scss" scoped></style>
