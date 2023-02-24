<template>
  <div class="q-checkbox-view">
    <q-headline tag="<q-checkbox> | QCheckbox">Checkbox</q-headline>
    <p>
      Флажок - элемент графического пользовательского интерфейса, позволяющий
      пользователю управлять параметром с двумя состояниями — ☑ включено и ☐
      отключено.
    </p>
    <q-checkbox>Checkbox</q-checkbox>
    <h2 id="examples">
      <router-link to="/components/checkbox?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>

    <h3 id="checked">
      <router-link to="/components/checkbox?id=checked">
        <span>Включено (Checked)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>checked</code>, чтобы активировать
      checkbox
    </p>
    <q-code-block :value="checked">
      <q-checkbox checked>Checked</q-checkbox>
    </q-code-block>
    <br />

    <!-- Indeterminate -->
    <h3 id="indeterminate">
      <router-link to="/components/checkbox?id=indeterminate">
        <span>Неопределенный (Indeterminate)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>indeterminate</code>, чтобы сделать
      флажок неопреденным.
    </p>
    <q-code-block :value="indeterminate">
      <q-checkbox indeterminate>Checked</q-checkbox>
    </q-code-block>
    <br />

    <!-- Disabled -->
    <h3 id="disabled">
      <router-link to="/components/checkbox?id=disabled">
        <span>Неактивный (Disabled)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>disabled</code> для блокировки доступа
      и изменения поля.
    </p>
    <q-code-block :value="disabled">
      <q-checkbox disabled>Disabled</q-checkbox>
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
          <code>name</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          Name of the HTML form control. Submitted with the form as part of a
          name/value pair.
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
          <code>value</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Value of the HTML form control. Primarily used to differentiate a
            list of related checkboxes that have the same name.
          </span>
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
          <code>disabled</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Отключает возможность ввода </span>
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
          <code>required</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Устанавливает checkbox'у обязательность заполнения. </span>
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
          <code>checked</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Устанавливает checkbox'у отмеченное состояние. </span>
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
          <code>indeterminate</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Устанавливает checkbox'у неопределенное состояние. </span>
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

    <h3 id="events">
      <router-link to="/components/checkbox?id=events">
        <span>События (Events)</span>
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
          <code>click</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Имитирует щелчок по checkbox'у. </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 4 }"> </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>focus</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Устанавливает focus на checkbox. </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 4 }"> </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>blur</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Снимает focus c checkbox'а. </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 4 }"> </q-grid-col>
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
          <span>Метка checkbox'а</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QCheckbox } from "@/components/Checkbox";
import { QCodeBlock } from "@/components/CodeBlock";
import { QDivider } from "@/components/Divider";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
export default {
  name: "QCheckboxView",
  components: {
    QHeadline,
    QCheckbox,
    QCodeBlock,
    QDivider,
    QGrid,
    QGridRow,
    QGridCol,
  },
  data() {
    return {
      checked: `<q-checkbox checked>Checked</q-checkbox>`,
      indeterminate: `<q-checkbox indeterminate>Checked</q-checkbox>`,
      disabled: `<q-checkbox disabled>Disabled</q-checkbox>`,
    };
  },
};
</script>
