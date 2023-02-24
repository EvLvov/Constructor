export default {
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    modelValue: [String, Number, Boolean, Function, Object, Array],
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      newValue: this.modelValue,
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
  },
  watch: {
    modelValue(value) {
      this.newValue = value;
    },
  },
  methods: {
    focus() {
      // MacOS FireFox and Safari do not focus when clicked
      this.$refs.input.focus();
    },
  },
};
