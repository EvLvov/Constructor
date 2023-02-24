<template>
  <div class="q-icon" :class="classObject" v-if="svg" v-html="svg"></div>
</template>

<script>
import { requestIcon } from "./request";
import { getIconLibrary } from "./library";

export default {
  name: "QIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    library: {
      type: String,
      default: "default",
      validator: (prop) => ["default", "system", "material"].includes(prop),
    },
  },
  data() {
    return {
      svg: "",
      parser: DOMParser,
    };
  },
  created() {
    this.setIcon();
  },
  computed: {
    classObject: function () {
      return {
        "q-icon--default":
          this.library === "default" || this.library === undefined,
        "q-icon--material": this.library === "material",
      };
    },
  },
  methods: {
    getUrl() {
      const library = getIconLibrary(this.library);
      if (this.name && library) {
        return library.resolver(this.name);
      }

      return this.src;
    },

    async setIcon() {
      const url = this.getUrl();

      let parser = new DOMParser();

      if (url) {
        try {
          const file = await requestIcon(url);

          if (url !== this.getUrl()) {
            // If the url has changed while fetching the icon, ignore this request
            return;
          } else if (file.ok) {
            const doc = parser.parseFromString(file.svg, "text/html");
            const svgEl = doc.body.querySelector("svg");

            this.svg = svgEl.outerHTML;
          } else {
            this.svg = "";
          }
        } catch (_b) {
          console.log(_b);
        }
      } else if (this.svg.length > 0) {
        this.svg = "";
      }
    },
  },
};
</script>

<style lang="scss" src="./Icon.styles.scss" scoped></style>
