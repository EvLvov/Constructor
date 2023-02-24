<template>
  <section class="components-view">
    <router-view></router-view>
  </section>
</template>
<script>
export default {
  name: "ComponentsView",
};
</script>
<style lang="scss">
.components-view {
  margin: 0 auto;
  max-width: 860px;
  padding: 30px 15px 40px 15px;
  position: relative;
}
</style>
