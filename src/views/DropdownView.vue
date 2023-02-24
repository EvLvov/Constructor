<template>
  <div>
    <q-headline tag="<q-dropdown> | QDropdown" version="stable">
      Dropdown
      <template #info>
        <q-badge variant="success" pill>Stable</q-badge>
      </template>
    </q-headline>
    <h3>
      Выпадающий список - это элемент графического интерфейса пользователя,
      позволяющий выбрать одно из нескольких заранее определённых значений
      параметра.
    </h3>
    <p>
      Выпадающие списки состоят из триггера и самого выпадающего списка на
      панели. По умолчанию клик в область тригера приведет к открытию списка, а
      клик вне области панели закроет этот список.
    </p>
    <p>
      Выпадающие списки предназначены для работы с меню, предоставляя список
      опций, из которых пользователь может выбрать необходимоее. Однако
      выпадающие списки также можно использовать в приложениях более низкого
      уровня (например, средство выбора цвета и select). API дает вам полный
      контроль над отображением, скрытием и позиционированием панели.
    </p>

    <q-code-block :value="dropdown">
      <q-dropdown>
        <template #trigger>
          <q-button variant="default" caret>Выпадающий список</q-button>
        </template>
        <q-menu>
          <q-menu-item @click="handleClick()">Элемент списка 1</q-menu-item>
          <q-menu-item @click="handleClick()">Элемент списка 2</q-menu-item>
          <q-menu-item @click="handleClick()">Элемент списка 3</q-menu-item>
          <q-divider></q-divider>
          <q-menu-item checked>Проверен</q-menu-item>
          <q-menu-item disabled>Отключенный</q-menu-item>
          <q-divider></q-divider>
          <q-menu-item>
            <span>Префикс</span>
            <template #prefix>
              <q-icon name="gift"></q-icon>
            </template>
          </q-menu-item>
          <q-menu-item>
            <span>Суффикс</span>
            <template #suffix>
              <q-icon name="heart"></q-icon>
            </template>
          </q-menu-item>
        </q-menu>
      </q-dropdown>
    </q-code-block>

    <!-- Examples -->
    <h2 id="examples">
      <router-link to="/components/badge?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>

    <!-- Placement -->
    <h3>Размещение (Placement)</h3>
    <p>
      Предпочтительное размещение выпадающего списка можно задать с помощью
      атрибута <code>placement</code>. Обратите внимание, что фактическое
      положение может изменяться, чтобы гарантировать, что панель остается в
      области видимости.
    </p>

    <q-code-block :value="placement">
      <q-dropdown placement="top-start">
        <template #trigger>
          <q-button variant="default" caret>Выпадающий список</q-button>
        </template>
        <q-menu>
          <q-menu-item>Вырезать</q-menu-item>
          <q-menu-item>Копировать</q-menu-item>
          <q-menu-item>Вставить</q-menu-item>
          <q-divider></q-divider>
          <q-menu-item>Найти</q-menu-item>
          <q-menu-item>Заменить</q-menu-item>
        </q-menu>
      </q-dropdown>
    </q-code-block>

    <!-- Distance-->
    <h3>Расстояние (Distance)</h3>
    <p>
      Расстояние от выпадающего списка до триггера можно настроить с помощью
      входного параметра <code>distance</code>. Это значение указывается в
      пикселях.
    </p>
    <q-code-block :value="distance">
      <q-dropdown :distance="30">
        <template #trigger>
          <q-button variant="default" caret>Выпадающий список</q-button>
        </template>
        <q-menu>
          <q-menu-item>Вырезать</q-menu-item>
          <q-menu-item>Копировать</q-menu-item>
          <q-menu-item>Вставить</q-menu-item>
          <q-divider></q-divider>
          <q-menu-item>Найти</q-menu-item>
          <q-menu-item>Заменить</q-menu-item>
        </q-menu>
      </q-dropdown>
    </q-code-block>

    <!-- Skidding -->
    <h3>Смещение (Skidding)</h3>
    <p>
      Смещение выпадающего списка вдоль триггера настраивается с помощью
      параметра <code>skidding</code>. Это значение указывается в пикселях.
    </p>
    <q-code-block :value="skidding">
      <q-dropdown :skidding="30">
        <template #trigger>
          <q-button variant="default" caret>Выпадающий список</q-button>
        </template>
        <q-menu>
          <q-menu-item>Вырезать</q-menu-item>
          <q-menu-item>Копировать</q-menu-item>
          <q-menu-item>Вставить</q-menu-item>
          <q-divider></q-divider>
          <q-menu-item>Найти</q-menu-item>
          <q-menu-item>Заменить</q-menu-item>
        </q-menu>
      </q-dropdown>
    </q-code-block>

    <!-- Hoisting -->
    <h3>Подъем (Hoisting)</h3>
    <p>
      Выпадающие списки будут обрезаны, если они находятся внутри контейнера с
      параметром <code>overflow: auto | hidden</code>. Параметр
      <code>hoist</code> использует стратегию фиксированного позиционирования,
      позволяя выпадающему списку выходить за область контейнера. В данном
      случае выпадающий список будет расположен относительно содержащего блока,
      который, если только предок не использует <code>transform</code>,
      <code>perspective</code> или <code>filter</code>.
    </p>
    <q-code-block :value="hoisting">
      <div class="dropdown-hoist">
        <q-dropdown>
          <template #trigger>
            <q-button variant="default" caret>Выпадающий список</q-button>
          </template>
          <q-menu>
            <q-menu-item>Элемент списка 1</q-menu-item>
            <q-menu-item>Элемент списка 2</q-menu-item>
            <q-menu-item>Элемент списка 3</q-menu-item>
          </q-menu>
        </q-dropdown>

        <q-dropdown hoist>
          <template #trigger>
            <q-button variant="default" caret>Выпадающий список</q-button>
          </template>
          <q-menu>
            <q-menu-item>Элемент списка 1</q-menu-item>
            <q-menu-item>Элемент списка 2</q-menu-item>
            <q-menu-item>Элемент списка 3</q-menu-item>
          </q-menu>
        </q-dropdown>
      </div>
    </q-code-block>

    <br />
    <h3 id="properties">
      <router-link to="/components/dropdown?id=properties">
        <span>Свойства (Properties)</span>
      </router-link>
    </h3>
    <q-grid>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <b>Имя</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <b>Описание</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <b>Тип</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <b> По-умолчанию</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>open</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span> Открывает выпадающий список или нет. </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>placement</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Ррасположение выпадающего списка. Обратите внимание, что фактическое
            расположение может изменяться по мере необходимости, чтобы
            выпадающий список оставался внутри области видимости.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>'top'</code> <br />
          <code>'top-start'</code> <br />
          <code>'top-end'</code> <br />
          <code>'right'</code> <br />
          <code>'right-start'</code> <br />
          <code>'right-end'</code> <br />
          <code>'bottom'</code> <br />
          <code>'bottom-start'</code> <br />
          <code>'bottom-end'</code> <br />
          <code>'left'</code> <br />
          <code>'left-start'</code> <br />
          <code>'left-end'</code> <br />
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'bottom-start'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>disabled</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Отключает выпадающий список.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>stayOpenOnSelect</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            По умолчанию выпадающий список закрывается при выборе элемента.
            Параметр сохранит его открытым. Полезно для элементов управления,
            допускающих множественный выбор.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>distance</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Расстояние в пикселях, на которое следует сместить выпадающий список
            от триггера.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>number</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>0</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>skidding</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Расстояние в пикселях, с которого следует смещать выпадающий список
            вдоль ее триггера.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>number</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>0</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>hoist</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Включите этот параметр, чтобы предотвратить обрезку панели при
            размещении компонента внутри контейнера с
            <code>overflow: auto|scroll</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />
    <h3 id="slots">
      <router-link to="/components/dropdown?id=slots">
        <span>Слоты (slots)</span>
      </router-link>
    </h3>
    <q-grid>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <b>Имя</b>
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
        <q-grid-col :col="{ xs: 10 }">
          <span>Содержимое выпадающего списка</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>trigger</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span>Триггер выпадающего списка</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />
    <h3 id="dependencies">
      <router-link to="/components/dropdown?id=dependencies">
        <span>Зависимости (Dependencies)</span>
      </router-link>
    </h3>
    <p>Этот компонент импортирует следующие зависимости.</p>
    <ul>
      <li><code>&lt;q-popup&gt;</code></li>
    </ul>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline.vue";
