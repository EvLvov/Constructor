<template>
  <component
    :is="tag"
    class="q-icon-button"
    :class="classObject"
    :aria-disabled="disabled ? true : false"
    :aria-label="label"
    :tabindex="disabled ? '-1' : '0'"
  >
    <div class="q-icon-button__icon">
      <q-icon
        :name="name"
        :library="library"
        :src="src"
        aria-hidden="true"
      ></q-icon>
    </div>
    <transition>
      <div class="q-icon-button__text" v-if="$slots.text">
        <slot name="text"></slot>
      </div>
    </transition>
    <slot name="icon" v-if="$slots.icon"></slot>
  </component>
</template>
<script>
import { QIcon } from "@/components/Icon";

export default {
  name: "QIconButton",
  components: {
    QIcon,
  },
  props: {
    /** The name of the icon to draw. */
    name: String,
    /** The name of a registered custom icon library. */
    library: String,
    /** An external URL of an SVG file. */
    src: String,
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href: String,
    /** Tells the browser where to open the link. Only used when `href` is set. */
    target: {
      type: String,
      validator: (prop) =>
        ["_blank", "_parent", "_self", "_top"].includes(prop),
    },
    /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
    download: String,
    /**
     * A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should
     * always include a label that describes what the icon button does.
     */
    label: String,
    /** Disables the button. */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLink: this.href ? true : false,
      tag: this.isLink ? "a" : "button",
      hasFocus: false,
    };
  },
  computed: {
    classObject: function () {
      return {
        "q-icon-button--disabled": this.isLink && this.disabled,
        "q-icon-button--focused": this.hasFocus,
      };
    },
  },
  methods: {
    handleFocus(event) {
      this.hasFocus = true;
      this.$emit("focus", event);
    },

    handleBlur(event) {
      this.hasFocus = false;
      this.$emit("blur", event);
    },

    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
  },
};
</script>

<style lang="scss" src="./IconButton.styles.scss" scoped></style>
