<template>
  <div class="q-alert-view">
    <q-headline tag="<q-alert> | QAlert">Alert</q-headline>
    <h3>
      Оповещения используются для отображения важных сообщений в строке или в
      виде всплывающих уведомлений.
    </h3>
    <q-code-block :value="alert">
      <q-alert open>
        <template v-slot:icon>
          <q-icon name="info-circle"></q-icon>
        </template>
        Это стандартное оповещение. Вы можете настроить его содержимое и иконку.
      </q-alert>
    </q-code-block>
    <p>
      Оповещения не будут видны, если отсутствует атрибут <code>open</code>.
    </p>
    <br />
    <h2 id="examples">
      <router-link to="/components/alert?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="variants">
      <router-link to="/components/alert?id=variants">
        <span>Варианты (Variants)</span>
      </router-link>
    </h3>
    <p>
      Установите входной параметр <code>variant</code>, чтобы изменить вид
      оповещения.
    </p>
    <q-code-block :value="variants">
      <q-alert variant="primary" open>
        <template v-slot:icon>
          <q-icon name="info-circle"></q-icon>
        </template>
        <strong>Заголовок уведомления</strong><br />
        Текст всплывающего уведомления.
      </q-alert>

      <q-alert variant="success" open>
        <template v-slot:icon>
          <q-icon name="check2-circle"></q-icon>
        </template>
        <strong>Заголовок уведомления</strong><br />
        Текст всплывающего уведомления
      </q-alert>

      <q-alert variant="neutral" open>
        <template v-slot:icon>
          <q-icon name="gear"></q-icon>
        </template>
        <strong>Заголовок уведомления</strong><br />
        Текст всплывающего уведомления
      </q-alert>

      <q-alert variant="warning" open>
        <template v-slot:icon>
          <q-icon name="exclamation-triangle"></q-icon>
        </template>
        <strong>Заголовок уведомления</strong><br />
        Текст всплывающего уведомления
      </q-alert>

      <q-alert variant="danger" open>
        <template v-slot:icon>
          <q-icon name="exclamation-octagon"></q-icon>
        </template>
        <strong>Заголовок уведомления</strong><br />
        Текст всплывающего уведомления
      </q-alert>
    </q-code-block>
    <br />
    <h3 id="closable">
      <router-link to="/components/alert?id=closable">
        <span>Закрываемый (Сlosable)</span>
      </router-link>
    </h3>
    <p>
      Установите входной параметр <code>closable</code>, чтобы изменить включить
      возможность закрытия уведомления.
    </p>
    <q-code-block :value="closeable">
      <q-alert ref="closable" variant="primary" open closable>
        <template v-slot:icon>
          <q-icon name="info-circle"></q-icon>
        </template>
        Вы можете закрыть это оповещение в любое время!
      </q-alert>
    </q-code-block>
    <br />
    <h3 id="without-icons">
      <router-link to="/components/alert?id=without-icons">
        <span>Без изображения (Without Icons)</span>
      </router-link>
    </h3>
    <p>
      Иконки необязательны. Просто не указывайте слот <code>icon</code>, если
      они не нужны.
    </p>
    <q-code-block :value="withOutIcons">
      <q-alert variant="primary" open>
        Нет ничего особенного, просто предупреждение.
      </q-alert>
    </q-code-block>
    <br />
    <h3 id="duration">
      <router-link to="/components/alert?id=duration">
        <span>Продолжительность (Duration)</span>
      </router-link>
    </h3>
    <p>
      Установите входной параметр <code>duration</code>, чтобы автоматически
      скрывать предупреждение по истечении определенного периода времени. Это
      полезно для предупреждений, не требующих подтверждения.
    </p>
    <q-code-block :value="withOutIcons">
      <div class="alert-duration">
        <q-button variant="primary" @click="showAlertDuration()">
          Показать
        </q-button>

        <q-alert
          variant="primary"
          :open="openAlertDuration"
          :duration="3000"
          closable
        >
          <template v-slot:icon>
            <q-icon name="info-circle"></q-icon>
          </template>
          Это оповещение автоматически скроется через три секунды, если вы
          взаимодействуете с ним.
        </q-alert>
      </div>
    </q-code-block>
    <br />

    <h3 id="toast-notifications">
      <router-link to="/components/alert?id=toast-notifications">
        <span>Toast уведомления (Toast Notifications)</span>
      </router-link>
    </h3>
    <p>
      Чтобы отобразить всплывающее уведомление, создайте <code>QAlert</code> и
      вызовите его метод <code>toast()</code>. Это переместит всплывающее
      уведомление из его позиции в DOM в стек всплывающих уведомлений. После
      того как уведомление исчезнет стек будет полностью удален из DOM.
    </p>
    <q-code-block :value="toast">
      <div class="alert-toast">
        <q-button variant="primary" @click="openToast('alert-primary')">
          Primary
        </q-button>
        <q-button variant="success" @click="openToast('alert-success')">
          Success
        </q-button>
        <q-button variant="neutral" @click="openToast('alert-neutral')">
          Neutral
        </q-button>
        <q-button variant="warning" @click="openToast('alert-warning')">
          Warning
        </q-button>
        <q-button variant="danger" @click="openToast('alert-danger')">
          Danger
        </q-button>

        <q-alert
          ref="alert-primary"
          variant="primary"
          :duration="3000"
          closable
        >
          <template v-slot:icon>
            <q-icon name="info-circle"></q-icon>
          </template>
          <strong>Это очень информативно</strong><br />
          Текст всплывающего уведомления.
        </q-alert>

        <q-alert
          ref="alert-success"
          variant="success"
          :duration="3000"
          closable
        >
          <template v-slot:icon>
            <q-icon name="info-circle"></q-icon>
          </template>
          <strong>Это очень информативно</strong><br />
          Текст всплывающего уведомления.
        </q-alert>

        <q-alert
          ref="alert-neutral"
          variant="neutral"
          :duration="3000"
          closable
        >
          <template v-slot:icon>
            <q-icon name="info-circle"></q-icon>
          </template>
          <strong>Это очень информативно</strong><br />
          Текст всплывающего уведомления.
        </q-alert>

        <q-alert
          ref="alert-warning"
          variant="warning"
          :duration="3000"
          closable
        >
          <template v-slot:icon>
            <q-icon name="info-circle"></q-icon>
          </template>
          <strong>Это очень информативно</strong><br />
          Текст всплывающего уведомления.
        </q-alert>

        <q-alert ref="alert-danger" variant="danger" :duration="3000" closable>
          <template v-slot:icon>
            <q-icon name="info-circle"></q-icon>
          </template>
          <strong>Это очень информативно</strong><br />
          Текст всплывающего уведомления.
        </q-alert>
      </div>
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
          <code>variant</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Вариант представления бейджа</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'primary'</code> <br />
          <code>'success'</code><br />
          <code>'neutral'</code><br />
          <code>'warning'</code><br />
          <code>'danger'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'primary'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>open</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Указывает, открыто ли оповещение. Возможно использовать вместо
            методов show/hide.
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
          <code>closable</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span> Показывает кнопку закрытия оповещения </span>
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
          <code>duration</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>
            Промежуток времени в миллисекундах, в течение которого оповещение
            будет отображаться до закрытия. Если пользователь взаимодействует с
            предупреждением до его закрытия (например, наводит на него указатель
            мыши), таймер перезапускается. По умолчанию бесконечность.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>-</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>Infinity</code>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />
    <h3 id="slots">
      <router-link to="/components/alert?id=slots">
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
          <span> Контент всплывающего сообщения </span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>icon</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 10 }">
          <span> Иконка для всплывающего сообщения </span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QAlert } from "@/components/Alert";
