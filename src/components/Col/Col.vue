<template>
  <div class="q-col" :class="classObject" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "QCol",
  props: {
    gutter: {
      type: String,
    },
    xs: {
      type: Number,
    },
    sm: {
      type: Number,
    },
    md: {
      type: Number,
    },
    lg: {
      type: Number,
    },
    offset: {
      type: Object,
    },
    offsetXs: {
      type: Number,
    },
    offsetSm: {
      type: Number,
    },
    offsetMd: {
      type: Number,
    },
    offsetLg: {
      type: Number,
    },
    alignment: {
      type: Array,
      default: () => [],
    },
    distribution: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    classObject() {
      let classes = [];

      if (this.xs) {
        classes.push(`q-col--xs-${this.xs}`);
      }

      if (this.sm) {
        classes.push(`q-col--sm-${this.sm}`);
      }

      if (this.md) {
        classes.push(`q-col--md-${this.md}`);
      }

      if (this.lg) {
        classes.push(`q-col--lg-${this.lg}`);
      }

      if (this.offsetXs) {
        classes.push(`q-col--xs-${this.xs}`);
      }

      if (this.offsetSm) {
        classes.push(`q-col--sm-${this.sm}`);
      }

      if (this.offsetMd) {
        classes.push(`q-col--md-${this.md}`);
      }

      if (this.offsetLg) {
        classes.push(`q-col--lg-${this.lg}`);
      }

      this.alignment?.forEach((item) => classes.push(`q-col--${item}`));
      this.distribution?.forEach((item) => classes.push(`q-col--${item}`));

      return classes;
    },
    styleObject() {
      let styles = [];

      if (this.gutter) {
        styles.push({ "--q-grid-half-gutter-width": this.gutter });
      }

      return styles;
    },
  },
};
</script>

<style src="./Col.styles.scss" lang="scss" scoped></style>
