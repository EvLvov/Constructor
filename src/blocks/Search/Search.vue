<template>
  <div class="q-search">
    <q-input placeholder="Поиск" clearable>
      <template v-slot:prefix>
        <q-icon name="search"></q-icon>
      </template>
    </q-input>
  </div>
</template>
<script>
import { QInput } from "@/components/Input";
import { QIcon } from "@/components/Icon";

export default {
  name: "QSearch",
  components: {
    QInput,
    QIcon,
  },
};
</script>
<style src="./index.scss" lang="scss"></style>
