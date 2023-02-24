<template>
  <div ref="input" class="q-input" :class="classObject">
    <div class="q-input__prefix">
      <slot name="prefix"></slot>
    </div>
    <input
      class="q-input__control"
      :name="name"
      :type="type === 'password' && isPasswordVisible ? 'text' : type"
      :value="computedValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :minlength="minlength"
      :maxlength="maxlength"
      :min="min"
      :max="max"
      :autofocus="autofocus"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <button
      class="q-input__clear"
      type="button"
      v-if="hasClearIcon"
      @click="handleClearClick"
    >
      <slot name="clear-icon">
        <q-icon name="clear"></q-icon>
      </slot>
    </button>
    <button
      class="q-input__password-toggle"
      type="button"
      @click="handlePasswordToggle"
      v-if="togglePassword && !disabled"
    >
      <slot name="show-password-icon" v-if="isPasswordVisible">
        <q-icon name="visibility_off"></q-icon>
      </slot>
      <slot name="hide-password-icon" v-else>
        <q-icon name="visibility"></q-icon>
      </slot>
    </button>
    <div class="q-input__suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script>
import { QIcon } from "@/components/Icon";

export default {
  name: "QInput",
  components: {
    QIcon,
  },
  props: {
    type: {
      type: String,
      default: "text",
      validator: (prop) =>
        [
          "date",
          "email",
          "number",
          "password",
          "search",
          "tel",
          "text",
          "time",
          "url",
        ].includes(prop),
    },
    size: {
      type: String,
      validator: (prop) => ["small", "medium", "large"].includes(prop),
      default: "medium",
    },
    name: String,
    modelValue: [Number, String],
    filled: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    label: String,
    helpText: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    togglePassword: {
      type: Boolean,
      default: false,
    },
    noSpinButtons: {
      type: Boolean,
      default: false,
    },
    placeholder: String,
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
    min: Number,
    max: Number,
    step: Number,
    pattern: String,
    required: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    autocapitalize: {
      type: String,
      validator: (prop) =>
        ["off", "none", "on", "sentences", "words", "characters"].includes(
          prop
        ),
    },
    autocorrect: String,
    autocomplete: String,
    autofocus: Boolean,
    enterkeyhint: {
      type: String,
      validator: (prop) =>
        ["enter", "done", "go", "next", "previous", "search", "send"].includes(
          prop
        ),
    },
    spellcheck: Boolean,
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
          "email",
          "url",
        ].includes(prop),
    },
    // TODO: Loading
    loading: Boolean,
  },
  data() {
    return {
      newValue: this.modelValue,
      hasFocus: false,
      hasClearIcon: this.clearable && !this.disabled && !this.readonly,
      isPasswordVisible: false,
    };
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
          // Sizes
          "q-input--small": this.size === "small",
          "q-input--medium": this.size === "medium",
          "q-input--large": this.size === "large",
          // States
          "q-input--pill": this.pill,
          "q-input--standard": !this.filled,
          "q-input--filled": this.filled,
          "q-input--disabled": this.disabled,
          "q-input--focused": this.hasFocus,
          "q-input--empty": !this.computedValue,
          "q-input--invalid": this.invalid,
          "q-input--no-spin-buttons": this.noSpinButtons,
          // "input--is-firefox": isFirefox,
        },
      ];

      return classes;
    },
  },
  watch: {
    value(value) {
      this.newValue = value;
      console.log(this.newValue);
    },
  },
  methods: {
    handleFocus(event) {
      this.hasFocus = true;
      this.$emit("focus", event);
    },
    handleBlur(event) {
      this.hasFocus = false;
      this.$emit("blur", event);
    },
    handleInput(event) {
      const value = event.target.value;
      this.updateValue(value);
    },
    handleChange(event) {
      const value = event.target.value;
      this.updateValue(value);
    },
    handleClearClick(event) {
      this.updateValue("");

      event.stopPropagation();
    },
    handlePasswordToggle() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    updateValue(value) {
      this.computedValue = value;
    },
  },
};
</script>

<style lang="scss" src="./Input.styles.scss" scoped></style>
