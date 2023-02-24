<template>
  <div class="q-button-group-view">
    <q-headline tag="<q-button-group> | QButtonGroup">Button Group</q-headline>
    <h3>
      Группы кнопок можно использовать для группировки связанных кнопок в
      разделы.
    </h3>
    <q-code-block :value="buttonGroup">
      <q-button-group>
        <q-button>Left</q-button>
        <q-button>Center</q-button>
        <q-button>Right</q-button>
      </q-button-group>
    </q-code-block>
    <br />
    <h2 id="examples">
      <router-link to="/components/button-group?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="sizes">
      <router-link to="/components/button-group?id=sizes">
        <span>Размеры (Sizes)</span>
      </router-link>
    </h3>
    <p>
      Поддерживаются все размеры кнопок, но избегайте смешивания размеров в
      одной группе кнопок.
    </p>
    <q-code-block :value="sizes">
      <q-button-group>
        <q-button size="small">Left</q-button>
        <q-button size="small">Center</q-button>
        <q-button size="small">Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button size="medium">Left</q-button>
        <q-button size="medium">Center</q-button>
        <q-button size="medium">Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button size="large">Left</q-button>
        <q-button size="large">Center</q-button>
        <q-button size="large">Right</q-button>
      </q-button-group>
    </q-code-block>
    <br />
    <h3 id="themes">
      <router-link to="/components/button-group?id=themes">
        <span>Темы (Theme)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>variant</code> для кнопки, чтобы
      установить тему.
    </p>
    <q-code-block :value="variants">
      <q-button-group>
        <q-button variant="primary">Left</q-button>
        <q-button variant="primary">Center</q-button>
        <q-button variant="primary">Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button variant="success">Left</q-button>
        <q-button variant="success">Center</q-button>
        <q-button variant="success">Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button variant="neutral">Left</q-button>
        <q-button variant="neutral">Center</q-button>
        <q-button variant="neutral">Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button variant="warning">Left</q-button>
        <q-button variant="warning">Center</q-button>
        <q-button variant="warning">Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button variant="danger">Left</q-button>
        <q-button variant="danger">Center</q-button>
        <q-button variant="danger">Right</q-button>
      </q-button-group>
    </q-code-block>
    <br />
    <h3 id="pill">
      <router-link to="/components/button-group?id=pill">
        <span>Группа кнопок с закругленными углами (Pill)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>pill</code> для кнопки, чтобы
      установить закругление углов для группы.
    </p>
    <q-code-block :value="pill">
      <q-button-group>
        <q-button size="small" pill>Left</q-button>
        <q-button size="small" pill>Center</q-button>
        <q-button size="small" pill>Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button size="medium" pill>Left</q-button>
        <q-button size="medium" pill>Center</q-button>
        <q-button size="medium" pill>Right</q-button>
      </q-button-group>

      <br />

      <q-button-group>
        <q-button size="large" pill>Left</q-button>
        <q-button size="large" pill>Center</q-button>
        <q-button size="large" pill>Right</q-button>
      </q-button-group>
    </q-code-block>
    <br />
    <h3 id="dropdown">
      <router-link to="/components/button-group?id=dropdown">
        <span>Группа кнопок с выпадающим меню (Dropdowns)</span>
      </router-link>
    </h3>
    <p>Выпадающие списки можно размещать внутри групп кнопок.</p>
    <q-code-block :value="dropdown">
      <q-button-group>
        <q-button>Button</q-button>
        <q-button>Button</q-button>
        <!-- TODO: <q-dropdown>
          <q-button qot="trigger" caret>Dropdown</q-button>
          <q-menu>
            <q-menu-item>Item 1</q-menu-item>
            <q-menu-item>Item 2</q-menu-item>
            <q-menu-item>Item 3</q-menu-item>
          </q-menu>
        </q-dropdown> -->
      </q-button-group>
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
          <span>Список кнопок</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QCodeBlock } from "@/components/CodeBlock";
import { QButton } from "@/components/Button";
import { QButtonGroup } from "@/components/ButtonGroup";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";

export default {
  name: "ButtonGroupView",
  components: {
    QHeadline,
    QButton,
    QButtonGroup,
    QCodeBlock,
    QGrid,
    QGridRow,
    QGridCol,
  },
  data() {
    return {
      buttonGroup: `<q-button-group>
  <q-button>Left</q-button>
  <q-button>Center</q-button>
  <q-button>Right</q-button>
</q-button-group>`,
      sizes: `<q-button-group>
  <q-button size="small">Left</q-button>
  <q-button size="small">Center</q-button>
  <q-button size="small">Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button size="medium">Left</q-button>
  <q-button size="medium">Center</q-button>
  <q-button size="medium">Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button size="large">Left</q-button>
  <q-button size="large">Center</q-button>
  <q-button size="large">Right</q-button>
</q-button-group>
</q-code-block>`,
      variants: `<q-button-group>
  <q-button variant="primary">Left</q-button>
  <q-button variant="primary">Center</q-button>
  <q-button variant="primary">Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button variant="success">Left</q-button>
  <q-button variant="success">Center</q-button>
  <q-button variant="success">Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button variant="neutral">Left</q-button>
  <q-button variant="neutral">Center</q-button>
  <q-button variant="neutral">Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button variant="warning">Left</q-button>
  <q-button variant="warning">Center</q-button>
  <q-button variant="warning">Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button variant="danger">Left</q-button>
  <q-button variant="danger">Center</q-button>
  <q-button variant="danger">Right</q-button>
</q-button-group>`,
      pill: `<q-button-group>
  <q-button size="small" pill>Left</q-button>
  <q-button size="small" pill>Center</q-button>
  <q-button size="small" pill>Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button size="medium" pill>Left</q-button>
  <q-button size="medium" pill>Center</q-button>
  <q-button size="medium" pill>Right</q-button>
</q-button-group>

<br />

<q-button-group>
  <q-button size="large" pill>Left</q-button>
  <q-button size="large" pill>Center</q-button>
  <q-button size="large" pill>Right</q-button>
</q-button-group>`,
      dropdown: `<q-button-group>
  <q-button>Button</q-button>
  <q-button>Button</q-button>
  <q-dropdown>
    <q-button qot="trigger" caret>Dropdown</q-button>
    <q-menu>
      <q-menu-item>Item 1</q-menu-item>
      <q-menu-item>Item 2</q-menu-item>
      <q-menu-item>Item 3</q-menu-item>
    </q-menu>
  </q-dropdown>
</q-button-group>`,
    };
  },
};
</script>

<style lang="scss"></style>
