<template>
  <div class="q-textarea" :class="classObject">
    <textarea
      id="input"
      ref="input"
      class="q-textarea__control"
      :name="name"
      :rows="rows"
      :value="computedValue"
      :required="required"
      :disabled="disabled"
      :readonly="readonly"
      :minlength="minlength"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :enterkeyhint="enterkeyhint"
      :spellcheck="spellcheck"
      :inputmode="inputmode"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "QTextarea",
  props: {
    name: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    minlength: {
      type: Number,
    },
    maxlength: {
      type: Number,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    rows: {
      type: Number,
      default: 4,
    },
    autocapitalize: {
      type: String,
      validator: (prop) =>
        ["off", "none", "on", "sentences", "words", "characters"].includes(
          prop
        ),
    },
    autocorrect: {
      type: String,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
    },
    enterkeyhint: {
      type: String,
      validator: (prop) =>
        ["enter", "done", "go", "next", "previous", "search", "send"].includes(
          prop
        ),
    },
    spellcheck: {
      type: Boolean,
      default: false,
    },
    inputmode: {
      type: String,
      validator: (prop) =>
        [
          "none",
          "text",
          "decimal",
          "numeric",
          "tel",
          "search",
          "search",
          "url",
        ].includes(prop),
    },
    size: {
      type: String,
      validator: (prop) => ["small", "medium", "large"].includes(prop),
      default: "medium",
    },
    filled: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: String,
      validator: (prop) => ["none", "vertical", "auto"].includes(prop),
      default: "vertical",
    },
  },
  data() {
    return {
      hasFocus: false,
      invalid: false,
      newValue: "",
    };
  },
  mounted() {
    this.invalid = !this.$refs.input.checkValidity();
  },
  watch: {
    disabled() {
      this.invalid = this.$refs.input.checkValidity();
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit("update:modelValue", value);
      },
    },
    classObject() {
      let classes = [
        {
          "q-textarea--small": this.size === "small",
          "q-textarea--medium": this.size === "medium",
          "q-textarea--large": this.size === "large",
          "q-textarea--standard": !this.filled,
          "q-textarea--filled": this.filled,
          "q-textarea--disabled": this.disabled,
          "q-textarea--focused": this.hasFocus,
          "q-textarea--empty": !this.computedValue,
          "q-textarea--invalid": this.invalid,
          "q-textarea--resize-none": this.resize === "none",
          "q-textarea--resize-vertical": this.resize === "vertical",
          "q-textarea--resize-auto": this.resize === "auto",
        },
      ];

      return classes;
    },
  },
  methods: {
    handleBlur() {
      this.hasFocus = false;
      this.$emit("blur");
    },
    handleFocus() {
      this.hasFocus = true;
      this.$emit("focus");
    },
    handleInput(event) {
      this.computedValue = event.target.value;
      this.invalid = !this.$refs.input.checkValidity();
      this.setTextareaHeight();
      this.$emit("input");
    },
    handleChange(event) {
      this.computedValue = event.target.value;
      this.invalid = !this.$refs.input.checkValidity();
      this.$emit("change");
    },
    setTextareaHeight() {
      if (this.resize === "auto") {
        this.$refs.input.style.height = "auto";
        this.$refs.input.style.height = `${this.$refs.input.scrollHeight}px`;
      }
    },
  },
};
</script>

<style lang="scss" src="./Textarea.styles.scss" scoped></style>
