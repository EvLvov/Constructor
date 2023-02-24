<template>
  <div class="q-divider" :class="classObject" :style="styleObject"></div>
</template>
<script>
export default {
  name: "QDivider",
  props: {
    width: {
      type: String,
    },
    color: {
      type: String,
    },
    spacing: {
      type: String,
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (prop) => ["vertical", "horizontal"].includes(prop),
    },
  },
  computed: {
    classObject() {
      const classes = [
        {
          "q-divider--horizontal": this.orientation === "horizontal" || "",
          "q-divider--vertical": this.orientation === "vertical",
        },
      ];

      return classes;
    },
    styleObject() {
      return [
        {
          "--width": this.width,
          "--color": this.color,
          "--spacing": this.spacing,
        },
      ];
    },
  },
  methods: {
    handleVerticalChange() {
      this.vertical ? "vertical" : "horizontal";
    },
  },
};
</script>

<style src="./Divider.styles.scss" lang="scss" scoped></style>
