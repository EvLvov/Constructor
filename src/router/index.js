import { createRouter, createWebHistory } from "vue-router";
import EventHub from "../internal/event";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/get-started",
    name: "get-started",
    component: () => import("../views/GetStartedView.vue"),
  },
  {
    path: "/foundation",
    name: "foundation",
    component: () => import("../views/FoundationView"),
  },
  {
    path: "/components",
    name: "components",
    component: () => import("../views/ComponentsView.vue"),
    children: [
      {
        path: "input",
        name: "input",
        component: () => import("../views/InputView.vue"),
      },
      {
        path: "button",
        name: "button",
        component: () => import("../views/ButtonView.vue"),
      },
      {
        path: "button-group",
        name: "button-group",
        component: () => import("../views/ButtonGroupView.vue"),
      },
      {
        path: "card",
        name: "card",
        component: () => import("../views/CardView"),
      },
      {
        path: "checkbox",
        name: "checkbox",
        component: () => import("../views/CheckboxView.vue"),
      },
      {
        path: "alert",
        name: "alert",
        component: () => import("../views/AlertView.vue"),
      },
      {
        path: "badge",
        name: "badge",
        component: () => import("../views/BadgeView.vue"),
      },
      {
        path: "avatar",
        name: "avatar",
        component: () => import("../views/AvatarView.vue"),
      },
      {
        path: "divider",
        name: "divider",
        component: () => import("../views/DividerView.vue"),
      },
      {
        path: "menu",
        name: "menu",
        component: () => import("../views/MenuView.vue"),
      },
      {
        path: "menu-label",
        name: "menu-label",
        component: () => import("../views/MenuLabelView.vue"),
      },
      {
        path: "menu-item",
        name: "menu-item",
        component: () => import("../views/MenuItemView.vue"),
      },
      {
        path: "spinner",
        name: "spinner",
        component: () => import("../views/SpinnerView.vue"),
      },
      {
        path: "dialog",
        name: "dialog",
        component: () => import("../views/DialogView.vue"),
      },
      {
        path: "popup",
        name: "popup",
        component: () => import("../views/PopupView"),
      },
      {
        path: "code-editor",
        name: "code-editor",
        component: () => import("../views/CodeEditorView.vue"),
      },
      {
        path: "tree",
        name: "tree",
        component: () => import("../views/TreeView.vue"),
      },
      {
        path: "tree-item",
        name: "tree-item",
        component: () => import("../views/TreeItemView.vue"),
      },
      {
        path: "select",
        name: "select",
        component: () => import("../views/SelectView.vue"),
      },
      {
        path: "icon",
        name: "icon",
        component: () => import("../views/IconView.vue"),
      },
      {
        path: "iconbutton",
        name: "iconbutton",
        component: () => import("../views/IconButtonView.vue"),
      },
      {
        path: "dropdown",
        name: "dropdown",
        component: () => import("../views/DropdownView.vue"),
      },
      {
        path: "textarea",
        name: "textarea",
        component: () => import("../views/TextareaView.vue"),
      },
      {
        path: "select",
        name: "select",
        component: () => import("../views/SelectView.vue"),
      },
      {
        path: "icon",
        name: "icon",
        component: () => import("../views/IconView.vue"),
      },
      {
        path: "iconbutton",
        name: "iconbutton",
        component: () => import("../views/IconButtonView.vue"),
      },
      {
        path: "dropdown",
        name: "dropdown",
        component: () => import("../views/DropdownView.vue"),
      },
      {
        path: "drawer",
        name: "drawer",
        component: () => import("../views/DrawerView.vue"),
      },
      {
        path: "test",
        name: "test",
        component: () => import("../views/TestView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  EventHub.emit("componentLoading", to);
  next();
});

router.beforeResolve((to, from, next) => {
  EventHub.emit("componentLoaded");
  next();
});

export default router;
