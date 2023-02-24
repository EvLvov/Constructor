<template>
  <div class="q-code-editor" :class="classObject">
    <div class="q-code-editor__header" v-if="withHeader"></div>
    <div class="q-code-editor__area">
      <textarea
        v-if="
          readonly == true ? false : modelValue === undefined ? true : false
        "
        ref="textarea"
        :autofocus="autofocus"
        @input="calcContainerWidth"
        @keydown.tab.prevent.stop="handleTab"
        v-on:scroll="handleScroll"
        v-model="staticValue"
      ></textarea>
      <textarea
        v-if="
          readonly == true ? false : modelValue === undefined ? false : true
        "
        ref="textarea"
        :autofocus="autofocus"
        @keydown.tab.prevent.stop="handleTab"
        v-on:scroll="handleScroll"
        :value="modelValue"
        @input="
          $emit('update:modelValue', $event.target.value),
            calcContainerWidth($event)
        "
      ></textarea>
      <pre
        :style="{ width: containerWidth === 0 ? '' : containerWidth + 'px' }"
      >
          <code
              v-highlight="contentValue"
              :class="languageClass"
          >
        </code>
        </pre>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";

export default {
  name: "QCodeEditor",
  props: {
    modelValue: {
      type: String,
    },
    value: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    languages: {
      type: Array,
      default: function () {
        return [
          ["javascript", "JS"],
          ["cpp", "C++"],
          ["python", "Python"],
        ];
      },
    },
    wrapCode: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "default",
    },
  },
  directives: {
    highlight: {
      //vue2
      bind(el, binding) {
        el.textContent = binding.value;
        hljs.highlightElement(el);
      },
      componentUpdated(el, binding) {
        el.textContent = binding.value;
        hljs.highlightElement(el);
      },
      //vue3
      created(el, binding) {
        el.textContent = binding.value;
        hljs.highlightElement(el);
      },
      updated(el, binding) {
        el.textContent = binding.value;
        hljs.highlightElement(el);
      },
    },
  },
  data() {
    return {
      withHeader: false, // TODO: Вывести название текущего языка, реализовать поддержку нескольких языков
      containerWidth: 0,
      staticValue: this.value,
      content:
        this.modelValue === undefined ? this.staticValue : this.modelValue,
      languageClass: `hljs language-${this.languages[0][0]}`,
    };
  },
  watch: {
    value(value) {
      this.staticValue = value;
    },
  },
  computed: {
    contentValue() {
      return this.readonly
        ? this.value
        : this.modelValue === undefined
        ? this.staticValue + "\n"
        : this.modelValue + "\n";
    },
    classObject() {
      const classes = [
        {
          "q-code-editor--default": this.theme == "default",
          "q-code-editor--with-header": this.withHeader,
          "q-code-editor--wrap-code": this.wrapCode,
        },
      ];

      return classes;
    },
  },
  methods: {
    calcContainerWidth(event) {
      //  calculating the textarea's width while typing for syncing the width between textarea and highlight area
      this.containerWidth = event.target.clientWidth;
    },
    handleTab() {
      document.execCommand("insertText", false, "    ");
    },
    handleScroll(event) {
      this.top = -event.target.scrollTop;
      this.left = -event.target.scrollLeft;
    },
    resize() {
      // listen to the change of the textarea's width to resize the highlight area
      const resize = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const obj = entry.contentRect;
          this.containerWidth = obj.width + 40; // 40 is the padding
        }
      });
      // only the textarea is rendered the listener will run
      if (this.$refs.textarea) {
        resize.observe(this.$refs.textarea);
      }
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.content =
        this.modelValue === undefined ? this.staticValue : this.modelValue;
    });
    this.resize();
  },
  updated() {
    this.$emit("input", this.staticValue);
    this.$nextTick(function () {
      this.content =
        this.modelValue === undefined ? this.staticValue : this.modelValue;
    });
  },
};
</script>

<style src="./CodeEditor.styles.scss" lang="scss" scoped></style>
