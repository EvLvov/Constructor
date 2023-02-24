<template>
  <div class="q-drawer" :class="classObject" @keydown="handleKeyDown">
    <div
      class="q-drawer__overlay"
      v-if="isOpen && overlay"
      @click="() => this.requestClose('overlay')"
      tabindex="-1"
    ></div>
    <transition :name="animation">
      <div v-if="isOpen" class="q-drawer__panel" tabindex="0">
        <header class="q-drawer__header" v-if="!noHeader">
          <h2 class="q-drawer__title" id="title">
            <slot v-if="$slots.label" name="label"></slot>
            <span v-else-if="label">{{ label }}</span>
          </h2>
          <div class="q-drawer__header-actions">
            <slot name="header-actions"></slot>
            <q-icon-button
              class="q-drawer__close"
              name="x-lg"
              @click="() => this.requestClose('close-button')"
            ></q-icon-button>
          </div>
        </header>
        <div class="q-drawer__body">
          <slot></slot>
        </div>
        <footer class="q-drawer__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import { lockBodyScrolling, unlockBodyScrolling } from "@/internal/scroll";
import { QIconButton } from "@/components/IconButton";

export default {
  name: "QDrawer",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    placement: {
      type: String,
      default: "end",
      validator: (prop) => ["top", "end", "bottom", "start"].includes(prop),
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    contained: {
      type: Boolean,
      default: false,
    },
    noHeader: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    QIconButton,
  },
  data() {
    return {
      isOpen: this.open,
      isShowedOverlay: false,
    };
  },
  watch: {
    open(value) {
      this.isOpen = value;
    },
    isOpen(value) {
      if (value) {
        lockBodyScrolling(this);
      } else {
        unlockBodyScrolling(this);
      }
    },
  },
  computed: {
    classObject() {
      return [
        {
          "q-drawer--open": this.isOpen,
          "q-drawer--top": this.placement === "top",
          "q-drawer--end": this.placement === "end",
          "q-drawer--bottom": this.placement === "bottom",
          "q-drawer--start": this.placement === "start",
          "q-drawer--contained": this.contained,
          "q-drawer--fixed": !this.contained,
          "q-drawer--has-footer": this.$slots.footer,
        },
      ];
    },
    animation() {
      return this.placement === "top"
        ? "q-drawer--animate-top"
        : this.placement === "end"
        ? "q-drawer--animate-end"
        : this.placement === "bottom"
        ? "q-drawer--animate-bottom"
        : this.placement === "start"
        ? "q-drawer--animate-start"
        : "";
    },
  },
  methods: {
    requestClose() {
      this.hide();
    },
    handleKeyDown(event) {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.requestClose("keyboard");
      }
    },
    show() {
      this.isOpen = true;
      this.$emit("show");
    },
    hide() {
      this.isOpen = false;
      this.$emit("hide");
    },
  },
};
</script>

<style src="./Drawer.styles.scss" lang="scss" scoped></style>