import { QDropdown } from "@/components/Dropdown";
import { QButton } from "@/components/Button";
import { QMenu, QMenuItem } from "@/components/Menu";
import { QIcon } from "@/components/Icon";
import { QCodeBlock } from "@/components/CodeBlock";
import { QDivider } from "@/components/Divider";
import { QGrid, QGridCol, QGridRow } from "@/components/Grid";
import { QBadge } from "@/components/Badge";

export default {
  name: "SelectView",
  components: {
    QHeadline,
    QDropdown,
    QButton,
    QMenu,
    QMenuItem,
    QDivider,
    QIcon,
    QCodeBlock,
    QGrid,
    QGridRow,
    QGridCol,
    QBadge,
  },
  data() {
    return {
      dropdown: `<q-dropdown>
  <template #trigger>
    <q-button variant="default" caret>Выпадающий список</q-button>
  </template>
  <q-menu>
    <q-menu-item @click="handleClick()">Выпадающий пункт 1</q-menu-item>
    <q-menu-item @click="handleClick()">Выпадающий пункт 2</q-menu-item>
    <q-menu-item @click="handleClick()">Выпадающий пункт 3</q-menu-item>
    <q-divider></q-divider>
    <q-menu-item checked>Проверен</q-menu-item>
    <q-menu-item disabled>Отключенный</q-menu-item>
    <q-divider></q-divider>
    <q-menu-item>
      <span>Префикс</span>
      <template #prefix>
        <q-icon name="gift"></q-icon>
      </template>
    </q-menu-item>
    <q-menu-item>
      <span>Суффикс</span>
      <template #suffix>
        <q-icon name="heart"></q-icon>
      </template>
    </q-menu-item>
  </q-menu>
</q-dropdown>`,
      selection: `
<div class="dropdown-selection">
  <q-dropdown>
    <q-button variant="default" caret>Редактировать</q-button>
      <q-menu>
        <q-menu-item>Вырезать</q-menu-item>
        <q-menu-item>Копировать2</q-menu-item>
        <q-menu-item>Вставить</q-menu-item>
      </q-menu>
    </q-dropdown>
  </div>

const container = document.querySelector(".dropdown-selection");
const dropdown = container.querySelector("q-dropdown");

dropdown.addEventListener("q-select", (event) => {
const selectedItem = event.detail.item;
console.log(selectedItem.value);
});
      `,
      selectionAlt: `
<div class="dropdown-selection-alt">
  <q-dropdown>
    <q-button variant="default" caret>Редактировать</q-button>
      <q-menu>
        <q-menu-item>Вырезать</q-menu-item>
        <q-menu-item>Копировать2</q-menu-item>
        <q-menu-item>Вставить</q-menu-item>
      </q-menu>
  </q-dropdown>
</div>
  
const container = document.querySelector(".dropdown-selection-alt");
const cut = container.querySelector('q-menu-item[value="cut"]');
const copy = container.querySelector('q-menu-item[value="copy"]');
const paste = container.querySelector('q-menu-item[value="paste"]');

cut.addEventListener("click", () => console.log("cut"));
copy.addEventListener("click", () => console.log("copy"));
paste.addEventListener("click", () => console.log("paste"));
      `,
      placement: `<q-dropdown placement="top-start">
  <template #trigger>
    <q-button variant="default" caret>Выпадающий список</q-button>
  </template>
  <q-menu>
    <q-menu-item>Вырезать</q-menu-item>
    <q-menu-item>Копировать</q-menu-item>
    <q-menu-item>Вставить</q-menu-item>
    <q-divider></q-divider>
    <q-menu-item>Найти</q-menu-item>
    <q-menu-item>Заменить</q-menu-item>
  </q-menu>
</q-dropdown>`,
      distance: `<q-dropdown :distance="30">
  <template #trigger>
    <q-button variant="default" caret>Выпадающий список</q-button>
  </template>
  <q-menu>
    <q-menu-item>Вырезать</q-menu-item>
    <q-menu-item>Копировать</q-menu-item>
    <q-menu-item>Вставить</q-menu-item>
    <q-divider></q-divider>
    <q-menu-item>Найти</q-menu-item>
    <q-menu-item>Заменить</q-menu-item>
  </q-menu>
</q-dropdown>`,
      skidding: `<q-dropdown :skidding="30">
  <template #trigger>
    <q-button variant="default" caret>Выпадающий список</q-button>
  </template>
  <q-menu>
    <q-menu-item>Вырезать</q-menu-item>
    <q-menu-item>Копировать</q-menu-item>
    <q-menu-item>Вставить</q-menu-item>
    <q-divider></q-divider>
    <q-menu-item>Найти</q-menu-item>
    <q-menu-item>Заменить</q-menu-item>
  </q-menu>
</q-dropdown>`,
      hoisting: `<q-dropdown>
  <template #trigger>
    <q-button variant="default" caret>Выпадающий список</q-button>
  </template>
  <q-menu>
    <q-menu-item>Элемент списка 1</q-menu-item>
    <q-menu-item>Элемент списка 2</q-menu-item>
    <q-menu-item>Элемент списка 3</q-menu-item>
  </q-menu>
</q-dropdown>

<q-dropdown hoist>
  <template #trigger>
    <q-button variant="default" caret>Выпадающий список</q-button>
  </template>
  <q-menu>
    <q-menu-item>Элемент списка 1</q-menu-item>
    <q-menu-item>Элемент списка 2</q-menu-item>
    <q-menu-item>Элемент списка 3</q-menu-item>
  </q-menu>
</q-dropdown>`,
    };
  },
  methods: {
    handleClick() {
      console.log("click");
    },
  },
};
</script>

<style scoped>
.dropdown-hoist {
  position: relative;
  border: solid 2px var(--q-panel-border-color);
  padding: var(--q-spacing-medium);
  overflow: hidden;
}
.dropdown-hoist .q-dropdown,
code {
  margin-right: 0.5rem;
}
</style>
