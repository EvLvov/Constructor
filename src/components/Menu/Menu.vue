<template>
  <div class="q-menu">
    <slot :click="handleClick"></slot>
  </div>
</template>

<script>
import EventHub from "@/internal/event";

export default {
  name: "QMenu",
  methods: {
    handleClick(event) {
      const target = event.target;
      const item = target.closest(".q-menu-item");
      console.log(item);
      if (item?.classList.contains("q-menu-item--disabled") === false) {
        EventHub.emit("menu:select", { detail: { item } });
      }
    },
  },
};
</script>

<style src="./Menu.styles.scss" lang="scss" scoped></style>
