<template>
  <div class="drawer-view">
    <q-headline tag="<q-drawer> | QDrawer">
      Drawer
      <template #info>
        <q-badge variant="success" pill>Stable</q-badge>
      </template>
    </q-headline>
    <p>Выдвижная панель для отображения дополнительной информации</p>
    <q-code-block :value="example1">
      <q-drawer ref="exp1" :label="'Drawer'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <template #footer>
          <q-button variant="primary" @click="closeDrawer('exp1')">
            Закрыть
          </q-button>
        </template>
      </q-drawer>

      <q-button @click="openDrawer('exp1')">Показать панель</q-button>
    </q-code-block>
    <!-- Slide in From Start -->
    <h3 id="slide-in-from-start">
      <router-link to="/components/drawer?id=slide-in-from-start">
        <span>Положение с лева (Slide in From Start)</span>
      </router-link>
    </h3>
    <p>
      По умолчанию панель выдвигается с правой части экрана. Что бы понель
      выдивагалась с левой части экрана, установите параметр
      <code>placement</code> со значением <code>left</code>.
    </p>
    <q-code-block :value="example2">
      <q-drawer ref="exp2" :label="'Drawer'" :placement="'start'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <template #footer>
          <q-button variant="primary" @click="closeDrawer('exp2')">
            Закрыть
          </q-button>
        </template>
      </q-drawer>

      <q-button @click="openDrawer('exp2')">Показать панель</q-button>
    </q-code-block>

    <!-- Slide in From Top -->
    <h3 id="slide-in-from-top">
      <router-link to="/components/drawer?id=slide-in-from-top">
        <span>Положение сверху (Slide in From Top)</span>
      </router-link>
    </h3>
    <p>
      Что бы понель выдивагалась сверху, установите параметр
      <code>placement</code> со значением <code>top</code>.
    </p>
    <q-code-block :value="example3">
      <q-drawer ref="exp3" :label="'Drawer'" :placement="'top'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <template #footer>
          <q-button variant="primary" @click="closeDrawer('exp3')">
            Закрыть
          </q-button>
        </template>
      </q-drawer>

      <q-button @click="openDrawer('exp3')">Показать панель</q-button>
    </q-code-block>

    <!-- Slide in From Bottom -->
    <h3 id="slide-in-from-bottom">
      <router-link to="/components/drawer?id=slide-in-from-bottom">
        <span>Положение снизу (Slide in From Bottom)</span>
      </router-link>
    </h3>
    <p>
      Что бы понель выдивагалась в ниженей части экрана, установите параметр
      <code>placement</code> со значением <code>bottom</code>.
    </p>
    <q-code-block :value="example4">
      <q-drawer ref="exp4" :label="'Drawer'" :placement="'bottom'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <template #footer>
          <q-button variant="primary" @click="closeDrawer('exp4')">
            Закрыть
          </q-button>
        </template>
      </q-drawer>

      <q-button @click="openDrawer('exp4')">Показать панель</q-button>
    </q-code-block>

    <!--Contained to an Element-->
    <h3 id="contained-to-an-element">
      <router-link to="/components/drawer?id=contained-to-an-container">
        <span>Содержащийся в контейнере (Contained to an Conteiner)</span>
      </router-link>
    </h3>
    <p>
      По умолчанию панель выдвигается из
      <a
        href="https://developer.mozilla.org/ru/docs/Web/CSS/Containing_block"
        target="_blank"
      >
        содержащего блока </a
      >, которым обычно является окно просмотра. Чтобы показать панель внутри
      контейнера, добавьте параметр <code>contained</code> родительскому
      контейнеру. Родительский контентейнер должен иметь
      <code>position: relative</code>.
    </p>
    <q-code-block :value="example5">
      <div
        style="
          position: relative;
          border: solid 2px var(--q-panel-border-color);
          height: 300px;
          padding: 1rem;
          margin-bottom: 1rem;
          overflow: hidden;
        "
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.

        <q-drawer ref="exp5" :label="'Drawer'" contained>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <template #footer>
            <q-button variant="primary" @click="closeDrawer('exp5')">
              Закрыть
            </q-button>
          </template>
        </q-drawer>
      </div>
      <q-button @click="openDrawer('exp5')">Показать панель</q-button>
    </q-code-block>

    <!-- Scrolling -->
    <h3 id="scrolling">
      <router-link to="/components/drawer?id=scrolling">
        <span>Прокрутка (Scrolling)</span>
      </router-link>
    </h3>
    <p>
      По умолчанию высота панели никогда не будет превышать 100% высоты
      контейнера. Таким образом, панель не будут прокручиваться вместе со
      страницей, чтобы гарантировать, что верхний и нижний колонтитулы всегда
      доступны пользователю.
    </p>
    <q-code-block :value="example6">
      <q-drawer ref="exp6" :label="'Drawer'">
        <div
          style="
            height: 150vh;
            border: dashed 2px var(--q-color-neutral-200);
            padding: 0 1rem;
          "
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
        <template #footer>
          <q-button variant="primary" @click="closeDrawer('exp6')">
            Закрыть
          </q-button>
        </template>
      </q-drawer>

      <q-button @click="openDrawer('exp6')">Показать панель</q-button>
    </q-code-block>

    <!--Header Actions-->
    <h3 id="header-actions">
      <router-link to="/components/drawer?id=header-actions">
        <span>Действия (Header Actions)</span>
      </router-link>
    </h3>
    <p>
      По умолчанию в шапке панели отображается функциональная кнопка закрытия.
      Вы можете использовать <code>slot</code> <code>header-actions</code>,
      чтобы добавить дополнительные кнопки, если это необходимо.
    </p>
    <q-code-block :value="example7">
      <q-drawer ref="exp7" :label="'Drawer'">
        <template #header-actions>
          <q-icon-button name="box-arrow-up-right"></q-icon-button>
        </template>
      </q-drawer>

      <q-button @click="openDrawer('exp7')">Показать панель</q-button>
    </q-code-block>
    <br />

    <!-- Slots -->
    <h3 id="slots">
      <router-link to="/components/drawer?id=slots">
        <span>Слоты (Slots)</span>
      </router-link>
    </h3>
    <q-grid>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <b>Название</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <b>Описание</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <span>(default)</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span>Основное содержимое панели.</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>label</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span>
            В качестве альтернативы вы можете использовать атрибут
            <code>label</code>.
          </span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>footer</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span>
            Нижний колонтитул панели, обычно одна или несколько кнопок,
            представляющих действия.
          </span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />

    <!--Attributes & Properties-->
    <h3 id="attributes-amp-properties">
      <router-link to="/components/drawer?id=attributes-amp-properties">
        <span>Атрибуты и свойства (Attributes & Properties)</span>
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
        <q-grid-col :col="{ xs: 2 }">
          <b>Тип</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <b>По умолчанию</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>open</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Параметр отвечает за отображение панели. Вы можете переключить этот
            параметр, чтобы показать или скрывать панель, или использовать
            методы <code>show()</code> и <code>hide()</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>label</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Заголовок панели. Вы всегда должны указывать <code>Label</code>,
            даже если используете <code>noHeader</code>, поскольку это
            необходимо для надлежащего доступа. Если вам нужно отобразить HTML,
            используйте слот <code>label</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>''</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>placement</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Направление показа панели.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'top'</code> <br />
          <code>'end'</code> <br />
          <code>'bottom'</code> <br />
          <code>'start'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'end'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>contained</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            По умолчанию панель выдвигается из окна просмотра. Чтобы панель
            выдвинулся из родительского элемента, установите этот атрибут и
            добавьте
            <code>position: relative</code> родительскому элементу.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>noHeader</code><br />
          <code><small>no-header</small></code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Не отображает шапку панели. Это также приведет к скрытию кнопки
            закрытия по умолчанию, поэтому, убедитесь, что вы предоставляете
            пользователям простой и доступный способ закрыть панель
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />

    <!-- Methods -->
    <h3 id="methods">
      <router-link to="/components/drawer?id=methods">
        <span>Методы (Methods)</span>
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
        <q-grid-col :col="{ xs: 3 }">
          <b>Аргументы</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>show()</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Показывает панель</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>hide()</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Скрывает панель</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />

    <!-- Dependencies -->
    <h3 id="dependencies">
      <router-link to="/components/drawer?id=dependencies">
        <span>Зависимости (Dependencies)</span>
      </router-link>
    </h3>
    <p>Этот компонент импортирует следующие зависимости.</p>
    <ul>
      <li routerLink="/components/icon"><code>&lt;QIcon&gt;</code></li>
      <li routerLInk="/components/icon-button">
        <code>&lt;QIconButton&gt;</code>
      </li>
    </ul>
  </div>
