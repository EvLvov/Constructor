<template>
  <div>
    <q-headline tag="<q-icon-button> | QIconButton">Icon Button</q-headline>
    <p>
      Иконки Кнопок - это простые кнопки только для значков, которые можно
      использовать для действий и на панелях инструментов.
    </p>
    <q-icon-button name="gear" label="Settings"></q-icon-button>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline.vue";
import { QIconButton } from "@/components/IconButton";
export default {
  name: "IconButtonView",
  components: {
    QIconButton,
    QHeadline,
  },
};
</script>
<style scoped></style>
