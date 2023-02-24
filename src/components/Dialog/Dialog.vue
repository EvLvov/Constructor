<template>
  <transition name="popup" :duration="250">
    <div
      v-if="isOpen"
      class="q-dialog"
      :class="classObject"
      @keyup.escape="hide"
    >
      <div class="q-dialog__overlay" @click="closeByOverlay"></div>
      <div class="q-dialog__panel" ref="panel" tabindex="0">
        <header v-if="!noHeader" class="q-dialog__header">
          <h2 class="q-dialog__title" v-if="$slots.label || label">
            <slot v-if="$slots.label" name="label"></slot>
            <span v-else-if="label">{{ label }}</span>
          </h2>
          <q-icon-button
            class="q-dialog__close"
            name="x"
            library="system"
            @click="hide"
          ></q-icon-button>
        </header>
        <div class="q-dialog__body">
          <slot></slot>
        </div>
        <footer class="q-dialog__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import { lockBodyScrolling, unlockBodyScrolling } from "@/internal/scroll";
import { QIconButton } from "../IconButton";

export default {
  name: "QDialog",
  components: {
    QIconButton,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    noHeader: {
      type: Boolean,
      default: false,
    },
    allowOverlayClose: {
      type: Boolean,
      default: true,
    },
    allowEscapeClose: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  computed: {
    classObject() {
      return [
        {
          "q-dialog--open": this.isOpen,
          "q-dialog--has-footer": this.$slots.footer,
        },
      ];
    },
  },
  watch: {
    isOpen(value) {
      if (value) {
        lockBodyScrolling(this);
      } else {
        unlockBodyScrolling(this);
      }
    },
  },
  methods: {
    // TODO: Закрыть окно при клике по кнопке Escape клавиатуры
    closeByOverlay() {
      if (this.allowOverlayClose) this.hide();
    },
    show() {
      this.isOpen = true;
    },
    hide() {
      this.isOpen = false;
    },
  },
};
</script>

<style src="./Dialog.styles.scss" lang="scss" scoped></style>
