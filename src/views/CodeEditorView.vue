<template>
  <div class="code-editor-view">
    <q-headline tag="<q-code-editor> | QCodeEditor">CodeEditor</q-headline>
    <p>Простой редактор кода</p>
    <q-code-editor value="console.log(13)" wrapCode readonly></q-code-editor>

    <h2 id="examples">
      <router-link to="/components/code-editor?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>

    <h3 id="readonly">
      <router-link to="/components/input?id=readonly">
        <span>Только чтение (readonly)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>readonly</code> если вы хотите закрыть
      возможность редактирования.
    </p>
    <p>
      <q-code-editor value="console.log(13)" readonly></q-code-editor>
    </p>
    <q-code-editor
      :value="readonlySectionCode"
      :languages="[['html'], ['xml']]"
      :readonly="true"
    ></q-code-editor>

    <h3 id="languages">
      <router-link to="/components/input?id=languages">
        <span>Язык (Languages)</span>
      </router-link>
    </h3>
    <p>
      Это свойство представляет собой двумерный массив, первый элемент каждого
      дочернего элемента является индексом языка и является обязательным, второй
      элемент каждого дочернего элемента используется для отображения, что
      обеспечивает лучший пользовательский опыт чтения.
    </p>
    <q-code-editor
      :value="languagesSectionText"
      :languages="[['html']]"
    ></q-code-editor>
    <p>
      <q-code-editor
        :value="languagesSectionCode"
        :languages="[['html'], ['xml']]"
      ></q-code-editor>
    </p>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline.vue";
import { QCodeEditor } from "@/components/CodeEditor";
export default {
  name: "CodeEditorView",
  components: {
    QHeadline,
    QCodeEditor,
  },
  data() {
    return {
      readonlySectionCode: `<q-code-editor value='console.log(13)' readonly></q-code-editor>`,
      languagesSectionCode: `<q-code-editor :value="<div class='lang'>Languages</div>" :languages="[['html']]"></q-code-editor>`,
      languagesSectionText: `<div class="lang">Languages</div>`,
    };
  },
};
</script>
