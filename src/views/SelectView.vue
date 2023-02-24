<template>
  <div>
    <q-headline tag="<q-select> | QSelect">Select</q-headline>
    <p>
      Выбор позволяет вам выбрать один или несколько элементов из выпадающего
      меню.
    </p>

    <q-select>
      <q-menu-item value="option-1">Option 1</q-menu-item>
      <q-menu-item value="option-2">Option 2</q-menu-item>
      <q-menu-item value="option-3">Option 3</q-menu-item>
      <q-divider></q-divider>
      <q-menu-item value="option-4">Option 4</q-menu-item>
      <q-menu-item value="option-5">Option 5</q-menu-item>
      <q-menu-item value="option-6">Option 6</q-menu-item>
    </q-select>
  </div>
</template>
<script>
import { QSelect } from "@/components/Select";
import { QMenuItem } from "@/components/Menu";
import { QDivider } from "@/components/Divider";

import QHeadline from "@/blocks/Headline.vue";
export default {
  name: "SelectView",
  components: {
    QSelect,
    QHeadline,
    QMenuItem,
    QDivider,
  },
};
</script>
<style scoped></style>
