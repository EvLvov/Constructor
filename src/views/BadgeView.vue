<template>
  <div class="q-badge-view">
    <q-headline tag="<q-badge> | QBadge">Badge</q-headline>
    <p>Badge используется для привлечения внимания и отображения статусов.</p>
    <q-code-block :value="`<q-badge>Badge</q-badge>`">
      <q-badge>Badge</q-badge>
    </q-code-block>
    <h2 id="examples">
      <router-link to="/components/badge?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="variants">
      <router-link to="/components/badge?id=variants">
        <span>Варианты (Variants)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>variant</code>, чтобы установить тему
      бейджа.
    </p>
    <q-code-block :value="variants">
      <q-badge variant="primary">Primary</q-badge>
      <q-badge variant="success">Success</q-badge>
      <q-badge variant="neutral">Neutral</q-badge>
      <q-badge variant="warning">Warning</q-badge>
      <q-badge variant="danger">Danger</q-badge>
    </q-code-block>

    <!-- Pill -->
    <h3 id="pill">
      <router-link to="/components/badge?id=pill">
        <span>Закругленные края (Pill)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>pill</code>, чтобы придать значкам
      закругленные края.
    </p>
    <q-code-block :value="pill">
      <q-badge variant="primary" pill>Primary</q-badge>
      <q-badge variant="success" pill>Success</q-badge>
      <q-badge variant="neutral" pill>Neutral</q-badge>
      <q-badge variant="warning" pill>Warning</q-badge>
      <q-badge variant="danger" pill>Danger</q-badge>
    </q-code-block>

    <!-- Pill -->
    <h3 id="pulsating-badges">
      <router-link to="/components/badge?id=pulsating-badges">
        <span>Пульсирующие бейджи (Pulsating Badges)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>pill</code>, чтобы придать значкам
      закругленные края.
    </p>
    <q-code-block :value="pulse">
      <q-badge variant="primary" pill pulse>1</q-badge>
      <q-badge variant="success" pill pulse>2</q-badge>
      <q-badge variant="neutral" pill pulse>3</q-badge>
      <q-badge variant="warning" pill pulse>4</q-badge>
      <q-badge variant="danger" pill pulse>5</q-badge>
    </q-code-block>
    <br />

    <h3 id="properties">
      <router-link to="/components/checkbox?id=properties">
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
          <code>variant</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Вариант представления бейджа</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'primary'</code> <br />
          <code>'success'</code><br />
          <code>'neutral'</code><br />
          <code>'warning'</code><br />
          <code>'danger'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'primary'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>pill</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Отображает бейдж с закругленными углами </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>pulse</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Дополнительная анимация бейджа </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
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
          <span>Контент</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QBadge } from "@/components/Badge";
import { QCodeBlock } from "@/components/CodeBlock";
import { QDivider } from "@/components/Divider";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
export default {
  name: "QBadgeView",
  components: {
    QHeadline,
    QBadge,
    QCodeBlock,
    QDivider,
    QGrid,
    QGridRow,
    QGridCol,
  },
  data() {
    return {
      variants: `<q-badge variant="primary">Primary</q-badge>
<q-badge variant="success">Success</q-badge>
<q-badge variant="neutral">Neutral</q-badge>
<q-badge variant="warning">Warning</q-badge>
<q-badge variant="danger">Danger</q-badge>`,
      pill: `<q-badge variant="primary" pill>Primary</q-badge>
<q-badge variant="success" pill>Success</q-badge>
<q-badge variant="neutral" pill>Neutral</q-badge>
<q-badge variant="warning" pill>Warning</q-badge>
<q-badge variant="danger" pill>Danger</q-badge>`,
      pulse: `<q-badge variant="primary" pulse pill>Primary</q-badge>
<q-badge variant="success" pulse pill>Success</q-badge>
<q-badge variant="neutral" pulse pill>Neutral</q-badge>
<q-badge variant="warning" pulse pill>Warning</q-badge>
<q-badge variant="danger" pulse pill>Danger</q-badge>`,
    };
  },
};
</script>

<style lang="scss" scoped>
.q-badge {
  margin-right: 0.5rem;
}
</style>
