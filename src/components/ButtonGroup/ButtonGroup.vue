<template>
  <div
    ref="group"
    class="q-button-group"
    @focusout="handleBlur"
    @focusin="handleFocus"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <slot></slot>
  </div>
</template>
<script>
// function findButton(el) {
//   const children = [".q-button", ".q-radio-button"];
//   return children.includes(el.className.toLowerCase())
//     ? el
//     : el.querySelector(children.join(","));
// }

export default {
  name: "QButtonGroup",
  updated() {
    this.handleUpdate();
  },
  mounted() {
    this.handleUpdate();
  },
  methods: {
    handleBlur() {},
    handleFocus() {},
    handleMouseOver() {},
    handleMouseOut() {},
    handleUpdate() {
      const slottedElements = [...Array(this.$refs.group)[0].children];

      slottedElements.forEach((button) => {
        const index = slottedElements.indexOf(button);

        if (button !== null) {
          button.classList.add("q-button-group__button");
          button.classList.toggle("q-button-group__button--first", index === 0);
          button.classList.toggle(
            "q-button-group__button--inner",
            index > 0 && index < slottedElements.length - 1
          );
          button.classList.toggle(
            "q-button-group__button--last",
            index === slottedElements.length - 1
          );
          button.classList.toggle(
            "q-button-group__button--radio",
            button.className.toLowerCase() === ".q-radio-button"
          );
        }
      });
    },
  },
};
</script>
<style src="./ButtonGroup.styles.scss" lang="scss" scoped></style>
