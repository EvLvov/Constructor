<template>
  <div class="q-button-view">
    <q-headline tag="<q-button> | QButton">Button</q-headline>
    <p>Пользовательские кнопки</p>
    <q-button>Button</q-button>
    <h2 id="examples">
      <router-link to="/components/code-editor?id=examples">
        <span>Варианты использования</span>
      </router-link>
    </h2>

    <h3 id="variants">
      <router-link to="/components/button?id=variants">
        <span>Варианты (Variants)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>variant</code>, чтобы установить тему
      кнопки.
    </p>
    <q-code-block :value="variants">
      <q-button variant="default">Default</q-button>
      <q-button variant="primary">Primary</q-button>
      <q-button variant="success">Success</q-button>
      <q-button variant="neutral">Neutral</q-button>
      <q-button variant="warning">Warning</q-button>
      <q-button variant="danger">Danger</q-button>
    </q-code-block>

    <h3 id="sizes">
      <router-link to="/components/button?id=sizes">
        <span>Размеры (Sizes)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>size</code>, чтобы установить размер
      кнопки.
    </p>
    <q-code-block :value="size">
      <q-button size="small">Small</q-button>
      <q-button size="medium">Medium</q-button>
      <q-button size="large">Large</q-button>
    </q-code-block>

    <h3 id="outline-buttons">
      <router-link to="/components/button?id=outline-buttons">
        <span>Размеры (Outline Buttons)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>outline</code>, чтобы вывести контурные
      кнопки.
    </p>
    <q-code-block :value="outlineButtons">
      <q-button variant="default" outline>Default</q-button>
      <q-button variant="primary" outline>Primary</q-button>
      <q-button variant="success" outline>Success</q-button>
      <q-button variant="neutral" outline>Neutral</q-button>
      <q-button variant="warning" outline>Warning</q-button>
      <q-button variant="danger" outline>Danger</q-button>
    </q-code-block>

    <h3 id="pill">
      <router-link to="/components/button?id=pill">
        <span>Таблетки (Pill Buttons)</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>pill</code>, чтобы вывести кнопки в
      виде таблеток.
    </p>
    <q-code-block :value="pill">
      <q-button size="small" pill>Small</q-button>
      <q-button size="medium" pill>Medium</q-button>
      <q-button size="large" pill>Large</q-button>
    </q-code-block>

    <h3 id="circle">
      <router-link to="/components/button?id=circle">
        <span>Circle Buttons</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>circle</code>, чтобы вывести кнопки в
      виде круга.
    </p>
    <q-code-block :value="circle">
      <q-button variant="default" size="small" circle>
        <q-icon name="gear" label="Settings"></q-icon>
      </q-button>
      <q-button variant="default" size="medium" circle>
        <q-icon name="gear" label="Settings"></q-icon>
      </q-button>
      <q-button variant="default" size="large" circle>
        <q-icon name="gear" label="Settings"></q-icon>
      </q-button>
    </q-code-block>

    <h3 id="text">
      <router-link to="/components/button?id=text">
        <span>Текстовые кнопки</span>
      </router-link>
    </h3>
    <p>
      Для создания тектовых кнопок укажите входной параметр
      <code>variant="text"</code>
    </p>
    <q-code-block :value="text">
      <q-button variant="text" size="small">Text</q-button>
      <q-button variant="text" size="medium">Text</q-button>
      <q-button variant="text" size="large">Text</q-button>
    </q-code-block>

    <h3 id="text">
      <router-link to="/components/button?id=text">
        <span>Текстовые кнопки</span>
      </router-link>
    </h3>
    <p>
      Для создания тектовых кнопок укажите входной параметр
      <code>variant="text"</code>
    </p>
    <q-code-block>
      <q-button href="https://example.com/">Link</q-button>
      <q-button href="https://example.com/" target="_blank">
        New Window
      </q-button>
      <q-button href="/assets/images/wordmark.svg" download="shoelace.svg">
        Download
      </q-button>
      <q-button href="https://example.com/" disabled> Disabled </q-button>
    </q-code-block>

    <h3 id="setting-a-custom-width">
      <router-link to="/components/button?id=setting-a-custom-width">
        <span>Настройка нестандартной ширины</span>
      </router-link>
    </h3>
    <p>
      Как и ожидалось, кнопкам можно присвоить пользовательскую ширину,
      установив атрибут ширины. Это полезно для создания кнопок, которые
      занимают всю ширину своего контейнера на небольших экранах.
    </p>
    <q-code-block :value="customWidth">
      <q-button
        variant="default"
        size="small"
        style="width: 100%; margin-bottom: 1rem"
      >
        Small
      </q-button>
      <q-button
        variant="default"
        size="medium"
        style="width: 100%; margin-bottom: 1rem"
      >
        Medium
      </q-button>
      <q-button variant="default" size="large" style="width: 100%">
        Large
      </q-button>
    </q-code-block>

    <h3 id="prefix-and-suffix">
      <router-link to="/components/button?id=prefix-and-suffix">
        <span>Префикс и суффикс (Prefix and Suffix)</span>
      </router-link>
    </h3>
    <p>
      Как и ожидалось, кнопкам можно присвоить пользовательскую ширину,
      установив атрибут ширины. Это полезно для создания кнопок, которые
      занимают всю ширину своего контейнера на небольших экранах.
    </p>
    <q-code-block :value="prefixAndSuffix">
      <q-button variant="default" size="small">
        <template v-slot:prefix>
          <q-icon name="gear"></q-icon>
        </template>
        Settings
      </q-button>

      <q-button variant="default" size="small">
        <template v-slot:suffix>
          <q-icon name="arrow-counterclockwise"></q-icon>
        </template>
        Refresh
      </q-button>

      <q-button variant="default" size="small">
        <template v-slot:prefix>
          <q-icon name="link-45deg"></q-icon>
        </template>
        <template v-slot:suffix>
          <q-icon name="box-arrow-up-right"></q-icon>
        </template>
        Open
      </q-button>

      <br /><br />

      <q-button variant="default">
        <template v-slot:prefix>
          <q-icon name="gear"></q-icon>
        </template>
        Settings
      </q-button>

      <q-button variant="default">
        <template v-slot:suffix>
          <q-icon name="arrow-counterclockwise"></q-icon>
        </template>
        Refresh
      </q-button>

      <q-button variant="default">
        <template v-slot:prefix>
          <q-icon name="link-45deg"></q-icon>
        </template>
        <template v-slot:suffix>
          <q-icon name="box-arrow-up-right"></q-icon>
        </template>
        Open
      </q-button>

      <br /><br />

      <q-button variant="default" size="large">
        <template v-slot:prefix>
          <q-icon name="gear"></q-icon>
        </template>
        Settings
      </q-button>

      <q-button variant="default" size="large">
        <template v-slot:suffix>
          <q-icon name="arrow-counterclockwise"></q-icon>
        </template>
        Refresh
      </q-button>

      <q-button variant="default" size="large">
        <template v-slot:prefix>
          <q-icon name="link-45deg"></q-icon>
        </template>
        <template v-slot:suffix>
          <q-icon name="box-arrow-up-right"></q-icon>
        </template>
        Open
      </q-button>
    </q-code-block>

    <h3 id="disabled">
      <router-link to="/components/button?id=disabled">
        <span>Disabled</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>disabled</code>, чтобы отключить
      кнопку.
    </p>
    <q-code-block :value="disabled">
      <q-button variant="default" disabled>Default</q-button>
      <q-button variant="primary" disabled>Primary</q-button>
      <q-button variant="success" disabled>Success</q-button>
      <q-button variant="neutral" disabled>Neutral</q-button>
      <q-button variant="warning" disabled>Warning</q-button>
      <q-button variant="danger" disabled>Danger</q-button>
    </q-code-block>
    <br />

    <!-- Loading -->
    <h3 id="loading">
      <router-link to="/components/button?id=loading">
        <span>Loading</span>
      </router-link>
    </h3>
    <p>
      Используйте входной параметр <code>loading</code>, чтобы включить
      состояние загрузки.
    </p>
    <q-code-block :value="loading">
      <q-button variant="default" loading>Default</q-button>
      <q-button variant="primary" loading>Primary</q-button>
      <q-button variant="success" loading>Success</q-button>
      <q-button variant="neutral" loading>Neutral</q-button>
      <q-button variant="warning" loading>Warning</q-button>
      <q-button variant="danger" loading>Danger</q-button>
    </q-code-block>
    <br />

    <!-- Slots -->
    <h3 id="slots">
      <router-link to="/components/avatar?id=slots">
        <span>Слоты (Slots)</span>
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
          <span>(default)</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Содержание кнопки.</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>prefix</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Префикс. Текст, иконка или аналогичный элемент.</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>suffix</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Суффикс. Текст, иконка или аналогичный элемент.</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>

    <br />
    <!--Attributes & Properties-->
    <h3 id="attributes-amp-properties">
      <router-link to="/components/button?id=attributes-amp-properties">
        <span>Входные параметры (Props)</span>
      </router-link>
    </h3>
    <q-grid>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <b>Название</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <b>Описание</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <b>Тип</b>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <b>По Умолчанию</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>variant</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Вариант темы кнопки.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>'default'</code> <br />
          <code>'primary'</code> <br />
          <code>'success'</code> <br />
          <code>'neutral'</code> <br />
          <code>'warning'</code> <br />
          <code>'danger'</code> <br />
          <code>'text'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'default'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>size</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Размер кнопки.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>'small'</code> <br />
          <code>'medium'</code> <br />
          <code>'large'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 1 }">
          <code>'medium'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>caret</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Добавляет иконку. Используется для указания на то, что кнопка
            отображает выпадающее меню или аналогичное поведение.
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
          <code>disabled</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Отключает кнопку.</span>
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
          <code>loading</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Состояние загрузки.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>boolean</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 1 }">
          <code>false</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>outline</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Рисует контурную кнопку.</span>
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
          <code>pill</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>Кнопка в виде таблетки с закругленными краями.</span>
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
          <code>circle</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Рисует круглую кнопку. Когда этот атрибут присутствует, кнопка
            ожидает одиночного <code>&lt;q-icon&gt;</code> переданного через
            слот по умолчанию.
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
          <code>type</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Тип кнопки. Обратите внимание, что значение по умолчанию - button
            вместо submit, что противоположно тому, как ведут себя собственные
            элементы <code>&lt;button&gt;</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>'button' | 'submit' | 'reset'</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>'button'</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>name</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Название кнопки, отправляемое в виде пары имя/значение с данными
            формы, но только в том случае. Этот атрибут игнорируется, когда
            присутствует атрибут <code>href</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>''</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>href</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            При установке кнопка будет отображаться как
            <code>&lt;a&gt;</code> с этим <code>href</code> вместо
            <code>&lt;button&gt;</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>string</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <code>''</code>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>target</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Указывает браузеру, где открыть ссылку. Используется только при
            наличии <code>href</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>'_blank'</code> <br />
          <code>'_parent'</code> <br />
          <code>'_self'</code> <br />
          <code>'_top'</code> <br />
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>download</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 5 }">
          <span>
            Сообщает браузеру загрузить связанный файл с этим именем файла.
            Используется только при наличии <code>href</code>.
          </span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 3 }">
          <code>string | undefined</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />

    <!--Events-->
    <h3 id="events">
      <router-link to="/components/button?id=events">
        <span>Евенты (Events)</span>
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
          <b>Информация</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>blur</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Излучается, когда кнопка теряет фокус.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>focus</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Излучается, когда кнопка получает фокус.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />

    <!-- Methods -->
    <h3 id="methods">
      <router-link to="/components/button?id=methods">
        <span>Методы (Methods)</span>
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
        <q-grid-col :col="{ xs: 2 }">
          <b>Аргументы</b>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>click()</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Имитирует нажатие на кнопку.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>focus()</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Устанавливает фокус на кнопке.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }"> - </q-grid-col>
      </q-grid-row>
      <q-divider></q-divider>
      <q-grid-row>
        <q-grid-col :col="{ xs: 2 }">
          <code>blur()</code>
        </q-grid-col>
        <q-grid-col :col="{ xs: 6 }">
          <span>Удаляет фокус с кнопки.</span>
        </q-grid-col>
        <q-grid-col :col="{ xs: 2 }">
          <span>-</span>
        </q-grid-col>
      </q-grid-row>
    </q-grid>
    <br />

    <!-- Dependencies -->
    <h3 id="dependencies">
      <router-link to="/components/button?id=dependencies">
        <span>Зависимости (Dependencies)</span>
      </router-link>
    </h3>
    <ul>
      <li><code>&lt;QIcon&gt;</code></li>
      <li><code>&lt;QSpinner&gt;</code></li>
    </ul>
  </div>