import { QCodeBlock } from "@/components/CodeBlock";
import { QIcon } from "@/components/Icon";
import { QGrid, QGridRow, QGridCol } from "@/components/Grid";
import { QDivider } from "@/components/Divider";
import { QButton } from "@/components/Button";

export default {
  name: "QAvatarView",
  components: {
    QHeadline,
    QCodeBlock,
    QGrid,
    QGridRow,
    QGridCol,
    QDivider,
    QAlert,
    QIcon,
    QButton,
  },
  data() {
    return {
      alert: `<q-alert open>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  Это стандартное оповещение. Вы можете настроить его содержимое и иконку.
</q-alert>`,
      variants: `<q-alert variant="primary" open>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  <strong>Заголовок уведомления</strong><br />
  Текст всплывающего уведомления.
</q-alert>

<q-alert variant="success" open>
  <template v-slot:icon>
    <q-icon name="check2-circle"></q-icon>
  </template>
  <strong>Заголовок уведомления</strong><br />
  Текст всплывающего уведомления
</q-alert>

<q-alert variant="neutral" open>
  <template v-slot:icon>
    <q-icon name="gear"></q-icon>
  </template>
  <strong>Заголовок уведомления</strong><br />
  Текст всплывающего уведомления
</q-alert>

<q-alert variant="warning" open>
  <template v-slot:icon>
    <q-icon name="exclamation-triangle"></q-icon>
  </template>
  <strong>Заголовок уведомления</strong><br />
  Текст всплывающего уведомления
</q-alert>

<q-alert variant="danger" open>
  <template v-slot:icon>
    <q-icon name="exclamation-octagon"></q-icon>
  </template>
  <strong>Заголовок уведомления</strong><br />
  Текст всплывающего уведомления
</q-alert>`,
      closeable: `<q-alert variant="primary" open closable">
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  Вы можете закрыть это оповещение в любое время!
</q-alert>`,
      withOutIcons: `<q-alert variant="primary" open>
  Нет ничего особенного, просто предупреждение.
</q-alert>`,
      openAlertDuration: false,
      toast: `<div class="alert-toast">
<q-button variant="primary" @click="openToast('alert-primary')">
  Primary
</q-button>
<q-button variant="success" @click="openToast('alert-success')">
  Success
</q-button>
<q-button variant="neutral" @click="openToast('alert-neutral')">
  Neutral
</q-button>
<q-button variant="warning" @click="openToast('alert-warning')">
  Warning
</q-button>
<q-button variant="danger" @click="openToast('alert-danger')">
  Danger
</q-button>

<q-alert
  ref="alert-primary"
  variant="primary"
  :duration="3000"
  closable
>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  <strong>Это очень информативно</strong><br />
  Текст всплывающего уведомления.
</q-alert>

<q-alert
  ref="alert-success"
  variant="success"
  :duration="3000"
  closable
>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  <strong>Это очень информативно</strong><br />
  Текст всплывающего уведомления.
</q-alert>

<q-alert
  ref="alert-neutral"
  variant="neutral"
  :duration="3000"
  closable
>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  <strong>Это очень информативно</strong><br />
  Текст всплывающего уведомления.
</q-alert>

<q-alert
  ref="alert-warning"
  variant="warning"
  :duration="3000"
  closable
>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  <strong>Это очень информативно</strong><br />
  Текст всплывающего уведомления.
</q-alert>

<q-alert ref="alert-danger" variant="danger" :duration="3000" closable>
  <template v-slot:icon>
    <q-icon name="info-circle"></q-icon>
  </template>
  <strong>Это очень информативно</strong><br />
  Текст всплывающего уведомления.
</q-alert>
</div>`,
    };
  },
  methods: {
    showAlertDuration() {
      this.openAlertDuration = true;
    },
    openToast(toast) {
      this.$refs[toast].toast();
    },
  },
};
</script>

<style lang="scss" scoped>
.alert-duration .q-button {
  margin-bottom: 0.5rem;
}
.alert-toast .q-button {
  margin-right: 0.5rem;
}
</style>
