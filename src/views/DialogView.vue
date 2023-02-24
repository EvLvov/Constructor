<template>
  <div class="q-dialog-view">
    <q-headline tag="<q-dialog> | QDialog">Dialog</q-headline>
    <h3>
      Диалоги, иногда называемые «модальными окнами», появляются над страницей и
      требуют немедленного внимания пользователя.
    </h3>
    <q-code-block :value="dialog">
      <q-dialog ref="dialog" label="Dialog">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <template v-slot:footer>
          <q-button @click="hideDialog('dialog')" variant="primary">
            Закрыть
          </q-button>
        </template>
      </q-dialog>

      <q-button @click="openDialog('dialog')">Показать окно</q-button>
    </q-code-block>
    <br />
    <h2 id="examples">
      <router-link to="/components/popup?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <h3 id="width">
      <router-link to="/components/popup?id=width">
        <span>Ширина диалогового окна (Custom Width)</span>
      </router-link>
    </h3>
    <p></p>
    <q-code-block :value="dialogWidth">
      <q-dialog
        ref="widthDialog"
        label="Dialog"
        class="dialog-width"
        style="--width: 50vw"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </q-dialog>

      <q-button @click="openDialog('widthDialog')">Показать окно</q-button>
    </q-code-block>
    <br />

    <!-- Scrolling -->

    <h3 id="scrolling">
      <router-link to="/components/popup?id=scrolling">
        <span>Прокрутка в диалоговом окне (Scrolling)</span>
      </router-link>
    </h3>
    <p>
      Высота диалогового окна никогда не будет превышать высоту области
      просмотра.
    </p>
    <q-code-block :value="scrollingDialog">
      <q-dialog ref="scrollingDialog" label="Dialog" class="dialog-scrolling">
        <div
          style="
            height: 150vh;
            border: dashed 2px var(--q-color-neutral-200);
            padding: 0 1rem;
          "
        >
          <p>Scroll down and give it a try! 👇</p>
        </div>
      </q-dialog>

      <q-button @click="openDialog('scrollingDialog')">Показать окно</q-button>
    </q-code-block>
    <br />

    <!-- CloseOverlay -->

    <h3 id="block-close">
      <router-link to="/components/popup?id=block-close">
        <span>Блокировка закрытия окна</span>
      </router-link>
    </h3>
    <p>
      По умолчанию окна закрываются, когда пользователь нажимает кнопку
      закрытия, щелкает по наложению или нажимает клавишу Escape. Однако бывают
      ситуации, когда это может быть нежелательно, например, когда произойдет
      потеря данных.
    </p>
    <p>
      Для таких случаев предусмотрен входной параметр
      <code>allowOverlayClose</code> блокирующй возможность закрытия окна при
      клике по наложению, так же параметр <code>allowEscapeClose</code>,
      блокирующй возможность закрытия окна при клике по кнопке Escape.
    </p>
    <q-code-block :value="overlayCloseDialog">
      <q-dialog
        ref="overlayCloseDialog"
        :allowOverlayClose="false"
        label="Dialog"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <template v-slot:footer>
          <q-button @click="hideDialog('overlayCloseDialog')" variant="primary">
            Закрыть
          </q-button>
        </template>
      </q-dialog>

      <q-button @click="openDialog('overlayCloseDialog')">
        Показать окно
      </q-button>
    </q-code-block>
    <br />

    <!--  -->
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QCodeBlock } from "@/components/CodeBlock";
import { QButton } from "@/components/Button";
import { QDialog } from "@/components/Dialog";
export default {
  name: "DialogView",
  components: {
    QHeadline,
    QCodeBlock,
    QButton,
    QDialog,
  },
  data() {
    return {
      dialog: `<q-dialog ref="dialog" label="Dialog">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <template v-slot:footer>
    <q-button @click="hideDialog('dialog')" variant="primary">
      Закрыть
    </q-button>
  </template>
</q-dialog>

<q-button @click="openDialog('dialog')">Показать окно</q-button>`,
      dialogWidth: `<q-dialog
  ref="widthDialog"
  label="Dialog"
  class="dialog-width"
  style="--width: 50vw"
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</q-dialog>

<q-button @click="openDialog('widthDialog')">Показать окно</q-button>`,
      scrollingDialog: `<q-dialog ref="scrollingDialog" label="Dialog" class="dialog-scrolling">
  <div
    style="
      height: 150vh;
      border: dashed 2px var(--q-color-neutral-200);
      padding: 0 1rem;
    "
  >
    <p>Scroll down and give it a try! 👇</p>
  </div>
</q-dialog>

<q-button @click="openDialog('scrollingDialog')">Показать окно</q-button>`,
      overlayCloseDialog: `<q-dialog ref="overlayCloseDialog" label="Dialog">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <template v-slot:footer>
    <q-button @click="hideDialog('overlayCloseDialog')" variant="primary">
      Закрыть
    </q-button>
  </template>
</q-dialog>

<q-button @click="openDialog('scrollingDialog')">Показать окно</q-button>`,
    };
  },
  methods: {
    openDialog(name) {
      this.$refs[name].show();
    },
    hideDialog(name) {
      this.$refs[name].hide();
    },
  },
};
</script>

<style lang="scss"></style>
