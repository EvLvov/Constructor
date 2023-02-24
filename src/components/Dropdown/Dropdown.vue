<template>
  <div ref="dropdown" class="q-dropdown" :class="classObject">
    <q-popup
      :active="isOpen"
      :placement="placement"
      :distance="distance"
      :skidding="skidding"
      :strategy="hoist ? 'fixed' : 'absolute'"
      :flip="true"
      :shift="true"
      :auto-size-padding="10"
    >
      <template v-slot:anchor>
        <span
          ref="trigger"
          class="q-dropdown__trigger trigger"
          @click="handleTriggerClick"
          @keydown="handleTriggerKeyDown"
          @keyup="handleTriggerKeyUp"
        >
          <slot name="trigger"></slot>
        </span>
      </template>
      <transition name="anim">
        <div
          ref="panel"
          class="q-dropdown__panel"
          :aria-hidden="isOpen ? false : true"
          aria-labelledby="dropdown"
          v-show="isOpen"
        >
          <slot></slot>
        </div>
      </transition>
    </q-popup>
  </div>
</template>
<script>
import { QPopup } from "@/components/Popup";

export default {
  name: "QDropdown",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (prop) =>
        [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end",
        ].includes(prop),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    stayOpenOnSelect: {
      type: Boolean,
      default: false,
    },
    distance: {
      type: Number,
      default: 0,
    },
    skidding: {
      type: Number,
      default: 0,
    },
    hoist: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    QPopup,
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  watch: {
    isOpen(value) {
      if (value) {
        this.$emit("show");
        this.addOpenListeners();
        this.$emit("after-show");
      } else {
        this.$emit("hide");
        this.removeOpenListeners();
        this.$emit("after-hide");
      }
    },
  },
  computed: {
    classObject() {
      const classes = [
        {
          "q-dropdown--open": this.isOpen,
        },
      ];

      classes.push(`q-dropdown--placement-${this.placement}`);

      return classes;
    },
  },
  methods: {
    show() {
      if (this.isOpen) {
        return undefined;
      }

      this.isOpen = true;
    },

    hide() {
      if (!this.isOpen) {
        return undefined;
      }

      this.isOpen = false;
    },

    handlePanelSelect() {
      // Hide the dropdown when a menu item is selected
      if (!this.stayOpenOnSelect) {
        this.hide();
      }
    },

    addOpenListeners() {
      const menuItems = this.$el.querySelectorAll(".q-menu-item");

      if (menuItems.length > 0) {
        menuItems.forEach((menuItem) => {
          menuItem.addEventListener("click", this.handlePanelSelect);
        });
      }

      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      document.addEventListener("scroll", this.handleDocumentMouseDown);
    },

    removeOpenListeners() {
      const menuItems = this.$el.querySelectorAll(".q-menu-item");

      if (menuItems.length > 0) {
        menuItems.forEach((menuItem) => {
          menuItem.addEventListener("click", this.handlePanelSelect);
        });
      }

      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      document.removeEventListener("scroll", this.handleDocumentMouseDown);
    },

    handleTriggerClick() {
      if (this.isOpen) {
        this.hide();
      } else {
        this.show();
      }
    },

    handleTriggerKeyDown(event) {
      // Close when escape or tab is pressed
      if (event.key === "Escape") {
        this.hide();
        return;
      }
      // When spacebar/enter is pressed, show the panel but don't focus on the menu. This let's the user press the same
      // key again to hide the menu in case they don't want to make a selection.
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
    },

    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    },

    handleDocumentMouseDown(event) {
      // Close when clicking outside of the containing element
      const path = event.composedPath();
      if (this.$el && !path.includes(this.$el)) {
        this.hide();
      }
    },

    handleDocumentKeyDown(event) {
      if (event.key === "Tab" || event.key === "Escape") {
        // Tabbing within an open menu should close the dropdown and refocus the trigger
        if (this.isOpen) {
          event.preventDefault();
          this.hide();
          return;
        }
      }
    },
  },
};
</script>

<style src="./Dropdown.styles.scss" lang="scss" scoped></style>
