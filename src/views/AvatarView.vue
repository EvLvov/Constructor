<template>
  <div class="q-avatar-view">
    <q-headline tag="<q-avatar> | QAvatar">Avatar</q-headline>
    <p>
      По умолчанию отображается изображение поумолчанию. Вы можете
      персонализировать аватары, добавляя собственные значки, инициалы и
      изображения.
    </p>
    <q-code-block :value="`<q-avatar></q-avatar>`">
      <q-avatar></q-avatar>
    </q-code-block>
    <br />
    <h2 id="examples">
      <router-link to="/components/avatar?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="images">
      <router-link to="/components/avatar?id=images">
        <span>Изображения (Images)</span>
      </router-link>
    </h3>
    <p>
      Чтобы использовать изображение для аватара, установите входной параметр
      <code>image</code>. Установленное изображение приоритетнее инициалов.
    </p>
    <q-code-block :value="images">
      <q-avatar
        image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
      ></q-avatar>
    </q-code-block>
    <br />
    <h3 id="initials">
      <router-link to="/components/avatar?id=initials">
        <span>Инициалы (Initials)</span>
      </router-link>
    </h3>
    <p>
      Если нет изображения, возможно установить входной параметр
      <code>initials</code>, чтобы показать инициалы.
    </p>
    <q-code-block :value="initials">
      <q-avatar initials="VK"></q-avatar>
    </q-code-block>
    <br />
    <h3 id="icons">
      <router-link to="/components/avatar?id=icons">
        <span>Иконки (Icons)</span>
      </router-link>
    </h3>
    <p>
      Если изображение или инициалы не установлены, отображается изображение по
      умолчанию. Аватар по умолчанию показывает "user", но вы можете установить
      его с помощью <code>slot</code>.
    </p>
    <q-code-block :value="icons">
      <q-avatar>
        <template v-slot:icon>
          <q-icon name="image"></q-icon>
        </template>
      </q-avatar>
      <q-avatar>
        <template v-slot:icon>
          <q-icon name="archive"></q-icon>
        </template>
      </q-avatar>
      <q-avatar>
        <template v-slot:icon>
          <q-icon name="briefcase"></q-icon>
        </template>
      </q-avatar>
    </q-code-block>
    <br />
    <h3 id="shapes">
      <router-link to="/components/avatar?id=shapes">
        <span>Форма (Shapes)</span>
      </router-link>
    </h3>
    <p>
      Аватарам можно придать форму с помощью входного параметра
      <code>shape</code>.
    </p>
    <q-code-block :value="shapes">
      <q-avatar shape="square"></q-avatar>
      <q-avatar shape="rounded"></q-avatar>
      <q-avatar shape="circle"></q-avatar>
    </q-code-block>
    <br />

    <h3 id="properties">
      <router-link to="/components/avatar?id=properties">
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
          <code>image</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Изображение для установки в качестве аватара</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>-</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>initials</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Инициалы </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>-</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>shape</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Форма контейнера </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'circle'</code><br />
          <code>'square'</code><br />
          <code>'rounded'</code><br />
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'circle'</code>
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
          <span>icon</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span>
            Изображение по умолчанию, используемое при отсутствии изображения
            или инициалов.
          </span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>

    <br />
    <h3 id="dependencies">
      <router-link to="/components/checkbox?id=dependencies">
        <span>Зависимости (Dependencies)</span>
      </router-link>
    </h3>
    <ul>
      <li>
        <code> QIcon </code>
      </li>
    </ul>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QAvatar } from "@/components/Avatar";
import { QCodeBlock } from "@/components/CodeBlock";
import { QIcon } from "@/components/Icon";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
import { QDivider } from "@/components/Divider";

export default {
  name: "QAvatarView",
  components: {
    QHeadline,
    QCodeBlock,
    QAvatar,
    QIcon,
    QGrid,
    QGridRow,
    QGridCol,
    QDivider,
  },
  data() {
    return {
      images: `<q-avatar 
    image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80">
</q-avatar>`,
      initials: `<q-avatar initials="VK"></q-avatar>`,
      icons: `<q-avatar>
    <template v-slot:icon>
        <q-icon name="image"></q-icon>
    </template>
</q-avatar>
<q-avatar>
    <template v-slot:icon>
        <q-icon name="archive"></q-icon>
    </template>
</q-avatar>
<q-avatar>
    <template v-slot:icon>
        <q-icon name="briefcase"></q-icon>
    </template>
</q-avatar>`,
      shapes: `<q-avatar shape="square"></q-avatar>
<q-avatar shape="rounded"></q-avatar>
<q-avatar shape="circle"></q-avatar>`,
    };
  },
};
</script>
<style lang="scss" scoped>
.q-avatar {
  margin-right: 0.5rem;
}
</style>
