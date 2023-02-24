<template>
  <div class="q-spinner" :style="styleObject">
    <svg class="q-spinner__container">
      <circle class="q-spinner__track"></circle>
      <circle class="q-spinner__indicator"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "QSpinner",
  props: {
    size: {
      type: String,
    },
    trackWidth: {
      type: String,
    },
    trackColor: {
      type: String,
    },
    indicatorColor: {
      type: String,
    },
    speed: {
      type: String,
    },
  },
  computed: {
    styleObject() {
      const styles = [
        {
          "font-size": this.size,
          "--track-width": this.trackWidth,
          "--track-color": this.trackColor,
          "--indicator-color": this.indicatorColor,
          "--speed": this.speed,
        },
      ];

      return styles;
    },
  },
};
</script>

<style src="./Spinner.styles.scss" lang="scss" scoped></style>
