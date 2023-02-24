<template>
  <div class="q-headline">
    <h1 class="q-headline__title" v-if="$slots.default">
      <slot></slot>
    </h1>
    <div class="q-headline__tag" v-if="tag">
      <code>{{ tag }}</code>
    </div>
    <div class="q-headline__info" v-if="$slots.info">
      <slot name="info"></slot>
    </div>
    <q-divider></q-divider>
  </div>
</template>
<script>
import { QDivider } from "@/components/Divider";

export default {
  name: "QHeadline",
  components: {
    QDivider,
  },
  props: {
    tag: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.q-headline__title {
  margin-bottom: 0;
}
</style>