</template>
<script>
import QHeadline from "@/blocks/Headline";
import { QButton } from "@/components/Button";
import { QCodeBlock } from "@/components/CodeBlock";
import { QGrid, QGridCol, QGridRow } from "@/components/Grid";
import { QDivider } from "@/components/Divider";
import { QIcon } from "@/components/Icon";

export default {
  name: "QButtonView",
  components: {
    QHeadline,
    QButton,
    QCodeBlock,
    QIcon,
    QGrid,
    QGridCol,
    QGridRow,
    QDivider,
  },
  data() {
    return {
      variants: `<q-button variant="default">Default</q-button>
<q-button variant="primary">Primary</q-button>
<q-button variant="success">Success</q-button>
<q-button variant="neutral">Neutral</q-button>
<q-button variant="warning">Warning</q-button>
<q-button variant="danger">Danger</q-button>`,
      size: `<q-button size="small">Small</q-button>
<q-button size="medium">Medium</q-button>
<q-button size="large">Large</q-button>`,
      outlineButtons: `<q-button variant="default" outline>Default</q-button>
<q-button variant="primary" outline>Primary</q-button>
<q-button variant="success" outline>Success</q-button>
<q-button variant="neutral" outline>Neutral</q-button>
<q-button variant="warning" outline>Warning</q-button>
<q-button variant="danger" outline>Danger</q-button>`,
      pill: `<q-button size="small" pill>Small</q-button>
<q-button size="medium" pill>Medium</q-button>
<q-button size="large" pill>Large</q-button>`,
      circle: `<q-button variant="default" size="small" circle>
  <q-icon name="gear" label="Settings"></q-icon>
</q-button>
<q-button variant="default" size="medium" circle>
  <q-icon name="gear" label="Settings"></q-icon>
</q-button>
<q-button variant="default" size="large" circle>
  <q-icon name="gear" label="Settings"></q-icon>
</q-button>`,
      text: `<q-button variant="text" size="small">Text</q-button>
<q-button variant="text" size="medium">Text</q-button>
<q-button variant="text" size="large">Text</q-button>`,
      customWidth: `
<q-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem">
  Small
</q-button>
<q-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem">
  Medium
</q-button>
<q-button variant="default" size="large" style="width: 100%">
  Large
</q-button>`,
      prefixAndSuffix: `<q-button variant="default" size="small">
  <template v-slot:prefix>
    <q-icon name="gear"></q-icon>
  </template>
  Settings
</q-button>

<q-button variant="default" size="small">
  <template v-slot:suffix>
    <q-icon name="arrow-counterclockwise"></q-icon>
  </template>
  Refresh
</q-button>

<q-button variant="default" size="small">
  <template v-slot:prefix>
    <q-icon name="link-45deg"></q-icon>
  </template>
  <template v-slot:suffix>
    <q-icon name="box-arrow-up-right"></q-icon>
  </template>
  Open
</q-button>

<br /><br />

<q-button variant="default">
  <template v-slot:prefix>
    <q-icon name="gear"></q-icon>
  </template>
  Settings
</q-button>

<q-button variant="default">
  <template v-slot:suffix>
    <q-icon name="arrow-counterclockwise"></q-icon>
  </template>
  Refresh
</q-button>

<q-button variant="default">
  <template v-slot:prefix>
    <q-icon name="link-45deg"></q-icon>
  </template>
  <template v-slot:suffix>
    <q-icon name="box-arrow-up-right"></q-icon>
  </template>
  Open
</q-button>

<br /><br />

<q-button variant="default" size="large">
  <template v-slot:prefix>
    <q-icon name="gear"></q-icon>
  </template>
  Settings
</q-button>

<q-button variant="default" size="large">
  <template v-slot:suffix>
    <q-icon name="arrow-counterclockwise"></q-icon>
  </template>
  Refresh
</q-button>

<q-button variant="default" size="large">
  <template v-slot:prefix>
    <q-icon name="link-45deg"></q-icon>
  </template>
  <template v-slot:suffix>
    <q-icon name="box-arrow-up-right"></q-icon>
  </template>
  Open
</q-button>`,
      disabled: `<q-button variant="default" disabled>Default</q-button>
<q-button variant="primary" disabled>Primary</q-button>
<q-button variant="success" disabled>Success</q-button>
<q-button variant="neutral" disabled>Neutral</q-button>
<q-button variant="warning" disabled>Warning</q-button>
<q-button variant="danger" disabled>Danger</q-button>`,
      loading: `<q-button variant="default" loading>Default</q-button>
<q-button variant="primary" loading>Primary</q-button>
<q-button variant="success" loading>Success</q-button>
<q-button variant="neutral" loading>Neutral</q-button>
<q-button variant="warning" loading>Warning</q-button>
<q-button variant="danger" loading>Danger</q-button>`,
    };
  },
};
</script>

<style lang="scss" scoped>
.q-button {
  margin-right: 0.5rem;
}
</style>
