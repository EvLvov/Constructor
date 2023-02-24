<template>
  <div class="q-tree-item-view">
    <q-headline tag="<q-tree-item> | QTreeItem">Tree Item</q-headline>
    <h3>
      Элемент дерева служит иерархическим узлом, который находится внутри
      компонента <code>tree</code>.
    </h3>
    <q-code-block :value="tree">
      <q-tree>
        <q-tree-item>
          Элемент списка 1
          <template v-slot:children>
            <q-tree-item>Элемент списка A</q-tree-item>
            <q-tree-item>Элемент списка B</q-tree-item>
            <q-tree-item>Элемент списка C</q-tree-item>
          </template>
        </q-tree-item>
        <q-tree-item>Элемент списка 2</q-tree-item>
        <q-tree-item>Элемент списка 3</q-tree-item>
      </q-tree>
    </q-code-block>
    <br />

    <h2 id="examples">
      <router-link to="/components/tree-item?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="selected">
      <router-link to="/components/tree-item?id=selected">
        <span>Активный элемент списка (Selected)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>selected</code> для выбора элемента
      списка.
    </p>
    <q-code-block :value="selected">
      <q-tree>
        <q-tree-item selected>
          Элемент списка 1
          <template v-slot:children>
            <q-tree-item>Элемент списка A</q-tree-item>
            <q-tree-item>Элемент списка B</q-tree-item>
            <q-tree-item>Элемент списка C</q-tree-item>
          </template>
        </q-tree-item>
        <q-tree-item>Элемент списка 2</q-tree-item>
        <q-tree-item>Элемент списка 3</q-tree-item>
      </q-tree>
    </q-code-block>
    <br />
    <h3 id="tree-item">
      <router-link to="/components/tree-item?id=tree-item">
        <span>Вложенный элемент списка (Nested tree items)</span>
      </router-link>
    </h3>
    <p>
      Элемент дерева может содержать вложенные элементы дерева. Это позволяет
      пользователю разворачивать или сворачивать их.
    </p>
    <q-code-block :value="nestedTreeItems">
      <q-tree>
        <q-tree-item expanded>
          Элемент списка 1
          <template v-slot:children>
            <q-tree-item expanded>
              Элемент списка A
              <template v-slot:children>
                <q-tree-item>Элемент списка Z</q-tree-item>
                <q-tree-item>Элемент списка Y</q-tree-item>
                <q-tree-item>Элемент списка X</q-tree-item>
              </template>
            </q-tree-item>
            <q-tree-item>Элемент списка B</q-tree-item>
            <q-tree-item>Элемент списка C</q-tree-item>
          </template>
        </q-tree-item>
        <q-tree-item>Элемент списка 2</q-tree-item>
        <q-tree-item>Элемент списка 3</q-tree-item>
      </q-tree>
    </q-code-block>
    <br />
  </div>
</template>

<script>
import QHeadline from "@/blocks/Headline";
import { QCodeBlock } from "@/components/CodeBlock";
import { QTree, QTreeItem } from "@/components/Tree";

export default {
  name: "QTreeItemView",
  components: {
    QHeadline,
    QCodeBlock,
    QTree,
    QTreeItem,
  },
  data() {
    return {
      tree: `<q-tree>
  <q-tree-item>
    Элемент списка 1
    <template v-slot:children>
      <q-tree-item>Элемент списка A</q-tree-item>
      <q-tree-item>Элемент списка B</q-tree-item>
      <q-tree-item>Элемент списка C</q-tree-item>
    </template>
  </q-tree-item>
  <q-tree-item>Элемент списка 2</q-tree-item>
  <q-tree-item>Элемент списка 3</q-tree-item>
</q-tree>`,
      nestedTreeItems: `<q-tree>
  <q-tree-item expanded>
    Элемент списка 1
    <template v-slot:children>
      <q-tree-item expanded>
        Элемент списка A
        <template v-slot:children>
          <q-tree-item>Элемент списка Z</q-tree-item>
          <q-tree-item>Элемент списка Y</q-tree-item>
          <q-tree-item>Элемент списка X</q-tree-item>
        </template>
      </q-tree-item>
      <q-tree-item>Элемент списка B</q-tree-item>
      <q-tree-item>Элемент списка C</q-tree-item>
    </template>
  </q-tree-item>
  <q-tree-item>Элемент списка 2</q-tree-item>
  <q-tree-item>Элемент списка 3</q-tree-item>
</q-tree>`,
      selected: `<q-tree>
  <q-tree-item selected>
    Элемент списка 1
    <template v-slot:children>
      <q-tree-item>Элемент списка A</q-tree-item>
      <q-tree-item>Элемент списка B</q-tree-item>
      <q-tree-item>Элемент списка C</q-tree-item>
    </template>
  </q-tree-item>
  <q-tree-item>Элемент списка 2</q-tree-item>
  <q-tree-item>Элемент списка 3</q-tree-item>
</q-tree>`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
