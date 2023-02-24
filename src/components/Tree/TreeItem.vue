<template>
  <div class="q-tree-item" :class="classObject">
    <div class="q-tree-item__item" @click="handleClick">
      <div class="q-tree-item__indentation"></div>
      <div
        class="q-tree-item__expand-button"
        :class="{ 'q-tree-item__expand-button--visible': showExpandButton }"
      >
        <div class="q-spinner" v-if="loading"></div>
        <slot name="expand-icon">
          <q-icon
            v-if="$slots.children"
            class="q-tree-item__default-toggle-button"
            library="system"
            name="chevron-right"
          ></q-icon>
        </slot>
      </div>
      <q-checkbox v-if="selectable" tabindex="-1" class="q-tree-item__checkbox">
        <div class="q-tree-item__label">
          <slot></slot>
        </div>
      </q-checkbox>
      <div v-else class="q-tree-item__label">
        <slot></slot>
      </div>
    </div>
    <transition name="bounce" :duration="250">
      <div class="q-tree-item__children" v-show="isExpanded">
        <slot name="children"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { QIcon } from "@/components/Icon";
import { QCheckbox } from "@/components/Checkbox";

export default {
  name: "QTreeItem",
  components: {
    QIcon,
    QCheckbox,
  },
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      indeterminate: false,
      isLeaf: false,
      loading: false,
      selectable: false,
      isExpanded: this.expanded,
    };
  },
  computed: {
    classObject() {
      return [
        {
          "q-tree-item--expanded": this.isExpanded,
          "q-tree-item--selected": this.selected,
          "q-tree-item--disabled": this.disabled,
          "q-tree-item--leaf": this.isLeaf,
        },
      ];
    },
    showExpandButton() {
      return !this.loading && (!this.isLeaf || this.lazy);
    },
  },
  methods: {
    handleClick() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style src="./TreeItem.styles.scss" lang="scss" scoped></style>
