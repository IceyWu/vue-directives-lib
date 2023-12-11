import { createApp } from "vue";
import App from "./App.vue";

import "./dark.scss";
import vueDirectives from "../dist/index.es";
import { useI18n } from "./i18n";

const app = createApp(App);

app.use(useI18n);
app.use(vueDirectives);

app.mount("#app");
