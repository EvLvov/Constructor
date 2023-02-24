<template>
  <div class="q-grid" :class="classObject">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "QGrid",
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject() {
      let classes = [
        {
          "q-grid--fluid": this.fluid,
        },
      ];

      return classes;
    },
  },
};
</script>

<style lang="scss" src="./Grid.styles.scss" scoped></style>
