<template>
  <div class="q-menu-view">
    <q-headline tag="<q-menu> | QMenu">Menu</q-headline>
    <h3>
      Меню предоставляют список опций, из которых пользователь может выбирать.
    </h3>
    <p>
      Для составления меню можно использовать пункты меню, метки меню и
      разделители. Меню поддерживают взаимодействие с клавиатурой, включая тип
      для выбора параметра.
    </p>
    <q-code-block :value="menu">
      <q-menu style="max-width: 200px">
        <q-menu-item value="undo">Undo</q-menu-item>
        <q-menu-item value="redo">Redo</q-menu-item>
        <q-divider></q-divider>
        <q-menu-item value="cut">Cut</q-menu-item>
        <q-menu-item value="copy">Copy</q-menu-item>
        <q-menu-item value="paste">Paste</q-menu-item>
        <q-menu-item value="delete">Delete</q-menu-item>
      </q-menu>
    </q-code-block>
    <br />
    <h3 id="slots">
      <router-link to="/components/checkbox?id=slots">
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
          <span>
            Содержимое меню, включая пункты меню, метки меню и разделители.
          </span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QMenu, QMenuItem } from "@/components/Menu";
import { QCodeBlock } from "@/components/CodeBlock";
// import { QIcon } from "@/components/Icon";
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
  },
  data() {
    return {
      menu: `<q-menu style="max-width: 200px">
  <q-menu-item value="undo">Undo</q-menu-item>
  <q-menu-item value="redo">Redo</q-menu-item>
  <q-divider></q-divider>
  <q-menu-item value="cut">Cut</q-menu-item>
  <q-menu-item value="copy">Copy</q-menu-item>
  <q-menu-item value="paste">Paste</q-menu-item>
  <q-menu-item value="delete">Delete</q-menu-item>
</q-menu>`,
    };
  },
};
</script>
