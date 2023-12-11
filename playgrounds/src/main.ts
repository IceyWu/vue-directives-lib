import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.css";
import "virtual:uno.css";
// import vueDirectives  from "../../packages";
import vueDirectives from "vue-directives-lib";

const app = createApp(App);
app.use(vueDirectives);
app.mount("#app");
