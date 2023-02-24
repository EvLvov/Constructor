<template>
  <component :is="'QDropdown'" class="q-color-dropdown">
    <template v-slot:trigger>
      <button
        :class="classDropdownTrigger"
        :style="styleDropdownTrigger"
        type="button"
      ></button>
    </template>
    <div ref="root" class="q-color-picker" :class="classObject">
      <div
        ref="grid"
        class="q-color-picker__grid"
        :style="styleGrid"
        @mousedown="handleGridDrag"
        @touchstart="handleGridDrag"
      >
        <span
          class="q-color-picker__grid-handle"
          :class="classGridHandle"
          :style="styleGridHandle"
          @keydown="handleGridKeyDown"
        ></span>
      </div>
      <div class="q-color-picker__controls">
        <div class="q-color-picker__sliders">
          <div
            ref="hue"
            class="q-color-picker__hue q-color-picker__slider"
            @mousedown="handleHueDrag"
            @touchstart="handleHueDrag"
          >
            <span
              class="q-color-picker__slider-handle"
              :style="styleSliderHandle"
              @keydown="handleHueKeyDown"
            ></span>
          </div>

          <div
            ref="alpha"
            class="q-color-picker__alpha q-color-picker__slider q-color-picker__transparent-bg"
            @mousedown="handleAlphaDrag"
            @touchstart="handleAlphaDrag"
          >
            <div
              class="q-color-picker__alpha-gradient"
              :style="styleAlphaGradient"
            ></div>
            <span
              class="q-color-picker__slider-handle"
              :style="{ left: `${computedAlpha}%` }"
              @keydown="handleAlphaKeyDown"
            ></span>
          </div>
        </div>
        <button
          type="button"
          class="q-color-picker__preview q-color-picker__transparent-bg"
          :style="{
            '--preview-color': `hsla(${hue}deg, ${saturation}%, ${lightness}%, ${
              computedAlpha / 100
            })`,
          }"
        ></button>
      </div>
      <div class="q-color-picker__user-input">
        <q-input
          type="text"
          :name="this.name"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          :spellcheck="false"
          v-model="computedValue"
          :disabled="this.disabled"
          @keydown="handleInputKeyDown"
          @change="handleInputChange"
        ></q-input>
        <q-button-group>
          <q-button v-if="!noFormatToggle" @click="handleFormatToggle">
            {{ isFormat }}
          </q-button>
          <q-button>
            <q-icon library="system" name="eyedropper"></q-icon>
          </q-button>
        </q-button-group>
      </div>
      <div v-if="swatches.length > 0" class="q-color-picker__swatches">
        <div
          class="q-color-picker__swatch q-color-picker__transparent-bg"
          v-for="swatch in swatches"
          :key="swatch"
          @click="() => !disabled && setColor(swatch)"
          @keydown="
            (event) => !disabled && event.key === 'Enter' && setColor(swatch)
          "
        >
          <div
            class="q-color-picker__swatch-color"
            :style="{ backgroundColor: swatch }"
          ></div>
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import Color from "color";

import { clamp } from "@/internal/math";
import { drag } from "@/internal/drag";
import { QIcon } from "@/components/Icon";
import { QInput } from "@/components/Input";
import { QButton } from "@/components/Button";
import { QButtonGroup } from "@/components/ButtonGroup";
import { QDropdown } from "@/components/Dropdown";

