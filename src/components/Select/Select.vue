<template>
  <q-form-field :size="size">
    <template v-slot:label v-if="$slots.label"></template>
    <q-dropdown
      class="q-select__dropdown"
      :hoist="hoist"
      :placement="placement"
      :stayOpenOnSelect="multiple"
      :disabled="disabled"
      :class="classObject"
    >
      <template v-slot:trigger>
        <div class="q-select__control" @blur="handleBlur" @focus="handleFocus">
          <span class="q-select__prefix">
            <slot name="prefix"></slot>
          </span>
          <div class="q-select__label">
            <span class="q-select__tags" v-if="displayTags.length > 0">
              {{ displayTags }}
            </span>
            <template v-else-if="displayLabel.length > 0">
              {{ displayLabel }}
            </template>
            <template v-else>
              {{ placeholder }}
            </template>
          </div>
          <button
            v-if="hasClearIcon"
            class="q-select__clear"
            @click="handleClearClick"
          >
            <slot name="clear-icon">
              <q-icon name="x-circle-fill" library="system"></q-icon>
            </slot>
          </button>
          <span class="q-select__suffix">
            <slot name="suffix"></slot>
          </span>
          <span class="q-select__icon">
            <q-icon name="chevron-down" library="system"></q-icon>
          </span>

          <!-- TODO: Add to .q-select__hidden-select focus event -->
          <input
            class="q-select__hidden-select"
            required="required"
            :value="hasSelection ? '1' : ''"
          />
        </div>
      </template>
      <q-menu class="q-select__menu" @select="handleMenuSelect">
        <slot></slot>
      </q-menu>
    </q-dropdown>
    <template v-slot:helpText v-if="$slots.helpText"></template>
  </q-form-field>
</template>
<script>
import { QFormField } from "@/components/FormField";
import { QDropdown } from "@/components/Dropdown";
import { QMenu } from "@/components/Menu";
import { QIcon } from "@/components/Icon";

export default {
  name: "QSelect",
  components: {
    QFormField,
    QDropdown,
    QMenu,
    QIcon,
  },
  props: {
    /** Enables multi select. With this enabled, value will be an array. */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the
     * number of additional items that are selected. Set to -1 to remove the limit.
     */
    maxTagsVisible: {
      type: Number,
      default: 3,
    },
    /** Disables the select control. */
    disabled: {
      type: Boolean,
      default: false,
    },
    /** The select's name. */
    name: {
      type: String,
      default: "",
    },
    /** The select's placeholder text. */
    placeholder: {
      type: String,
      default: "",
    },
    /** The select's size. */
    size: {
      type: String,
      default: "medium",
      validator: (prop) => ["small", "medium", "large"].includes(prop),
    },
    /**
     * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`.
     */
    hoist: {
      type: Boolean,
      default: false,
    },
    /** The value of the control. This will be a string or an array depending on `multiple`. */
    value: {
      type: String,
      default: "",
    },
    /** Draws a filled select. */
    filled: {
      type: Boolean,
      default: false,
    },
    /** Draws a pill-style select with rounded edges. */
    pill: {
      type: Boolean,
      default: false,
    },
    /** The select's label. If you need to display HTML, you can use the `label` slot instead. */
    label: {
      type: String,
      default: "",
    },
    /**
     * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the panel
     * inside of the viewport.
     */
    placement: {
      type: String,
      default: "bottom",
      validator: (prop) => ["top", "bottom"].includes(prop),
    },
    /** The select's help text. If you need to display HTML, you can use the `help-text` slot instead. */
    helpText: {
      type: String,
      default: "",
    },
    /** The select's required attribute. */
    required: {
      type: Boolean,
      default: false,
    },
    /** Adds a clear button when the select is populated. */
    clearable: {
      type: Boolean,
      default: false,
    },
    /** This will be true when the control is in an invalid state. Validity is determined by the `required` prop. */
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasFocus: false,
      isOpen: false,
      displayLabel: "",
      displayTags: [],
    };
  },
  computed: {
    classObject() {
      const classes = [
        {
          "q-select--open": this.isOpen,
          "q-select--empty": !this.value,
          "q-select--focused": this.hasFocus,
          "q-select--clearable": this.clearable,
          "q-select--disabled": this.disabled,
          "q-select--multiple": this.multiple,
          "q-select--standard": !this.filled,
          "q-select--filled": this.filled,
          "q-select--has-tags": this.multiple && this.displayTags.length > 0,
          "q-select--placeholder-visible": this.displayLabel === "",
          "q-select--small": this.size === "small",
          "q-select--medium": this.size === "medium",
          "q-select--large": this.size === "large",
          "q-select--pill": this.pill,
          "q-select--invalid": this.invalid,
        },
      ];

      return classes;
    },
    hasLabel() {
      return this.label ? true : !!this.$slots.label;
    },
    hasSelection() {
      return this.multiple ? this.value.length > 0 : this.value !== "";
    },
    hasClearIcon() {
      return this.clearable && !this.disabled && this.hasSelection;
    },
  },
  methods: {
    handleLabelClick() {
      console.log("click");
    },

    handleBlur() {
      // Don't blur if the control is open. We'll move focus back once it closes.
      if (!this.isOpen) {
        this.hasFocus = false;
        this.$emit("blur");
      }
    },

    handleFocus() {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.$emit("focus");
      }
    },

    handleMenuShow() {
      this.isOpen = true;
    },

    handleMenuHide() {
      this.isOpen = false;

      // Restore focus on the box after the menu is hidden
      // TODO: this.control.focus();
    },

    handleMenuSelect(event) {
      const item = event.detail.item;
      console.log(item);

      // if (this.multiple) {
      //   this.value = this.value.includes(item.value)
      //     ? (this.value as []).filter(v => v !== item.value)
      //     : [...this.value, item.value];
      // } else {
      //   this.value = item.value;
      // }

      // this.syncItemsFromValue();
    },
  },
};
</script>

<style src="./Select.styles.scss" lang="scss" scoped></style>