</template>

<script>
import QHeadline from "@/blocks/Headline";
import { QDrawer } from "@/components/Drawer";
import { QButton } from "@/components/Button";
import { QCodeBlock } from "@/components/CodeBlock";
import { QIconButton } from "@/components/IconButton";
import { QDivider } from "@/components/Divider";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
import { QBadge } from "@/components/Badge";

export default {
  name: "DrawerView",
  components: {
    QHeadline,
    QDrawer,
    QButton,
    QCodeBlock,
    QIconButton,
    QDivider,
    QGrid,
    QGridRow,
    QGridCol,
    QBadge,
  },
  data() {
    return {
      open: false,
      example1: `<q-drawer ref="exp1" :label="'Drawer'">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <template #footer>
    <q-button variant="primary" @click="closeDrawer('exp1')">
      Закрыть
    </q-button>
  </template>
</q-drawer>

<q-button @click="openDrawer('exp1')">Показать панель</q-button>

...

methods: {
  openDrawer(exp) {
    this.$refs[exp].show();
  },

  closeDrawer(exp) {
    this.$refs[exp].hide();
  },
},

...`,
      example2: `<q-drawer ref="exp2" :label="'Drawer'" :placement="'start'">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <template #footer>
    <q-button variant="primary" @click="closeDrawer('exp2')">
      Закрыть
    </q-button>
  </template>
</q-drawer>

<q-button @click="openDrawer('exp3')">Показать панель</q-button>`,
      example3: `<q-drawer ref="exp3" :label="'Drawer'" :placement="'top'">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <template #footer>
    <q-button variant="primary" @click="closeDrawer('exp3')">
      Закрыть
    </q-button>
  </template>
</q-drawer>

<q-button @click="openDrawer('exp4')">Показать панель</q-button>`,
      example4: `<q-drawer ref="exp4" :label="'Drawer'" :placement="'bottom'">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <template #footer>
    <q-button variant="primary" @click="closeDrawer('exp4')">
      Закрыть
    </q-button>
  </template>
</q-drawer>

<q-button @click="openDrawer('exp4')">Показать панель</q-button>`,
      example5: `<div
    style="
      position: relative;
      border: solid 2px var(--q-panel-border-color);
      height: 300px;
      padding: 1rem;
      margin-bottom: 1rem;
      overflow: hidden;
    "
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book.

    <q-drawer ref="exp5" :label="'Drawer'" contained>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <template #footer>
        <q-button variant="primary" @click="closeDrawer('exp5')">
          Закрыть
        </q-button>
      </template>
    </q-drawer>
  </div>
  <q-button @click="openDrawer('exp5')">Показать панель</q-button>
</q-code-block>`,
      example6: `<q-drawer ref="exp6" :label="'Drawer'">
  <div
    style="
      height: 150vh;
      border: dashed 2px var(--q-color-neutral-200);
      padding: 0 1rem;
    "
  >
    <p>Scroll down and give it a try! 👇</p>
  </div>
  <template #footer>
    <q-button variant="primary" @click="closeDrawer('exp6')">
      Закрыть
    </q-button>
  </template>
</q-drawer>

<q-button @click="openDrawer('exp6')">Показать панель</q-button>`,
      example7: `<q-drawer ref="exp7" :label="'Drawer'">
  <template #header-actions>
    <q-icon-button name="box-arrow-up-right"></q-icon-button>
  </template>
</q-drawer>

<q-button @click="openDrawer('exp7')">Показать панель</q-button>`,
    };
  },
  methods: {
    openDrawer(exp) {
      this.$refs[exp].show();
    },

    closeDrawer(exp) {
      this.$refs[exp].hide();
    },
  },
};
</script>

<style lang="scss" scoped></style>
