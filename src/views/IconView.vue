<template>
  <div>
    <q-headline tag="<q-icon> | QIcon">Icon</q-headline>
    <q-icon name="1-square">Квадрат</q-icon>
    >
  </div>
</template>
<script>
import { QIcon } from "@/components/Icon";
import QHeadline from "@/blocks/Headline.vue";
export default {
  name: "IconView",
  components: {
    QIcon,
    QHeadline,
  },
};
</script>
<style></style>
