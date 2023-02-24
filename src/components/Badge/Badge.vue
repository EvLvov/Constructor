<template>
  <span class="q-badge" :class="classObject">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: "QBadge",
  props: {
    /** The badge's variant. */
    variant: {
      type: String,
      default: "primary",
      validator: (prop) =>
        ["primary", "success", "neutral", "warning", "danger"].includes(prop),
    },
    /** Draws a pill-style badge with rounded edges. */
    pill: {
      type: Boolean,
      default: false,
    },
    /** Makes the badge pulsate to draw attention. */
    pulse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classObject: function () {
      return {
        "q-badge--primary": this.variant === "primary",
        "q-badge--success": this.variant === "success",
        "q-badge--neutral": this.variant === "neutral",
        "q-badge--warning": this.variant === "warning",
        "q-badge--danger": this.variant === "danger",
        "q-badge--pill": this.pill,
        "q-badge--pulse": this.pulse,
      };
    },
  },
};
</script>

<style lang="scss" src="./Badge.styles.scss" scoped></style>