function toHex(value) {
  const hex = Math.round(value).toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export default {
  name: "QColorPicker",
  components: {
    QIcon,
    QInput,
    QButton,
    QButtonGroup,
    QDropdown,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    alpha: {
      type: Number,
      default: 100,
    },
    label: {
      type: String,
      default: "",
    },
    format: {
      type: String,
      default: "hex",
      validator: (prop) => ["hex", "rgb", "rgb"].includes(prop),
    },
    inline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: (prop) => ["small", "medium", "large"].includes(prop),
    },
    noFormatToggle: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    hoist: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    swatches: {
      type: Array,
      default: () => {
        return [
          "#d0021b",
          "#f5a623",
          "#f8e71c",
          "#8b572a",
          "#7ed321",
          "#417505",
          "#bd10e0",
          "#9013fe",
          "#4a90e2",
          "#50e3c2",
          "#b8e986",
          "#000",
          "#444",
          "#888",
          "#ccc",
          "#fff",
        ];
      },
    },
  },
  data() {
    return {
      isDraggingGridHandle: false,
      isFormat: this.format,
      newValue: this.value,
      hue: 0,
      saturation: 100,
      lightness: 100,
      brightness: 100,
      newAlpha: this.alpha,
      isEmpty: false,
    };
  },
  mounted() {
    this.setColor(this.value);
  },
  watch: {
    value(value) {
      this.computedValue = value;
    },
    alpha(value) {
      this.computedAlpha = value;
    },
    isFormat() {
      this.syncValues();
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.isEmpty = !value;
        this.newValue = value;
        this.$emit("update:value", value);
      },
    },
    computedAlpha: {
      get() {
        return this.newAlpha;
      },
      set(value) {
        this.newAlpha = value;
        this.$emit("update:alpha", value);
      },
    },
    classDropdownTrigger() {
      return {
        "q-color-dropdown__trigger": true,
        "q-color-dropdown__trigger--disabled": this.disabled,
        "q-color-dropdown__trigger--small": this.size === "small",
        "q-color-dropdown__trigger--medium": this.size === "medium",
        "q-color-dropdown__trigger--large": this.size === "large",
        "q-color-dropdown__trigger--empty": this.isEmpty,
        "q-color-picker__transparent-bg": true,
      };
    },
    styleDropdownTrigger() {
      return {
        color: `hsla(
                ${this.hue}deg,
                ${this.saturation}%,
                ${this.lightness}%,
                ${this.computedAlpha / 100}
              )
              `,
      };
    },
    classObject() {
      return {
        "q-color-picker--inline": this.inline,
        "q-color-picker--disabled": this.disabled,
      };
    },
    styleGrid() {
      return {
        backgroundColor: `hsl(${this.hue}deg, 100%, 50%)`,
      };
    },
    classGridHandle() {
      return {
        "q-color-picker__grid-handle": true,
        "q-color-picker__grid-handle--dragging": this.isDraggingGridHandle,
      };
    },
    styleGridHandle() {
      const gridHandleX = this.saturation;
      const gridHandleY = 100 - this.brightness;

      return {
        top: `${gridHandleY}%`,
        left: `${gridHandleX}%`,
        backgroundColor: `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`,
      };
    },
    styleSliderHandle() {
      return {
        left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`,
      };
    },
    styleAlphaGradient() {
      return {
        backgroundImage: `linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`,
      };
    },
  },
  methods: {
    handleGridDrag(event) {
      const grid = this.$refs.grid; //('.color-picker__grid')!;
      const handle = grid.querySelector(".q-color-picker__grid-handle");
      const { width, height } = grid.getBoundingClientRect();

      handle.focus();
      event.preventDefault();

      this.isDraggingGridHandle = true;

      drag(grid, {
        onMove: (x, y) => {
          this.saturation = clamp((x / width) * 100, 0, 100);
          this.brightness = clamp(100 - (y / height) * 100, 0, 100);
          this.lightness = this.getLightness(this.brightness);
          this.syncValues();
        },
        onStop: () => (this.isDraggingGridHandle = false),
        initialEvent: event,
      });
    },

    handleGridKeyDown(event) {
      const increment = event.shiftKey ? 10 : 1;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.saturation = clamp(this.saturation - increment, 0, 100);
        this.lightness = this.getLightness(this.brightness);
        this.syncValues();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.saturation = clamp(this.saturation + increment, 0, 100);
        this.lightness = this.getLightness(this.brightness);
        this.syncValues();
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        this.brightness = clamp(this.brightness + increment, 0, 100);
        this.lightness = this.getLightness(this.brightness);
        this.syncValues();
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.brightness = clamp(this.brightness - increment, 0, 100);
        this.lightness = this.getLightness(this.brightness);
        this.syncValues();
      }
    },

    handleHueDrag(event) {
      const container = this.$refs.hue;
      const handle = container.querySelector(".q-color-picker__slider-handle");
      const { width } = container.getBoundingClientRect();

      handle.focus();
      event.preventDefault();

      drag(container, {
        onMove: (x) => {
          this.hue = clamp((x / width) * 360, 0, 360);
          this.syncValues();
        },
        initialEvent: event,
      });
    },

    handleHueKeyDown(event) {
      const increment = event.shiftKey ? 10 : 1;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.hue = clamp(this.hue - increment, 0, 360);
        this.syncValues();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.hue = clamp(this.hue + increment, 0, 360);
        this.syncValues();
      }

      if (event.key === "Home") {
        event.preventDefault();
        this.hue = 0;
        this.syncValues();
      }

      if (event.key === "End") {
        event.preventDefault();
        this.hue = 360;
        this.syncValues();
      }
    },

    handleAlphaDrag(event) {
      const container = this.$refs.alpha;
      const handle = container.querySelector(".q-color-picker__slider-handle");
      const { width } = container.getBoundingClientRect();

      handle.focus();
      event.preventDefault();

      drag(container, {
        onMove: (x) => {
          this.computedAlpha = Math.round(clamp((x / width) * 100, 0, 100));
          this.syncValues();
        },
        initialEvent: event,
      });
    },

    handleAlphaKeyDown(event) {
      const increment = event.shiftKey ? 10 : 1;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.computedAlpha = clamp(this.computedAlpha - increment, 0, 100);
        this.syncValues();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.computedAlpha = clamp(this.computedAlpha + increment, 0, 100);
        this.syncValues();
      }

      if (event.key === "Home") {
        event.preventDefault();
        this.computedAlpha = 0;
        this.syncValues();
      }

      if (event.key === "End") {
        event.preventDefault();
        this.computedAlpha = 100;
        this.syncValues();
      }
    },

    handleFormatToggle() {
      const formats = ["hex", "rgb", "hsl"];
      const nextIndex = (formats.indexOf(this.isFormat) + 1) % formats.length;
      this.isFormat = formats[nextIndex];
    },

    setLetterCase(string) {
      if (typeof string !== "string") {
        return "";
      }

      return this.uppercase ? string.toUpperCase() : string.toLowerCase();
    },

    getBrightness(lightness) {
      return clamp(-1 * ((200 * lightness) / (this.saturation - 200)), 0, 100);
    },

    getLightness(brightness) {
      return clamp(
        ((((200 - this.saturation) * brightness) / 100) * 5) / 10,
        0,
        100
      );
    },

    setColor(colorString) {
      const newColor = this.parseColor(colorString);

      if (newColor === null) {
        return false;
      }

      this.hue = newColor.hsla.h;
      this.saturation = newColor.hsla.s;
      this.lightness = newColor.hsla.l;
      this.brightness = this.getBrightness(newColor.hsla.l);
      this.computedAlpha = this.opacity ? newColor.hsla.a * 100 : 100;

      this.syncValues();

      return true;
    },

    parseColor(colorString) {
      let parsed;

      // The color module has a weak parser, so we normalize certain things to make the user experience better
      colorString = this.normalizeColorString(colorString);

      try {
        parsed = Color(colorString);
      } catch {
        return null;
      }

      const hslColor = parsed.hsl();

      const hsl = {
        h: hslColor.hue(),
        s: hslColor.saturationl(),
        l: hslColor.lightness(),
        a: hslColor.alpha(),
      };

      const rgbColor = parsed.rgb();

      const rgb = {
        r: rgbColor.red(),
        g: rgbColor.green(),
        b: rgbColor.blue(),
        a: rgbColor.alpha(),
      };

      const hex = {
        r: toHex(rgb.r),
        g: toHex(rgb.g),
        b: toHex(rgb.b),
        a: toHex(rgb.a * 255),
      };

      return {
        hsl: {
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          string: this.setLetterCase(
            `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(
              hsl.l
            )}%)`
          ),
        },
        hsla: {
          h: hsl.h,
          s: hsl.s,
          l: hsl.l,
          a: hsl.a,
          string: this.setLetterCase(
            `hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(
              hsl.l
            )}%, ${hsl.a.toFixed(2).toString()})`
          ),
        },
        rgb: {
          r: rgb.r,
          g: rgb.g,
          b: rgb.b,
          string: this.setLetterCase(
            `rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(
              rgb.b
            )})`
          ),
        },
        rgba: {
          r: rgb.r,
          g: rgb.g,
          b: rgb.b,
          a: rgb.a,
          string: this.setLetterCase(
            `rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(
              rgb.b
            )}, ${rgb.a.toFixed(2).toString()})`
          ),
        },
        hex: this.setLetterCase(`#${hex.r}${hex.g}${hex.b}`),
        hexa: this.setLetterCase(`#${hex.r}${hex.g}${hex.b}${hex.a}`),
      };
    },

    normalizeColorString(colorString) {
      //
      // The color module we're using doesn't parse % values for the alpha channel in RGBA and HSLA. It also doesn't parse
      // hex colors when the # is missing. This pre-parser tries to normalize these edge cases to provide a better
      // experience for users who type in color values.
      //
      if (/rgba?/i.test(colorString)) {
        const rgba = colorString
          .replace(/[^\d.%]/g, " ")
          .split(" ")
          .map((val) => val.trim())
          .filter((val) => val.length);

        if (rgba.length < 4) {
          rgba[3] = "1";
        }

        if (rgba[3].indexOf("%") > -1) {
          rgba[3] = (parseFloat(rgba[3].replace(/%/g, "")) / 100).toString();
        }

        return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
      }

      if (/hsla?/i.test(colorString)) {
        const hsla = colorString
          .replace(/[^\d.%]/g, " ")
          .split(" ")
          .map((val) => val.trim())
          .filter((val) => val.length);

        if (hsla.length < 4) {
          hsla[3] = "1";
        }

        if (hsla[3].indexOf("%") > -1) {
          hsla[3] = (parseFloat(hsla[3].replace(/%/g, "")) / 100).toString();
        }

        return `hsla(${hsla[0]}, ${hsla[1]}, ${hsla[2]}, ${hsla[3]})`;
      }

      if (/^[0-9a-f]+$/i.test(colorString)) {
        return `#${colorString}`;
      }

      return colorString;
    },

    handleInputChange(event) {
      const target = event.target;

      if (this.input.value) {
        this.setColor(target.value);
        target.value = this.computedAlpha;
      } else {
        this.computedValue = "";
      }

      event.stopPropagation();
    },

    handleInputKeyDown(event) {
      if (event.key === "Enter") {
        if (this.input.value) {
          this.setColor(this.input.value);
          this.input.value = this.value;
          setTimeout(() => this.input.select());
        } else {
          this.hue = 0;
        }
      }
    },

    async syncValues() {
      const currentColor = this.parseColor(
        `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${
          this.computedAlpha / 100
        })`
      );

      if (currentColor === null) {
        return;
      }

      // Update the value
      if (this.isFormat === "hsl") {
        this.computedValue = this.opacity
          ? currentColor.hsla.string
          : currentColor.hsl.string;
      } else if (this.isFormat === "rgb") {
        this.computedValue = this.opacity
          ? currentColor.rgba.string
          : currentColor.rgb.string;
      } else {
        this.computedValue = this.opacity
          ? currentColor.hexa
          : currentColor.hex;
      }

      this.isSafeValue = true;
      this.newValue = this.computedValue;
      await this.updateComplete;
      this.isSafeValue = false;
    },
  },
};
</script>

<style src="./ColorPicker.styles.scss" lang="scss" scoped></style>
