<template>
  <div class="q-menu-item-view">
    <q-headline tag="<q-menu-item> | QMenuItem">Menu Item</q-headline>
    <h3>
      Элементы меню предоставляют пользователю возможность варианта выбора.
    </h3>
    <q-code-block :value="menu">
      <q-menu style="max-width: 200px">
        <q-menu-item>Option 1</q-menu-item>
        <q-menu-item>Option 2</q-menu-item>
        <q-menu-item>Option 3</q-menu-item>
        <q-divider></q-divider>
        <q-menu-item checked>Checked</q-menu-item>
        <q-menu-item disabled>Disabled</q-menu-item>
        <q-divider></q-divider>
        <q-menu-item>
          Prefix Icon
          <template v-slot:prefix>
            <q-icon name="gift"></q-icon>
          </template>
        </q-menu-item>
        <q-menu-item>
          Suffix Icon
          <template v-slot:suffix>
            <q-icon name="heart"></q-icon>
          </template>
        </q-menu-item>
      </q-menu>
    </q-code-block>
    <br />
    <h2 id="examples">
      <router-link to="/components/menu-item?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="checked">
      <router-link to="/components/menu-item?id=checked">
        <span>Отмеченные (Checked)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>checked</code> для того что бы добавить
      галку
    </p>
    <q-code-block :value="checked">
      <q-menu style="max-width: 200px">
        <q-menu-item>Option 1</q-menu-item>
        <q-menu-item checked>Option 2</q-menu-item>
        <q-menu-item>Option 3</q-menu-item>
      </q-menu>
    </q-code-block>
    <br />
    <h3 id="disabled">
      <router-link to="/components/menu-item?id=disabled">
        <span>Отключенные пункты меню (Disabled)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>disabled</code> для того что бы
      отключить возможность выбора.
    </p>
    <q-code-block :value="disabled">
      <q-menu style="max-width: 200px">
        <q-menu-item>Option 1</q-menu-item>
        <q-menu-item disabled>Option 2</q-menu-item>
        <q-menu-item>Option 3</q-menu-item>
      </q-menu>
    </q-code-block>
    <br />
    <h3 id="prefix-and-suffix">
      <router-link to="/components/menu-item?id=prefix-and-suffix">
        <span>Префикс и суффикс (Prefix & Suffix)</span>
      </router-link>
    </h3>
    <p>
      Добавьте содержимое в начало и конец пункта меню, используя слоты
      <code>prefix</code> и <code>suffix</code>.
    </p>
    <q-code-block :value="prefix">
      <q-menu style="max-width: 200px">
        <q-menu-item>
          <template v-slot:prefix>
            <q-icon name="house"></q-icon>
          </template>
          Home
        </q-menu-item>

        <q-menu-item>
          <template v-slot:prefix>
            <q-icon name="envelope"></q-icon>
          </template>

          Messages
          <template v-slot:suffix>
            <q-badge variant="primary" pill>12</q-badge>
          </template>
        </q-menu-item>

        <q-divider></q-divider>

        <q-menu-item>
          <template v-slot:prefix>
            <q-icon name="gear"></q-icon>
          </template>
          Settings
        </q-menu-item>
      </q-menu>
    </q-code-block>
    <br />

    <h3 id="properties">
      <router-link to="/components/checkbox?id=properties">
        <span>Свойства (Properties)</span>
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
          <b>Поумолчанию</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>checked</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Рисует отмеченное состояние</span>
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
          <code>value</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Уникальное значение для сохранения в пункте меню. Возможно
            использовать как способ идентификации пунктов меню при их выборе.
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
          <code>disabled</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Блокирует возможность выбора элемента меню </span>
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
    <h3 id="slots">
      <router-link to="/components/checkbox?id=slots">
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
          <span>default</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span> Название пункта меню </span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>prefix</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span> Используйте слот для вывода префикса </span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>suffix</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span> Используйте слот для вывода суффикса </span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QMenu, QMenuItem } from "@/components/Menu";
import { QCodeBlock } from "@/components/CodeBlock";
import { QIcon } from "@/components/Icon";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
import { QDivider } from "@/components/Divider";
import { QBadge } from "@/components/Badge";

export default {
  name: "QAvatarView",
  components: {
    QHeadline,
    QCodeBlock,
    QGrid,
    QGridRow,
    QGridCol,
    QDivider,
    QMenu,
    QMenuItem,
    QIcon,
    QBadge,
  },
  data() {
    return {
      menu: `<q-menu style="max-width: 200px">
  <q-menu-item>Option 1</q-menu-item>
  <q-menu-item>Option 2</q-menu-item>
  <q-menu-item>Option 3</q-menu-item>
  <q-divider></q-divider>
  <q-menu-item checked>Checked</q-menu-item>
  <q-menu-item disabled>Disabled</q-menu-item>
  <q-divider></q-divider>
  <q-menu-item>
    Prefix Icon
    <template v-slot:prefix>
      <q-icon name="gift"></q-icon>
    </template>
  </q-menu-item>
  <q-menu-item>
    Suffix Icon
    <template v-slot:suffix>
      <q-icon name="heart"></q-icon>
    </template>
  </q-menu-item>
</q-menu>`,
      checked: `<q-menu style="max-width: 200px">
  <q-menu-item>Option 1</q-menu-item>
  <q-menu-item checked>Option 2</q-menu-item>
  <q-menu-item>Option 3</q-menu-item>
</q-menu>`,
      disabled: `<q-menu style="max-width: 200px">
  <q-menu-item>Option 1</q-menu-item>
  <q-menu-item checked>Option 2</q-menu-item>
  <q-menu-item>Option 3</q-menu-item>
</q-menu>`,
      prefix: `<q-menu style="max-width: 200px">
  <q-menu-item>
    <template v-slot:prefix>
      <q-icon name="house"></q-icon>
    </template>
    Home
  </q-menu-item>

  <q-menu-item>
    <template v-slot:prefix>
      <q-icon name="envelope"></q-icon>
    </template>

    Messages
    <template v-slot:suffix>
      <q-badge variant="primary" pill>12</q-badge>
    </template>
  </q-menu-item>

  <q-divider></q-divider>

  <q-menu-item>
    <template v-slot:prefix>
      <q-icon name="gear"></q-icon>
    </template>
    Settings
  </q-menu-item>
</q-menu>`,
    };
  },
};
</script>
