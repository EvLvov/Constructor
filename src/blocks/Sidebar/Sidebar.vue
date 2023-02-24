<template>
  <aside class="q-sidebar">
    <q-search class="q-sidebar__search"></q-search>
    <q-nav class="q-sidebar__nav"></q-nav>
  </aside>
</template>

<script>
import { QSearch } from "@/blocks/Search";
import { QNav } from "@/blocks/Nav";

export default {
  name: "QSidebar",
  components: {
    QSearch,
    QNav,
  },
};
</script>

<style src="./index.scss" lang="scss"></style>
