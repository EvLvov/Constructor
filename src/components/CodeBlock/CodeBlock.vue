<template>
  <div class="q-code-block">
    <div class="q-code-block__preview">
      <slot></slot>
    </div>
    <div class="q-code-block__source">
      <q-code-editor
        :value="value"
        :languages="[['html'], ['xml']]"
        wrapCode
        readonly
      ></q-code-editor>
    </div>
  </div>
</template>
<script>
import { QCodeEditor } from "@/components/CodeEditor";
export default {
  name: "QCodeBlock",
  components: {
    QCodeEditor,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style src="./CodeBlock.styles.scss" lang="scss" scoped></style>
