<template>
  <div class="q-tree-view">
    <q-headline tag="<q-tree> | QTree">Tree</q-headline>
    <h3>
      Деревья позволяют отображать иерархический список доступных для выбора
      элементов дерева. Элементы с дочерними элементами могут быть развернуты и
      свернуты.
    </h3>
    <q-code-block :value="tree">
      <q-tree>
        <q-tree-item>
          Deciduous
          <template v-slot:children>
            <q-tree-item>Birch</q-tree-item>
            <q-tree-item>
              Maple
              <template v-slot:children>
                <q-tree-item>Field maple</q-tree-item>
                <q-tree-item>Red maple</q-tree-item>
                <q-tree-item>Sugar maple</q-tree-item>
              </template>
            </q-tree-item>
            <q-tree-item>Oak</q-tree-item>
          </template>
        </q-tree-item>

        <q-tree-item>
          Coniferous
          <template v-slot:children>
            <q-tree-item>Cedar</q-tree-item>
            <q-tree-item>Pine</q-tree-item>
            <q-tree-item>Spruce</q-tree-item>
          </template>
        </q-tree-item>

        <q-tree-item>
          Non-trees
          <template v-slot:children>
            <q-tree-item>Bamboo</q-tree-item>
            <q-tree-item>Cactus</q-tree-item>
            <q-tree-item>Fern</q-tree-item>
          </template>
        </q-tree-item>
      </q-tree>
    </q-code-block>
    <br />
    <h2 id="examples">
      <router-link to="/components/tree?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="selection">
      <router-link to="/components/tree?id=selection">
        <span>Режимы (Selection Modes)</span>
      </router-link>
    </h3>
    <p>
      Входной параметр <code>selection</code> позволяет изменить поведение
      выбора дерева.
    </p>
    <ul>
      <li>
        Используйте single, чтобы разрешить выбор одного элемента (по
        умолчанию).
      </li>
      <li>
        Используйте несколько, чтобы разрешить выбор нескольких элементов.
      </li>
      <li>Используйте leaf, чтобы разрешить выбор только конечных узлов.</li>
    </ul>
    <!-- TODO: Select -->
    <q-code-block :value="tree">
      <q-select value="single" style="width: 100%">
        <template v-slot:label>Selection</template>
        <q-menu-item value="single">Single</q-menu-item>
        <q-menu-item value="multiple">Multiple</q-menu-item>
        <q-menu-item value="leaf">Leaf</q-menu-item>
      </q-select>

      <br />

      <q-tree>
        <q-tree-item>
          Элемент списка 1
          <template v-slot:children>
            <q-tree-item>
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
  </div>
</template>

<script>
import QHeadline from "@/blocks/Headline";
import { QCodeBlock } from "@/components/CodeBlock";
import { QTree, QTreeItem } from "@/components/Tree";
import { QSelect } from "@/components/Select";
import { QMenuItem } from "@/components/Menu";

export default {
  name: "QTreeView",
  components: {
    QHeadline,
    QCodeBlock,
    QTree,
    QTreeItem,
    QSelect,
    QMenuItem,
  },
  data() {
    return {
      tree: `<q-tree>
  <q-tree-item>
    Deciduous
    <template v-slot:children>
      <q-tree-item>Birch</q-tree-item>
      <q-tree-item>
        Maple
        <template v-slot:children>
          <q-tree-item>Field maple</q-tree-item>
          <q-tree-item>Red maple</q-tree-item>
          <q-tree-item>Sugar maple</q-tree-item>
        </template>
      </q-tree-item>
      <q-tree-item>Oak</q-tree-item>
    </template>
  </q-tree-item>

  <q-tree-item>
    Coniferous
    <template v-slot:children>
      <q-tree-item>Cedar</q-tree-item>
      <q-tree-item>Pine</q-tree-item>
      <q-tree-item>Spruce</q-tree-item>
    </template>
  </q-tree-item>

  <q-tree-item>
    Non-trees
    <template v-slot:children>
      <q-tree-item>Bamboo</q-tree-item>
      <q-tree-item>Cactus</q-tree-item>
      <q-tree-item>Fern</q-tree-item>
    </template>
  </q-tree-item>
</q-tree>`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
