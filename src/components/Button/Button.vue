<template>
  <component
    :is="computedComponent"
    ref="button"
    class="q-button"
    :class="classObject"
    :href="href"
    :type="type"
    :name="name"
    @blur="handleBlur"
    @focus="handleFocus"
    @click="handleClick"
  >
    <span class="q-button__prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <span class="q-button__label">
      <slot></slot>
    </span>
    <span class="q-button__suffix" v-if="$slots.suffix || caret">
      <slot name="suffix"></slot>
      <q-icon
        class="q-button__caret"
        v-if="caret"
        name="chevron-down"
        library="system"
      ></q-icon>
    </span>
    <q-spinner v-if="isLoading"></q-spinner>
  </component>
</template>

<script>
import { QIcon } from "@/components/Icon";
import { QSpinner } from "@/components/Spinner";

export default {
  name: "QButton",
  components: {
    QIcon,
    QSpinner,
  },
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (prop) =>
        [
          "text",
          "default",
          "primary",
          "success",
          "neutral",
          "warning",
          "danger",
        ].includes(prop),
    },
    size: {
      type: String,
      default: "medium",
      validator: (prop) => ["small", "medium", "large"].includes(prop),
    },
    outline: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    caret: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    href: {
      type: String,
    },
    target: {
      type: String,
      validator: (prop) =>
        ["_blank", "_parent", "_self", "_self"].includes(prop),
    },
    download: {
      type: String,
    },
  },
  data() {
    return {
      hasFocus: false,
      isLoading: this.loading,
    };
  },
  computed: {
    computedComponent() {
      return this.href ? "a" : "button";
    },
    classObject() {
      return {
        "q-button--standard": !this.outline,
        "q-button--text": this.variant === "text",
        "q-button--default": this.variant === "default",
        "q-button--primary": this.variant === "primary",
        "q-button--success": this.variant === "success",
        "q-button--neutral": this.variant === "neutral",
        "q-button--warning": this.variant === "warning",
        "q-button--danger": this.variant === "danger",
        "q-button--small": this.size === "small",
        "q-button--medium": this.size === "medium",
        "q-button--large": this.size === "large",
        "q-button--caret": this.caret,
        "q-button--outline": this.outline,
        "q-button--pill": this.pill,
        "q-button--circle": this.circle,
        "q-button--disabled": this.disabled,
        "q-button--loading": this.isLoading,
        "q-button--focused": this.hasFocus,
        "q-button--label": this.$slots.default !== undefined,
        "q-button--prefix": this.$slots.prefix !== undefined,
        "q-button--suffix": this.$slots.suffix !== undefined,
      };
    },
  },
  methods: {
    handleBlur(event) {
      this.hasFocus = false;
      this.$emit("blur", event);
    },

    handleFocus(event) {
      this.hasFocus = true;
      this.$emit("focus", event);
    },

    handleClick(event) {
      if (this.disabled || this.loading) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      this.$emit("click", event);
    },
  },
};
</script>

<style lang="scss" src="./Button.styles.scss"></style>
