<template>
  <div class="app">
    <metainfo>
      <template v-slot:title>{{ title }}</template>
    </metainfo>
    <q-icon-button
      name="list"
      label="Menu"
      class="app__menu"
      style="font-size: 1.6rem"
      @click="toggleSidebar()"
    ></q-icon-button>
    <q-sidebar class="app__sidebar"></q-sidebar>
    <div class="app__content">
      <div class="app__preloader" v-if="isLoading">
        <q-spinner size="2rem" speed="1.5s"></q-spinner>
      </div>
      <transition name="page">
        <router-view v-if="!isLoading" />
      </transition>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import EventHub from "@/internal/event";
import { useMeta } from "vue-meta";
import { lockBodyScrolling, unlockBodyScrolling } from "@/internal/scroll";
import { QSidebar } from "@/blocks/Sidebar";
import { QSpinner } from "@/components/Spinner";
import { QIconButton } from "@/components/IconButton";

export default {
  name: "App",
  setup() {
    useMeta({ title: "" });
  },
  components: {
    QSidebar,
    QSpinner,
    QIconButton,
  },
  data() {
    return {
      isOpened: false,
      isLoading: false,
    };
  },
  mounted() {
    EventHub.on("componentLoading", this.start);
    EventHub.on("componentLoaded", this.stop);
    this.title = _.startCase(this.$route.name);
    console.log(this.title, this.$route.name);
  },
  computed: {
    title() {
      return _.startCase(this.$route.name);
    },
    icon() {
      return !this.isOpened ? "list" : "x-lg";
    },
  },
  methods: {
    start() {
      this.isLoading = true;
      lockBodyScrolling();
    },
    stop() {
      setTimeout(() => {
        this.isLoading = false;

        unlockBodyScrolling();
      }, 500);
    },

    toggleSidebar() {
      this.isOpened = !this.isOpened;

      if (this.isOpened) {
        document.body.classList.add("q-sidebar-opened");
      } else {
        document.body.classList.remove("q-sidebar-opened");
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  a {
    text-decoration: unset;
    color: var(--u-color-neutral-900);
  }
}

code {
  font-family: var(--u-font-mono);
  font-size: 87.5%;
  background-color: var(--u-color-neutral-50);
  border-radius: var(--u-border-radius-small);
  padding: 2px 6px;
}

.app__menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: none;
  transition: 250ms ease;
}

.app__sidebar {
  @media (max-width: 768px) {
    transform: translateX(-300px);
  }
}

.app__content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 300px;
  transition: left 250ms ease;
}

.app__preloader {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .app__sidebar {
    transform: translateX(-300px);
  }

  .app__content {
    left: 0;
    max-width: 100vw;
    position: static;
    padding-top: 20px;
    transition: transform 250ms ease;
  }

  .app__menu {
    display: inline;
  }

  .q-sidebar-opened #app {
    overflow: hidden;
  }

  .q-sidebar-opened .app__menu {
    transform: translateX(300px);
  }

  .q-sidebar-opened .app__sidebar {
    transform: translateX(0) !important;
  }

  .q-sidebar-opened .app__content {
    transform: translateX(300px);
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
