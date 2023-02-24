import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "animate.css";
// import "./themes/light.scss";
import "./themes/dark.scss";
import "./styles/media.scss";
import "./styles/app.scss";

const app = createApp(App);

app.use(router);
app.use(createMetaManager());

app.mount("#app");
