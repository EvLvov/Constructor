<template>
  <div class="q-textarea">
    <q-headline tag="<q-textarea> | QTextarea">Textarea</q-headline>
    <!--Textareas-->
    <h3>
      Поле ввода данных пользователя, в которое можно вводить несколько строк
      текста.
    </h3>
    <q-textarea></q-textarea>
    <q-code-block value="<q-textarea></q-textarea>"></q-code-block>
    <!--examples -->
    <h2 id="examples">
      <router-link to="/components/textarea?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>
    <!--Rows-->
    <h3 id="rows">
      <router-link to="/components/textarea?id=rows">
        <span>Метки (Rows)</span>
      </router-link>
    </h3>
    <p>
      Используйте атрибут <code>rows</code>, чтобы изменить количество
      отображаемых текстовых строк.
    </p>
    <q-code-block value='<q-textarea rows="2"></q-textarea>'>
      <q-textarea rows="2"></q-textarea>
    </q-code-block>
    <!--Placeholder-->
    <h3 id="placeholders">
      <router-link to="/components/textarea?id=placeholders">
        <span>Метки (Placeholders)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>placeholder</code> для добавления
      метки.
    </p>
    <q-textarea placeholder="Type something"></q-textarea>
    <q-code-block
      value='<q-textarea placeholder="Type something"></q-textarea>'
    ></q-code-block>
    <!--Filled Textareas-->
    <h3 id="filled-textareas">
      <router-link to="/components/textarea?id=filled-textareas">
        <span>Метки (Filled Textareas)</span>
      </router-link>
    </h3>
    <p>
      Добавьте атрибут <code>filled</code>, чтобы нарисовать заполненную
      текстовую область.
    </p>
    <q-textarea placeholder="Type something" filled></q-textarea>
    <q-code-block
      value='<q-textarea placeholder="Type something" filled></q-textarea>'
    ></q-code-block>
    <!--Disabled-->
    <h3 id="Disabled">
      <router-link to="/components/textarea?id=disabled">
        <span>Метки (disabled)</span>
      </router-link>
    </h3>
    <p>
      Используйте атрибут <code>disabled</code>, чтобы отключить текстовую
      область.
    </p>
    <q-textarea placeholder="Type something" disabled></q-textarea>
    <q-code-block
      value='<q-textarea placeholder="Textarea" disabled></q-textarea>'
    ></q-code-block>
    <!--Sizes-->
    <h3 id="Sizes">
      <router-link to="/components/Sizes?id=Sizes">
        <span>Метки (Sizes)</span>
      </router-link>
    </h3>
    <p>
      Используйте атрибут <code>size</code> для изменения размера текстовой
      области.
    </p>
    <p>
      <q-textarea placeholder="Type something" size="small"></q-textarea>
    </p>
    <p>
      <q-textarea placeholder="Type something" size="medium"></q-textarea>
    </p>
    <p>
      <q-textarea placeholder="Type something" size="large"></q-textarea>
    </p>
    <q-code-block
      value='<q-textarea placeholder="Small" size="small"></q-textarea>'
    ></q-code-block>
    <q-code-block
      value='<q-textarea placeholder="Medium" size="Medium"></q-textarea>'
    ></q-code-block>
    <q-code-block
      value='<q-textarea placeholder="Large" size="Large"></q-textarea>'
    ></q-code-block>
    <!--Prevent Resizing-->
    <h3 id="prevent-resizing">
      <router-link to="/components/textarea?id=prevent-resizing">
        <span>Метки (Prevent Resizing)</span>
      </router-link>
    </h3>
    <p>
      По умолчанию размер текстовых областей может быть изменен пользователем по
      вертикали. Чтобы предотвратить изменение размера, установите для атрибута
      <code>resize</code> значение <code>none</code>.
    </p>
    <q-textarea placeholder="Type something" resize="none"></q-textarea>
    <q-code-block
      value='<q-textarea resize="none"></q-textarea>'
    ></q-code-block>
    <!--Expand with Content-->
    <h3 id="expand-with-content">
      <router-link to="/components/textarea?id=expand-with-content">
        <span>Метки (Expand with Content)</span>
      </router-link>
    </h3>
    <p>
      Textarea автоматически изменит размер, чтобы он соответствовал их
      содержимому, если для параметра <code>resize</code> установлено значение
      <code>auto</code>.
    </p>
    <q-textarea placeholder="Type something" resize="auto"></q-textarea>
    <q-code-block
      value='<q-textarea resize="auto"></q-textarea>'
    ></q-code-block>
    <!--Properties-->
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
          <b>По умолчанию</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>rows</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Количество строк, отображаемых по умолчанию.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>number</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>4</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>placeholder</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Текст-заполнитель textarea.</span>
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
          <code>filled</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Рисует заполненную текстовую область.</span>
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
          <code>disabled</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Отключает текстовое поле.</span>
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
          <code>size</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Размер текстовой области.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code
            >'small'<br />
            'medium'<br />
            'large'</code
          >
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'medium'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>resize</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span
            >Управляет тем, как можно изменять размер текстовой области.</span
          >
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code
            >'none'<br />
            'vertical'<br />
            'auto'</code
          >
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'vertical'</code>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <h3 id="properties">
      <router-link to="/components/avatar?id=properties">
        <span>События (Events)</span>
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
        <q-grid-col :col="{ xs: 4 }">
          <b>Описание событий</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>change</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span
            >Выдается, когда пользователь вносит изменение в значение элемента
            управления.</span
          >
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>input</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span
            >Испускается, когда элемент управления получает входные данные и его
            значение изменяется.</span
          >
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>focus</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Излучается, когда элемент управления получает фокус.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>blur</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Излучается, когда элемент управления теряет фокус.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
    </q-grid>
  </div>
</template>

<script>
import QHeadline from "@/blocks/Headline";
import { QTextarea } from "@/components/Textarea";
import { QCodeBlock } from "@/components/CodeBlock";
import { QGrid, QGridCol, QGridRow } from "@/components/Grid";
import { QDivider } from "@/components/Divider";
export default {
  name: "TextView",
  components: {
    QHeadline,
    QTextarea,
    QCodeBlock,
    QGrid,
    QGridCol,
    QGridRow,
    QDivider,
  },
};
</script>

<style lang="scss" scoped></style>
