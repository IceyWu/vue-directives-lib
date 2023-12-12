import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.css";
import "virtual:uno.css";
import "vue-toastification/dist/index.css";
import vueDirectives from "../../packages";
// import vueDirectives from "vue-directives-lib";
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";
const toastOptions: PluginOptions = {
  // You can set your default options here
  maxToasts: 3,
  timeout: 1500,
  closeOnClick: true,
  pauseOnFocusLoss: true
};

const app = createApp(App);
app.use(Toast, toastOptions);
app.use(vueDirectives);
app.mount("#app");
