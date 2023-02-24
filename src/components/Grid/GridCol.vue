<template>
  <div class="q-grid-col" :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "QGridCol",
  props: {
    col: {
      type: Object,
      default: () => {
        return {
          xs: "auto",
        };
      },
    },
    offset: {
      type: Object,
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

      for (let colKey in this.col) {
        if (this.col[colKey] == "auto") {
          classes.push(`q-grid-col--${colKey}`);
        } else {
          classes.push(`q-grid-col--${colKey}-${this.col[colKey]}`);
        }
      }

      for (let offsetKey in this.offset) {
        classes.push(
          `q-grid-col--offset-${offsetKey}-${this.offset[offsetKey]}`
        );
      }

      this.alignment?.forEach((item) => classes.push(`q-grid-col--${item}`));
      this.distribution?.forEach((item) => classes.push(`q-grid-col--${item}`));

      return classes;
    },
  },
};
</script>

<style lang="scss" src="./GridCol.styles.scss" scoped></style>
