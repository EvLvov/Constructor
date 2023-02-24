<template>
  <transition>
    <div
      ref="alert"
      class="q-alert"
      v-if="isOpen"
      :class="classObject"
      @mousemove="handleMouseMove"
    >
      <span class="q-alert__icon" v-if="$slots.icon">
        <slot name="icon"></slot>
      </span>
      <span class="q-alert__message">
        <slot></slot>
      </span>
      <div v-if="closable" class="q-alert__close-button">
        <q-icon-button name="x" library="system" @click="hide"></q-icon-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { QIconButton } from "@/components/IconButton";

const toastStack = Object.assign(document.createElement("div"), {
  className: "q-toast-stack",
});
// TODO: Пробросить события show, after-show, hide, after-hide
export default {
  name: "QAlert",
  components: {
    QIconButton,
  },
  props: {
    /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
    open: {
      type: Boolean,
      default: false,
    },

    /** Makes the alert closable. */
    closable: {
      type: Boolean,
      default: false,
    },

    /** The alert's variant. */
    variant: {
      type: String,
      default: "primary",
      validator: (prop) =>
        ["primary", "success", "neutral", "warning", "danger"].includes(prop),
    },

    /**
     * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
     * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`.
     */
    duration: {
      type: Number,
      default: Infinity,
    },
  },
  data() {
    return {
      isOpen: this.open,
      autoHideTimeout: 0,
    };
  },
  mounted() {
    this.isOpen = this.open;
  },
  computed: {
    classObject: function () {
      return {
        "q-alert--open": this.isOpen,
        "q-alert--closable": this.closable,
        "q-alert--has-icon": this.$slots.icon,
        "q-alert--primary": this.variant === "primary",
        "q-alert--success": this.variant === "success",
        "q-alert--neutral": this.variant === "neutral",
        "q-alert--warning": this.variant === "warning",
        "q-alert--danger": this.variant === "danger",
      };
    },
  },
  watch: {
    open(value) {
      this.isOpen = value;
      this.handleOpenChange();
    },
    isOpen() {
      this.handleOpenChange();
    },
  },
  methods: {
    show() {
      this.isOpen = true;
    },
    hide() {
      this.isOpen = false;
    },
    handleOpenChange() {
      if (this.isOpen) {
        if (this.duration < Infinity) {
          this.restartAutoHide();
        }
      } else {
        clearTimeout(this.autoHideTimeout);
        this.$emit("alert:after-hide");
      }
    },
    handleMouseMove() {
      this.restartAutoHide();
    },
    async toast() {
      return new Promise(() => {
        if (toastStack.parentElement === null) {
          document.body.append(toastStack);
        }

        toastStack.appendChild(this.$el);
        this.show();

        // TODO: Удалить из DOM
      });
    },
    restartAutoHide() {
      clearTimeout(this.autoHideTimeout);
      if (this.isOpen && this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(
          () => this.hide(),
          this.duration
        );
      }
    },
  },
};
</script>

<style lang="scss" src="./Alert.styles.scss"></style>
