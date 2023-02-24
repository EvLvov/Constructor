<template>
  <q-tree class="q-nav" tag="nav">
    <q-tree-item class="q-nav__item">
      <router-link class="q-nav__link" to="/get-started">
        Начало работы
      </router-link>
    </q-tree-item>
    <q-tree-item class="q-nav__item">
      <router-link class="q-nav__link" to="/foundation">Основы</router-link>
    </q-tree-item>
    <q-tree-item class="q-nav__item" expanded>
      <router-link class="q-nav__link" to="/components">Компоненты</router-link>
      <template v-slot:children>
        <q-tree-item
          class="q-nav__item"
          v-for="component of components"
          :key="component.id"
        >
          <router-link class="q-nav__link" :to="getComponentLink(component)">
            {{ component }}
          </router-link>
        </q-tree-item>
      </template>
    </q-tree-item>
  </q-tree>
</template>
<script>
import { QTree, QTreeItem } from "@/components/Tree";

export default {
  name: "QNav",
  components: {
    QTree,
    QTreeItem,
  },
  data() {
    return {
      components: [
        "Alert",
        "Avatar",
        "Badge",
        "Button",
        "Button Group",
        "Card",
        "Checkbox",
        "Dialog",
        "Divider",
        "Dropdown",
        "Icon",
        "IconButton",
        "Drawer",
        "Input",
        "Menu",
        "Menu Item",
        "Menu Label",
        "Spinner",
        // "Select",
        "Tree",
        "Tree Item",
        "Textarea",
        "Test",
      ],
    };
  },
  methods: {
    getComponentLink(component) {
      return `/components/${component.toLowerCase().replace(/\s/g, "-")}`;
    },
  },
};
</script>

<style src="./index.scss" lang="scss"></style>
