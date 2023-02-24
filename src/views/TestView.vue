<template>
  <q-row :gutter="'-2rem'">
    <q-col :alignment="['center-lg']" :gutter="'3rem'" :lg="3">
      <span>1</span>
    </q-col>
    <q-col :distribution="['between-lg']" :alignment="['center-lg']" :lg="3">
      <span>2</span>
    </q-col>
    <q-col :distribution="['between-lg']" :alignment="['center-lg']" :lg="3">
      <span>3</span>
    </q-col>
    <q-col :distribution="['between-lg']" :alignment="['center-lg']" :lg="3">
      <span>4</span>
    </q-col>
  </q-row>
  <q-row>
    <q-popup>123</q-popup>
  </q-row>
</template>
<script>
import { QCol } from "@/components/Col";
import { QRow } from "@/components/Row";
import { QPopup } from "@/components";
export default {
  name: "TestView",
  components: {
    QCol,
    QRow,
    QPopup,
  },
};
</script>

<style lang="scss" scoped>
span {
  background-color: rgb(18, 51, 51);
  border: rgb(0, 162, 255) 4px solid;
  padding: 10px;
}
</style>
