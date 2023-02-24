<template>
  <div class="q-avatar" :class="classObject" :aria-label="label" role="img">
    <div class="q-avatar__initials" v-if="initials">
      {{ initials }}
    </div>
    <div class="q-avatar__icon" v-else aria-hidden="true">
      <slot name="icon">
        <q-icon name="person-fill" />
      </slot>
    </div>
    <img
      class="q-avatar__image"
      :src="image"
      v-if="image && !hasError"
      alt=""
      @error="() => (hasError = true)"
    />
  </div>
</template>
<script>
import { QIcon } from "../Icon";

export default {
  name: "QAvatar",
  components: {
    QIcon,
  },
  props: {
    /** The image source to use for the avatar. */
    image: String,
    /** A label to use to describe the avatar to assistive devices. */
    label: String,
    /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
    initials: String,
    /** The shape of the avatar. */
    shape: {
      type: String,
      default: "circle",
      validator: (prop) => ["circle", "square", "rounded"].includes(prop),
    },
  },
  data() {
    return {
      hasError: false,
    };
  },
  watch: {
    image() {
      this.hasError = false;
    },
  },
  computed: {
    classObject: function () {
      return {
        "q-avatar--circle": this.shape === "circle",
        "q-avatar--rounded": this.shape === "rounded",
        "q-avatar--square": this.shape === "square",
      };
    },
  },
};
</script>

<style src="./Avatar.styles.scss" lang="scss"></style>
