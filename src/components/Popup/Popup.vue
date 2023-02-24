<template>
  <slot name="anchor"></slot>
  <div ref="popup" class="q-popup" :class="classObject">
    <slot></slot>
    <div class="q-popup__arrow" v-if="arrow"></div>
  </div>
</template>

<script>
import {
  arrow,
  // autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  size,
} from "@floating-ui/dom";

export default {
  name: "QPopup",
  props: {
    anchor: {
      type: Object,
    },
    active: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: "top",
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
    strategy: {
      type: String,
      default: "absolute",
      validator: (prop) => ["absolute", "fixed"].includes(prop),
    },
    distance: {
      type: Number,
      default: 0,
    },
    skidding: {
      type: Number,
      default: 0,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    arrowPlacement: {
      type: String,
      default: "anchor",
      validator: (prop) => ["start", "end", "center", "anchor"].includes(prop),
    },
    arrowPadding: {
      type: Number,
      default: 10,
    },
    flip: {
      type: Boolean,
      default: false,
    },
    flipFallbackPlacements: String,
    flipFallbackStrategy: {
      type: String,
      default: "initial",
      validator: (prop) => ["best-fit", "initial"].includes(prop),
    },
    flipBoundary: Object,
    flipPadding: {
      type: Number,
      default: 0,
    },
    shift: {
      type: Boolean,
      default: false,
    },
    shiftBoundary: Object,
    shiftPadding: {
      type: Number,
      default: 0,
    },
    autoSize: {
      type: String,
      validator: (prop) => ["horizontal", "vertical", "both"].includes(prop),
    },
    sync: {
      type: String,
      validator: (prop) => ["width", "height", "both"].includes(prop),
    },
    autoSizeBoundary: Object,
    autoSizePadding: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      anchorEl: null,
      popup: undefined,
      cleanup: undefined,
    };
  },
  watch: {
    active() {
      this.reposition();
    },
  },
  mounted() {
    this.anchorEl = this.$el.nextElementSibling;
    this.popup = this.$refs.popup;
    this.reposition();
  },
  computed: {
    classObject() {
      const classes = [
        {
          "q-popup--active": this.active,
          "q-popup--fixed": this.strategy === "fixed",
          "q-popup--has-arrow": this.arrow,
        },
      ];

      return classes;
    },
  },
  methods: {
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }

      const middleware = [
        // The offset middleware goes first
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
      ];

      // First we sync width/height
      if (this.sync) {
        middleware.push(
          size({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth
                ? `${rects.reference.width}px`
                : "";
              this.popup.style.height = syncHeight
                ? `${rects.reference.height}px`
                : "";
            },
          })
        );
      } else {
        // Cleanup styles if we're not matching width/height
        this.popup.style.width = "";
        this.popup.style.height = "";
      }

      // Then we flip
      if (this.flip) {
        middleware.push(
          flip({
            boundary: this.flipBoundary,
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy:
              this.flipFallbackStrategy === "best-fit"
                ? "bestFit"
                : "initialPlacement",
            padding: this.flipPadding,
          })
        );
      }

      // Then we shift
      if (this.shift) {
        middleware.push(
          shift({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding,
          })
        );
      }

      // Now we adjust the size as needed
      if (this.autoSize) {
        middleware.push(
          size({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.popup.style.setProperty(
                  "--auto-size-available-height",
                  `${availableHeight}px`
                );
              } else {
                this.popup.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.popup.style.setProperty(
                  "--auto-size-available-width",
                  `${availableWidth}px`
                );
              } else {
                this.popup.style.removeProperty("--auto-size-available-width");
              }
            },
          })
        );
      } else {
        // Cleanup styles if we're no longer using auto-size
        this.popup.style.removeProperty("--auto-size-available-width");
        this.popup.style.removeProperty("--auto-size-available-height");
      }

      // Finally, we add an arrow
      if (this.arrow) {
        middleware.push(
          arrow({
            element: this.arrowEl,
            padding: this.arrowPadding,
          })
        );
      }

      computePosition(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
      }).then(({ x, y, middlewareData, placement }) => {
        const staticSide = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right",
        }[placement.split("-")[0]];
        console.log("placement", placement);
        Object.assign(this.popup.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            // Start
            left =
              typeof arrowX === "number"
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : "";
            top =
              typeof arrowY === "number"
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : "";
          } else if (this.arrowPlacement === "end") {
            // End
            right =
              typeof arrowX === "number"
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : "";
            bottom =
              typeof arrowY === "number"
                ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))`
                : "";
          } else if (this.arrowPlacement === "center") {
            // Center
            left =
              typeof arrowX === "number"
                ? `calc(50% - var(--arrow-size-diagonal))`
                : "";
            top =
              typeof arrowY === "number"
                ? `calc(50% - var(--arrow-size-diagonal))`
                : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)",
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" src="./Popup.styles.scss" scoped></style>
