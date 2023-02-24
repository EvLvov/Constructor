<template>
  <div class="q-card" :class="classObject">
    <div class="q-card__image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="q-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="q-card__body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="q-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "QCard",
  computed: {
    classObject() {
      return [
        {
          "q-card--has-footer": this.$slots.footer,
          "q-card--has-image": this.$slots.image,
          "q-card--has-header": this.$slots.header,
        },
      ];
    },
  },
};
</script>

<style src="./Card.styles.scss" lang="scss" scoped></style>
