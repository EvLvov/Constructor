<template>
  <div class="input-view">
    <q-headline tag="<q-input> | QInput">Input</q-headline>
    <p>Поле ввода данных пользователя</p>
    <q-code-block value="<q-input></q-input>">
      <q-input></q-input>
    </q-code-block>
    <h2 id="examples">
      <router-link to="/components/input?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="placeholders">
      <router-link to="/components/input?id=placeholders">
        <span>Метки (Placeholders)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>placeholder</code> для добавления
      метки.
    </p>
    <q-code-block value='<q-input placeholder="Type something"></q-input>'>
      <q-input placeholder="Type something"></q-input>
    </q-code-block>
    <h3 id="clearable">
      <router-link to="/components/input?id=clearable">
        <span>Очистка содержимого (Clearable)</span>
      </router-link>
    </h3>
    <p>
      Для добавления кнопки очистки содержимого поля ввода небоходимо добавить
      входной параметр <code>clearable</code>. содержимое.
    </p>
    <q-code-block value='<q-input placeholder="Clearable"></q-input>'>
      <q-input placeholder="Clearable" clearable></q-input>
    </q-code-block>

    <!-- Password Toggle -->
    <h3 id="toggle-password">
      <router-link to="/components/input?id=toggle-password">
        <span>Пароль (Toggle Password)</span>
      </router-link>
    </h3>
    <p>
      Добавьте входной параметр <code>password-toggle</code> чтобы добавить
      кнопку-переключатель отображения вводимого пароля
    </p>
    <q-code-block :value="passwordToggleView">
      <q-input
        type="password"
        placeholder="Password Toggle"
        password-toggle
      ></q-input>
    </q-code-block>

    <!-- Filled Inputs -->
    <h3 id="filled-inputs">
      <router-link to="/components/input?id=filled-inputs">
        <span>Filled Inputs</span>
      </router-link>
    </h3>
    <p>
      Добавьте входной параметр <code>filled</code> чтобы добавить фон полю
      ввода.
    </p>
    <q-code-block :value="filledInputsView">
      <q-input placeholder="Type something" filled></q-input>
    </q-code-block>

    <!-- Pill -->
    <h3 id="pill">
      <router-link to="/components/input?id=pill">
        <span>Таблетка (Pill)</span>
      </router-link>
    </h3>
    <p>Добавьте входной параметр <code>pill</code> для закругления углов.</p>
    <q-code-block :value="pillView">
      <q-input placeholder="Type something" pill></q-input>
    </q-code-block>

    <!-- Input Types -->
    <h3 id="input-types">
      <router-link to="/components/input?id=input-types">
        <span>Типы полей ввода (Input Types)</span>
      </router-link>
    </h3>
    <p>Добавьте входной параметр <code>type</code> для указания типа ввода.</p>
    <q-code-block :value="inputTypesView">
      <q-input type="email" placeholder="Email"></q-input>
      <q-input type="number" placeholder="Number"></q-input>
      <q-input type="date" placeholder="Date"></q-input>
    </q-code-block>

    <!-- Disabled -->
    <h3 id="disabled">
      <router-link to="/components/input?id=disabled">
        <span>Блокировка ввода (Disabled)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>disabled</code> для блокировки доступа
      и изменения поля.
    </p>
    <q-code-block :value="inputTypesView">
      <q-input placeholder="Disabled" disabled></q-input>
    </q-code-block>

    <!-- Sizes -->
    <h3 id="sizes">
      <router-link to="/components/input?id=sizes">
        <span>Размеры (Sizes)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>size</code> чтобы изменить размер поля
      ввода.
    </p>
    <q-code-block :value="sizesView">
      <q-input placeholder="Small" size="small"></q-input>
      <q-input placeholder="Medium" size="medium"></q-input>
      <q-input placeholder="Large" size="large"></q-input>
    </q-code-block>

    <!-- Prefix & Suffix Icons -->
    <h3 id="prefix-amp-suffix-icons">
      <router-link to="/components/input?id=prefix-amp-suffix-icons">
        <span>Префиксы и суффиксы (Prefix & Suffix)</span>
      </router-link>
    </h3>
    <p>
      Используйте слоты <code>prefix</code> и <code>suffix</code> для добавления
      иконок или текста.
    </p>
    <q-code-block :value="sizesView">
      <q-input placeholder="Medium" size="medium">
        <template v-slot:prefix>
          <q-icon name="house"></q-icon>
        </template>
        <template v-slot:suffix>
          <q-icon name="chat"></q-icon>
        </template>
      </q-input>
    </q-code-block>
  </div>
</template>
<script>
import { QCodeBlock } from "@/components/CodeBlock";
import { QInput } from "@/components/Input";
import { QIcon } from "@/components/Icon";
import QHeadline from "@/blocks/Headline.vue";

export default {
  name: "InputView",
  components: {
    QInput,
    QIcon,
    QHeadline,
    QCodeBlock,
  },
  data() {
    return {
      passwordToggleView: `<q-input
  type="password"
  placeholder="Password Toggle"
  password-toggle
></q-input>`,
      filledInputsView: `<q-input placeholder="Type something" filled></q-input>`,
      pillView: `<q-input placeholder="Type something" pill></q-input>`,
      inputTypesView: `<q-input type="email" placeholder="Email"></q-input>
<q-input type="number" placeholder="Number"></q-input>
<q-input type="date" placeholder="Date"></q-input>`,
      sizesView: `<q-input placeholder="Small" size="small"></q-input>
<q-input placeholder="Medium" size="medium"></q-input>
<q-input placeholder="Large" size="large"></q-input>`,
    };
  },
};
</script>
