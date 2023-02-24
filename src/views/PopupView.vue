<template>
  <div class="popup-view">
    <q-popup placement="bottom-start" active>
      <template #anchor>
        <span class="trigger">trigger</span>
      </template>
      <div class="box">box</div>
    </q-popup>
  </div>
</template>

<script>
import { QPopup } from "@/components/Popup";

export default {
  name: "PopupView",
  components: {
    QPopup,
  },
};
</script>

<style lang="scss">
.trigger {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border: dashed 2px var(--q-color-neutral-600);
  margin: 50px;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  background: var(--q-color-primary-600);
  border-radius: var(--q-border-radius-medium);
}
</style>
