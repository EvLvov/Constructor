<template>
  <div class="spinner-view">
    <q-headline tag="<q-spinner> | QSpinner">Spinner</q-headline>
    <h3>
      Спиннеры используются для отображения хода выполнения неопределенной
      операции.
    </h3>
    <q-spinner></q-spinner>
    <q-code-block value="<q-spinner></q-spinner>"></q-code-block>
    <!--examples -->
    <h2 id="examples">
      <router-link to="/components/spinner?id=spinner">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <!--Size-->
    <h3 id="Size">
      <router-link to="/components/size?id=size">
        <span>Размер (Size)</span>
      </router-link>
    </h3>
    <p>
      Размер спиннеров определяется в зависимости от текущего размера шрифта.
      Чтобы изменить их размер, установите свойство <code>font-size</code> на
      самом spinner или на родительском элементе, как показано ниже.
    </p>
    <q-code-block :value="fontsize">
      <q-spinner></q-spinner>
      <q-spinner :size="'2rem'"></q-spinner>
      <q-spinner :size="'3rem'"></q-spinner>
    </q-code-block>
    <!--TrackWidth-->
    <h3 id="track-width">
      <router-link to="/components/track-width?id=track-width">
        <span>Ширина Спиннера (Track Width)</span>
      </router-link>
    </h3>
    <p>
      Ширину спиннера можно изменить, установив пользовательское свойство
      <code>trackWidth.</code>
    </p>
    <q-code-block :value="trackWidth"></q-code-block>
    <q-spinner :size="'50px'" :trackWidth="'10px'"></q-spinner>
    <!--Color-->
    <h3 id="color">
      <router-link to="/components/color?id=color">
        <span>Цвет (color)</span>
      </router-link>
    </h3>
    <p>
      Цвета спиннера можно изменить, установив пользовательские свойства
      <code>indicatorColor</code> и <code>trackColor</code>.
    </p>
    <q-code-block :value="color"></q-code-block>
    <q-spinner
      :size="'3rem'"
      :trackColor="'pink'"
      :indicatorColor="'deeppink'"
    ></q-spinner>
    <!--speed-->
    <h3 id="speed">
      <router-link to="/components/speed?id=speed">
        <span>Скорость (speed)</span>
      </router-link>
    </h3>
    <p>
      Время, необходимое спиннеру для завершения одного цикла анимации.
      <code>speed</code>.
    </p>
    <q-code-block :value="color"></q-code-block>
    <q-spinner
      :speed="'5s'"
      :size="'3rem'"
      :trackColor="'pink'"
      :indicatorColor="'deeppink'"
    ></q-spinner>
  </div>
  <h3 id="css-custom-properties">
    <router-link to="/components/spinner?id=css-custom-properties">
      <span>Пользовательские свойства CSS</span>
    </router-link>
  </h3>
  <q-grid>
    <q-grid-row>
      <q-grid-col :col="{ xs: 3 }">
        <b>Название</b>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <b>Описание</b>
      </q-grid-col>
      <q-grid-col :col="{ xs: 2 }">
        <b>По умолчанию</b>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 3 }">
        <code>--track-width</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Ширина спиннера</span>
      </q-grid-col>
      <q-grid-col :col="{ xs: 2 }"> </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 3 }">
        <code>--track-color</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Цвет спиннера</span>
      </q-grid-col>
      <q-grid-col :col="{ xs: 2 }"> </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 3 }">
        <code>--indicator-color</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Цвет индикатора</span>
      </q-grid-col>
      <q-grid-col :col="{ xs: 2 }"> </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 3 }">
        <code>--speed</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span
          >Время, необходимое спиннеру для завершения одного цикла
          анимации.</span
        >
      </q-grid-col>
      <q-grid-col :col="{ xs: 2 }"> </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
  </q-grid>
  <h3 id="css-parts">
    <router-link to="/components/spinner?id=css-parts">
      <span>Части CSS</span>
    </router-link>
  </h3>
  <q-grid>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <b>Название</b>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <b>Описание</b>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>base</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Внутренняя оболочка компонента.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
  </q-grid>
</template>

<script>
import { QSpinner } from "@/components/Spinner";
import { QCodeBlock } from "@/components/CodeBlock";
import { QGrid, QGridCol, QGridRow } from "@/components/Grid";
import { QDivider } from "@/components/Divider";
import QHeadline from "@/blocks/Headline";

export default {
  name: "SpinnerView",
  components: {
    QSpinner,
    QHeadline,
    QCodeBlock,
    QGrid,
    QGridCol,
    QGridRow,
    QDivider,
  },
  data() {
    return {
      fontsize: `
<q-spinner></q-spinner>
<q-spinner :size="'2rem'"></q-spinner>
<q-spinner :size="'3rem'"></q-spinner>
      `,
      trackWidth: `
<q-spinner :size="'50px'" :trackWidth="'10px'"></q-spinner>
      `,
      color: `
<q-spinner :size="'3rem'" :trackColor="'pink'" :indicatorColor="'deeppink'"></q-spinner>`,
      speed: `<q-spinner :speed="'5s'" :size="'3rem'" :trackColor="'pink'" :indicatorColor="'deeppink'"></q-spinner>`,
    };
  },
};
</script>

<style lang="scss" scoped></style>
