<template>
  <div class="q-divider-view">
    <q-headline tag="<q-divider> | QDivider">Divider</q-headline>
    <h3>
      Разделители используются для визуального разделения или группировки
      элементов.
    </h3>
    <q-code-block :value="`<q-divider></q-divider>`">
      <q-divider></q-divider>
    </q-code-block>
    <br />
    <h2 id="examples">
      <router-link to="/components/divider?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="color">
      <router-link to="/components/divider?id=color">
        <span>Ширина (Width)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>width</code>, чтобы изменить ширину
      разделителя.
    </p>
    <q-code-block :value="width">
      <q-divider width="4px"></q-divider>
    </q-code-block>
    <br />
    <h3 id="width">
      <router-link to="/components/divider?id=width">
        <span>Цвет (Color)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>color</code>, чтобы задать цвет
      разделителя.
    </p>
    <q-code-block :value="color">
      <q-divider color="cornflowerblue"></q-divider>
    </q-code-block>
    <br />
    <h3 id="spacing">
      <router-link to="/components/divider?id=spacing">
        <span>Отступы (Spacing)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>spacing</code>, чтобы отступы сверху и
      снизу.
    </p>
    <q-code-block :value="spacing">
      <div style="text-align: center">
        Above
        <q-divider spacing="2rem"></q-divider>
        Below
      </div>
    </q-code-block>
    <br />
    <h3 id="orientation">
      <router-link to="/components/divider?id=orientation">
        <span>Ориентация (Orientation)</span>
      </router-link>
    </h3>
    <p>
      Используйте атрибут <code>orientation</code> с значением
      <code>vertical</code>, чтобы использовать разделитель в вертикальной
      ориентации или <code>horizontal</code>, чтобы использовать разделитель в
      горизонтальной ориентации.
    </p>
    <p>
      Разделитель будет охватывать всю высоту своего контейнера. Вертикальные
      разделители особенно хорошо работают внутри гибкого контейнера.
    </p>
    <q-code-block :value="orientation">
      <div style="display: flex; align-items: center; height: 2rem">
        First
        <q-divider orientation="vertical"></q-divider>
        Middle
        <q-divider orientation="vertical"></q-divider>
        Last
      </div>
    </q-code-block>
    <br />
    <h3 id="properties">
      <router-link to="/components/divider?id=properties">
        <span>Свойства (Properties)</span>
      </router-link>
    </h3>
    <q-grid>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <b>Название</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <b>Описание</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <b>Тип</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <b>Поумолчанию</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>width</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Ширина разделителя</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>-</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>color</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Цвет разделителя </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>-</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>spacing</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Отступы разделителя </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>-</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>orientation</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Ориентация разделителя </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'vertical'</code> <br />
          <code>'horizontal'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>horizontal</code>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>

<script>
import QHeadline from "@/blocks/Headline";
import { QDivider } from "@/components/Divider";
import { QCodeBlock } from "@/components/CodeBlock";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";

export default {
  name: "QDividerView",
  components: {
    QHeadline,
    QDivider,
    QCodeBlock,
    QGrid,
    QGridRow,
    QGridCol,
  },
  data() {
    return {
      width: `<q-divider width="4px"></q-divider>`,
      color: `<q-divider color="cornflowerblue"></q-divider>`,
      spacing: `<div style="text-align: center">
  Above
  <q-divider spacing="2rem"></q-divider>
  Below
</div>`,
      orientation: `<div style="display: flex; align-items: center; height: 2rem">
  First
  <q-divider orientation="vertical"></q-divider>
  Middle
  <q-divider orientation="vertical"></q-divider>
  Last
</div>`,
    };
  },
};
</script>

<style lang="scss"></style>
