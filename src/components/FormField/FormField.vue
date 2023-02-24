<template>
  <div class="q-form-field" :class="classObject">
    <label class="q-form-field__label" for="input">
      <slot name="label"></slot>
    </label>
    <slot></slot>
    <div class="q-form-field__help-text">
      <slot name="helpText"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "QFormField",
  props: {
    size: {
      type: String,
      validator: (prop) => ["small", "medium", "large"].includes(prop),
      default: "medium",
    },
  },
  computed: {
    classObject() {
      let arrClass = [
        {
          "q-form-field--small": this.size === "small",
          "q-form-field--medium": this.size === "medium",
          "q-form-field--large": this.size === "large",
          "q-form-field--has-label": this.$slots.label,
          "q-form-field--has-help-text": this.$slots.helpText,
        },
      ];

      return arrClass;
    },
  },
};
</script>

<style lang="scss" src="./FormField.styles.scss" scoped></style>
