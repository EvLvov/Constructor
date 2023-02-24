<template>
  <label class="q-checkbox" :class="classObject">
    <input
      class="q-checkbox__input"
      ref="input"
      type="checkbox"
      v-model="computedValue"
      :name="name"
      :value="value"
      :indeterminate="hasIndeterminate"
      :checked="hasChecked"
      :disabled="disabled"
      :required="required"
      @click="handleClick"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <span class="q-checkbox__control">
      <svg v-if="hasChecked" class="q-checkbox__icon" viewBox="0 0 16 16">
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
        >
          <g stroke="currentColor" stroke-width="2">
            <g transform="translate(3.428571, 3.428571)">
              <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
              <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
            </g>
          </g>
        </g>
      </svg>
      <svg
        v-else-if="!hasChecked && hasIndeterminate"
        class="q-checkbox__icon"
        viewBox="0 0 16 16"
      >
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
        >
          <g stroke="currentColor" stroke-width="2">
            <g transform="translate(2.285714, 6.857143)">
              <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
            </g>
          </g>
        </g>
      </svg>
    </span>
    <span v-if="$slots.default" class="q-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>
<script>
import formElementMixin from "@/utilites/form-element.mixin";

export default {
  name: "QCheckbox",
  mixins: [formElementMixin],
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasChecked: this.checked,
      hasIndeterminate: this.indeterminate,
      hasFocus: false,
    };
  },
  watch: {
    checked() {
      this.computedValue = this.hasChecked;
    },
  },
  computed: {
    classObject() {
      let classes = [
        {
          "q-checkbox--checked": this.hasChecked,
          "q-checkbox--disabled": this.disabled,
          "q-checkbox--focused": this.hasFocus,
          "q-checkbox--indeterminate": this.indeterminate,
        },
      ];

      return classes;
    },
  },
  methods: {
    handleFocus() {
      this.hasFocus = true;
      this.$emit("focus");
    },
    handleClick() {
      this.hasChecked = !this.hasChecked;
      this.hasIndeterminate = false;
      this.$emit("change");
    },
    handleBlur() {
      this.hasFocus = false;
      this.$emit("blur");
    },
  },
};
</script>

<style src="./Checkbox.styles.scss" lang="scss"></style>
