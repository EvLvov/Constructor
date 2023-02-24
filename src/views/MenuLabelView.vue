<template>
  <div class="q-menu-label-view">
    <q-headline tag="<q-menu-label> | QMenuLabel">Menu Label</q-headline>
    <h3>Лейблы меню используются для описания группы пунктов меню.</h3>
    <q-code-block :value="menu">
      <q-menu style="max-width: 200px">
        <q-menu-label>Fruits</q-menu-label>
        <q-menu-item value="apple">Apple</q-menu-item>
        <q-menu-item value="banana">Banana</q-menu-item>
        <q-menu-item value="orange">Orange</q-menu-item>
        <q-divider></q-divider>
        <q-menu-label>Vegetables</q-menu-label>
        <q-menu-item value="broccoli">Broccoli</q-menu-item>
        <q-menu-item value="carrot">Carrot</q-menu-item>
        <q-menu-item value="zucchini">Zucchini</q-menu-item>
      </q-menu>
    </q-code-block>
    <br />
    <h3 id="menu-label">
      <router-link to="/components/menu-label?id=slots">
        <span>Слоты (Slots)</span>
      </router-link>
    </h3>
    <q-grid>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <b>Название</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <b>Описание</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <span>default</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span> Контент лейбла </span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QMenu, QMenuItem, QMenuLabel } from "@/components/Menu";
import { QCodeBlock } from "@/components/CodeBlock";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
import { QDivider } from "@/components/Divider";

export default {
  name: "QAvatarView",
  components: {
    QHeadline,
    QCodeBlock,
    QGrid,
    QGridRow,
    QGridCol,
    QDivider,
    QMenu,
    QMenuItem,
    QMenuLabel,
  },
  data() {
    return {
      menu: `<q-menu style="max-width: 200px">
  <q-menu-label>Fruits</q-menu-label>
  <q-menu-item value="apple">Apple</q-menu-item>
  <q-menu-item value="banana">Banana</q-menu-item>
  <q-menu-item value="orange">Orange</q-menu-item>
  <q-divider></q-divider>
  <q-menu-label>Vegetables</q-menu-label>
  <q-menu-item value="broccoli">Broccoli</q-menu-item>
  <q-menu-item value="carrot">Carrot</q-menu-item>
  <q-menu-item value="zucchini">Zucchini</q-menu-item>
</q-menu>`,
    };
  },
};
</script>
