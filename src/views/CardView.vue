<template>
  <div class="q-card-view">
    <q-headline tag="<q-card> | QCard">Card</q-headline>
    <h3>
      Карточки можно использовать для группировки связанных предметов в
      контейнере.
    </h3>
    <q-code-block :value="card">
      <q-card class="card-overview">
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            alt="Котенок терпеливо сидит между терракотовым горшком и декоративными травами."
          />
        </template>
        <template v-slot:default>
          <strong>Варежка</strong><br />Этот котенок столь же мил, сколь и
          игрив. Приведи его домой сегодня же!<br />
          <small>6 недель от роду</small>
        </template>
        <template v-slot:footer
          ><q-button variant="primary" pill="medium">Доп информация</q-button>
        </template>
      </q-card>
    </q-code-block>
    <!--Examples-->
    <h2 id="examples">
      <router-link to="/components/card?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <!--Basic Card-->
    <h2 id="examples">
      <router-link to="/components/card?id=basic-card">
        <span>Базовая Карта</span>
      </router-link>
    </h2>
    <p>
      Базовые карточки не очень интересны, но они могут отображать любой
      контент, который вы хотите.
    </p>
    <q-code-block :value="basic">
      <q-card class="card-basic">
        <template v-slot:default
          ><slot>
            Это всего лишь базовая карта. Ни изображения, ни верхнего, ни
            нижнего колонтитулов. Только ваш контент.
          </slot>
        </template>
      </q-card>
    </q-code-block>
    <!--Card with Header-->
    <h2 id="card-with-header">
      <router-link to="/components/card?id=card-with-header">
        <span>Карточка с заголовком</span>
      </router-link>
    </h2>
    <p>
      Заголовки можно использовать для отображения заголовков и многого другого.
    </p>
    <q-code-block :value="header">
      <q-card class="card-header">
        <template v-slot:header
          >Заголовок заголовка
          <q-icon-button name="gear" label="Settings"></q-icon-button>
        </template>
        <template v-slot:default
          ><slot>
            Это всего лишь базовая карта. Ни изображения, ни верхнего, ни
            нижнего колонтитулов. Только ваш контент.
          </slot>
        </template>
      </q-card>
    </q-code-block>
    <!--Card with Footer-->
    <h2 id="card-with-footer">
      <router-link to="/components/card?id=card-with-footer">
        <span>Карточка с нижним колонтитулом</span>
      </router-link>
    </h2>
    <p>
      Нижние колонтитулы можно использовать для отображения действий, сводок или
      другого релевантного контента.
    </p>
    <q-code-block :value="footer">
      <q-card class="card-footer">
        <template v-slot:default
          ><slot>
            У этой карточки есть нижний колонтитул. Вы можете положить в него
            все, что угодно!
          </slot>
        </template>
        <template v-slot:footer>
          <q-button variant="primary">Предпросмотр</q-button>
        </template>
      </q-card>
    </q-code-block>
    <!--Images-->
    <h2 id="images">
      <router-link to="/components/card?id=images">
        <span>Изображения</span>
      </router-link>
    </h2>
    <p>
      Карты принимают слот для <code>image</code>. Изображение отображается
      поверх карточки и растягивается по размеру.
    </p>
    <q-code-block :value="image">
      <q-card class="card-image">
        <template v-slot:image>
          <img
            src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            alt="Котенок терпеливо сидит между терракотовым горшком и декоративными травами."
          />
        </template>
        <template v-slot:default>
          Это котенок, но не просто какой-нибудь котенок. Этот котенок любит
          гулять по поддонам.
        </template>
      </q-card>
    </q-code-block>
  </div>
  <h2>Слоты (Slots)</h2>
  <q-divider></q-divider>
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
        <span>(default)</span>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Тело карточки.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>header</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Заголовок карточки.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>footer</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Подвал Карточки.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>image</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Изображение Карточки.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
  </q-grid>
  <h2>Cвойства (Properties)</h2>
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
        <code>borderColor</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span
          >Цвет границы карточки, включая границы, которые находятся внутри
          карточки.</span
        >
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>borderRadius</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Радиус границы для краев карточки.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>borderWidth</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Ширина границ карточки.</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
    <q-grid-row>
      <q-grid-col :col="{ xs: 2 }">
        <code>padding</code>
      </q-grid-col>
      <q-grid-col :col="{ xs: 6 }">
        <span>Заполнение, используемое для разделов карты.*</span>
      </q-grid-col>
    </q-grid-row>
    <q-divider></q-divider>
  </q-grid>
