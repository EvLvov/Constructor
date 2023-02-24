<template>
  <div class="q-menu-item" :class="classObject">
    <span class="q-menu-item__check">
      <q-icon name="check-lg" :library="'system'" aria-hidden="true"></q-icon>
    </span>
    <span class="q-menu-item__prefix" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </span>
    <span class="q-menu-item__label" v-if="$slots.default">
      <slot></slot>
    </span>
    <span class="q-menu-item__suffix" v-if="$slots.suffix">
      <slot name="suffix"></slot>
    </span>
    <span class="q-menu-item__chevron">
      <q-icon
        name="chevron-right"
        :library="'system'"
        aria-hidden="true"
      ></q-icon>
    </span>
  </div>
</template>

<script>
import { QIcon } from "@/components/Icon";

export default {
  name: "QMenuItem",
  components: {
    QIcon,
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    value: String,
    disabled: {
      type: Boolean,
      value: false,
    },
  },
  computed: {
    classObject() {
      return {
        "q-menu-item--checked": this.checked,
        "q-menu-item--disabled": this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" src="./MenuItem.styles.scss" scoped></style>