</template>

<script>
import { QCard } from "@/components/Card";
import { QButton } from "@/components/Button";
import { QIconButton } from "@/components/IconButton";
import { QDivider } from "@/components/Divider";
import { QGrid, QGridCol, QGridRow } from "@/components/Grid";
import { QCodeBlock } from "@/components/CodeBlock";
import QHeadline from "@/blocks/Headline";
export default {
  name: "CardView",
  components: {
    QCard,
    QHeadline,
    QButton,
    QDivider,
    QIconButton,
    QGrid,
    QGridCol,
    QGridRow,
    QCodeBlock,
  },
  data() {
    return {
      card: `
<q-card class="card-overview">

  <template v-slot:image>
    <img
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="Котенок терпеливо сидит между терракотовым горшком и декоративными травами."
      />
  </template>

  <template v-slot:default>
    <strong>Варежка</strong><br />Этот котенок столь же мил, сколь и игрив.
      Приведи его домой сегодня же!<br />
    <small>6 недель от роду</small>
  </template>

  <template v-slot:footer>
    <q-button variant="primary" pill="medium">Доп информация</q-button>
    <q-rating></q-rating>
  </template>

</q-card>

<style>

.card-overview {
  max-width: 300px;
}

.card-overview small {
  color: var(--q-color-neutral-500);
}

.card-overview .q-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  }
</style>`,
      basic: `
<q-card class="card-basic">

  <template v-slot:default>
    <slot>
      Это всего лишь базовая карта. Ни изображения, ни верхнего, ни нижнего
      колонтитулов. Только ваш контент.
    </slot>
  </template>

</q-card>

<style>

  .card-basic {
    max-width: 300px;
  }

</style>
    `,
      header: `
<q-card class="card-header">

  <template v-slot:header>
    Заголовок заголовка
    <q-icon-button name="gear" label="Settings"></q-icon-button>
  </template>

  <template v-slot:default>
    <slot>
      Это всего лишь базовая карта. Ни изображения, ни верхнего, ни нижнего
      колонтитулов. Только ваш контент.
    </slot>
  </template>

</q-card>

<style>

.card-header {
  max-width: 300px;
}

.card-header .q-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header h3 {
  margin: 0;
}

.card-header .q-icon-button {
  font-size: var(--q-font-size-medium);
}

</style>
    `,
      footer: `
<q-card class="card-footer">

  <template v-slot:default>
    <slot>
      У этой карточки есть нижний колонтитул. Вы можете положить в него все,
      что угодно!
    </slot>
  </template>

  <template v-slot:footer>
    <q-button variant="primary">Предпросмотр</q-button>
  </template>

</q-card>

<style>

.card-footer {
  max-width: 300px;
}

.card-footer .q-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
      `,
      image: `
<q-card class="card-image">

  <template v-slot:image>
    <img
      src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
      alt="Котенок терпеливо сидит между терракотовым горшком и декоративными травами."
    />
  </template>

  <template v-slot:default>
    Это котенок, но не просто какой-нибудь котенок. Этот котенок любит
    гулять по поддонам.
  </template>

</q-card>

<style>

.card-image {
  max-width: 300px;
}

</style>
    `,
    };
  },
};
</script>

<style lang="scss">
.q-card-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}
.card-overview {
  max-width: 300px;
}

.card-overview small {
  color: var(--q-color-neutral-500);
}

.card-overview .q-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-basic {
  max-width: 300px;
}

.card-header {
  max-width: 300px;
}

.card-header .q-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header h3 {
  margin: 0;
}

.card-header .q-icon-button {
  font-size: var(--q-font-size-medium);
}

.card-footer {
  max-width: 300px;
}

.card-footer .q-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-image {
  max-width: 300px;
}

.q-card img {
  width: 100%;
}
</style>
